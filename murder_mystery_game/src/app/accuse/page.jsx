'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { STORIES } from '@/lib/stories';

export default function AccusePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // get story ID from the query parameter
  const storyId = searchParams.get('storyId');

  // get the selected story from stories.js
  const story = STORIES[storyId];

  const [modal, setModal] = useState(null);

  if (!story) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center p-8">
        Story not found.
      </div>
    );
  }

  // get all characters from the selected story
  const CHARACTERS = Object.values(story.characters);

  // get the murderer from the story
  const murdererId = story.truth.murderer;

  function handleAccuse(characterId) {
    // if the character user clicked is murderer they win, if not try again
    if (characterId === murdererId) {
      setModal("correct");
    } else {
      setModal("wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center p-8 gap-8">

      <h1 className="text-3xl font-bold tracking-wide text-red-500">
        Make Your Accusation
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => handleAccuse(c.id)}
            className="w-56 h-36 rounded-2xl border bg-zinc-900 border-zinc-700 cursor-pointer hover:border-red-600 hover:scale-[1.02] transition-all shadow-lg p-4 text-left"
          >
            <div className="text-xl font-bold">{c.name}</div>
            <div className="text-sm mt-1 text-zinc-400">{c.role}</div>
            <div className="mt-3 text-xs text-zinc-500">Click to accuse</div>
          </button>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-zinc-900 border border-red-600 rounded-2xl p-8 text-center w-80 shadow-2xl">

            {modal === "correct" ? (
              <div className="text-green-400 text-xl font-bold">
                You caught the murderer!
              </div>
            ) : (
              <div className="text-red-500 text-xl font-bold">
                Wrong accusation.
              </div>
            )}

            <button
              onClick={() => router.push(`/suspects?storyId=${storyId}`)}
              className="mt-6 bg-red-700 hover:bg-red-600 px-6 py-2 rounded-xl cursor-pointer font-semibold"
            >
              Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
}