"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { STORIES } from "@/lib/stories";

export default function CaseFilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // get story ID from query parameter
  const storyId = searchParams.get("storyId");

  // get the selected story from stories.js
  const story = STORIES[storyId];

  if (!story) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 text-red-500">
            Case not found
          </h1>
          <button
            onClick={() => router.push("/cases")}
            className="px-6 py-3 rounded-xl bg-red-800 hover:bg-red-700 transition font-semibold"
          >
            Back to Levels
          </button>
        </div>
      </div>
    );
  }

  // get the title and casefile from the story object
  const { title, casefile } = story;

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-4xl">

        <div className="bg-zinc-900 border border-red-900/40 rounded-2xl shadow-2xl shadow-red-900/20 p-10">

          <h1 className="text-4xl font-bold mb-3">
            {title}
          </h1>

          <h2 className="text-xl text-red-500 mb-8 tracking-wide">
            {casefile.headline}
          </h2>

          <div className="space-y-6 text-zinc-300 leading-relaxed whitespace-pre-line">
            {casefile.overview}
          </div>

          <div className="mt-10 p-6 rounded-xl bg-zinc-800/60 border border-red-900/30">
            <h3 className="text-lg font-semibold text-red-500 mb-3">
              Your Objective
            </h3>
            <p className="text-zinc-300 whitespace-pre-line">
              {casefile.objective}
            </p>
          </div>

          <div className="mt-12 flex justify-between">
            <button
              onClick={() => router.push("/cases")}
              className="px-6 py-3 cursor-pointer rounded-xl bg-zinc-700 hover:bg-zinc-600 transition font-medium"
            >
              Back
            </button>

            <button
              onClick={() =>
                router.push(`/suspects?storyId=${storyId}`)
              }
              className="px-6 py-3 cursor-pointer rounded-xl bg-red-800 hover:bg-red-700 transition font-semibold shadow-lg shadow-red-900/40"
            >
              Interrogate
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}