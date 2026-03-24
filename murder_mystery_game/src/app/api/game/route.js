import { NextResponse } from "next/server";
import { STORIES } from "@/lib/stories";
import { interrogateCharacter } from "@/lib/ai";

export async function POST(req) {
  try {
    const body = await req.json();

    // get story ID, character ID, memory and user question from the API request
    const { storyId, characterId, memory, question } = body;

    // get the selected story from stories.js
    const story = STORIES[storyId];
    if (!story) {
      return NextResponse.json({ error: `story "${storyId}" not found.` }, { status: 404 });
    }

    if (!story.characters[characterId]) {
      return NextResponse.json({ error: `character "${characterId}" not found in story.` }, { status: 404 });
    }

    if (!question) {
      return NextResponse.json({ error: "No question provided" }, { status: 400 });
    }

    // call the interrogateCharacter function from ai.js and pass in the info from API request
    const answer = await interrogateCharacter({
      story,
      characterId,
      memory,
      question
    });

    return NextResponse.json({ answer });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}