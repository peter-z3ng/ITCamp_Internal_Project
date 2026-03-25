import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Build character context for system instructions
function buildCharacterContext(story, character) {
  if (!character) return "Error: character not found.";

  const limitedBackstory = story.backstory
    ? Object.values(story.backstory).slice(0, 2).join("\n")
    : "";

  const personalKnowledge = character.knows?.join("\n") || "";
  const subtleSurface = character.subtleClues?.surface?.join("\n") || "";

  return `
You are inside ${story.setting?.location || "unknown location"}.
Time: ${story.setting?.time || "unknown time"}

Atmosphere:
${story.setting?.atmosphere || "unknown"}

What you personally experienced or noticed tonight:
${personalKnowledge}

Background you are aware of:
${limitedBackstory}

Victim:
${story.victim?.name || "unknown"} — ${story.victim?.personality || "unknown"}

Your alibi:
${character.alibi || "None provided"}

Your personality:
${character.personality || "unknown"}

Your relationships:
${Object.values(character.relationships || {}).join("\n") || "None"}

Private pressures you are carrying:
${character.secrets?.join("\n") || "None"}

Things you have publicly claimed:
${character.lies?.join("\n") || "None"}

Your subtle behavioral tells:
${subtleSurface || "None"}
`;
}

export async function interrogateCharacter({ story, characterId, memory = [], question }) {
  if (!story) return `Error: story "${story}" not found.`;

  const character = story.characters?.[characterId];
  if (!character) return `Error: character "${characterId}" not found in story "${story.title}".`;

  const systemPrompt = `
You are ${character.name}, being questioned about a death.

Rules:
- You only know what is provided in your context.
- You do not have access to the full case file.
- You do not know hidden evidence unless you personally encountered it.
- If you are the killer, you know what you did, but you will not confess unless logically cornered.
- Answer only the detective's question.
- Speak naturally, emotionally believable.
- Do not list structured data.
- Keep responses concise.
- If unsure, admit it.
`;

  const characterContext = buildCharacterContext(story, character);

  try {
    const recentMemory = memory.slice(-20).map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "system", content: characterContext },
      ...recentMemory,
      { role: "user", content: question }
    ];

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.8,
      max_tokens: 180,
      messages
    });

    return response.choices?.[0]?.message?.content?.trim() || "No response from AI.";
  } catch (err) {
    console.error("Error contacting OpenAI:", err);
    return "Error contacting AI.";
  }
}