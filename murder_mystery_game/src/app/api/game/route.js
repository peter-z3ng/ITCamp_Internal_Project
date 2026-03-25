import { NextResponse } from "next/server";
import { STORIES } from "@/lib/stories";
import { interrogateCharacter } from "@/lib/ai";

export async function POST(req) {
  try {
    const body = await req.json();
    const { storyId, characterId, memory, question } = body;

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