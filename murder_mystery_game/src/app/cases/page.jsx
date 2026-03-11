'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { STORIES } from "@/lib/stories";

export default function Levels() {
  const router = useRouter();
  const storyList = Object.values(STORIES);

  const handleSelect = (storyId) => {
    router.push(`/caseFile?storyId=${storyId}`);
  };

  return (
    <div className="min-h-screen bg-black text-red-600 flex flex-col items-center px-6 py-12">
      
      <Link href="/">
        <button className="mb-12 cursor-pointer text-red-500 hover:text-red-400 transition">
          ← Back
        </button>
      </Link>

      <h1 className="text-4xl font-semibold mb-12 tracking-widest text-red-700">
        SELECT A CASE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {storyList.map((story) => (
          <div
            key={story.id}
            onClick={() => handleSelect(story.id)}
            className="cursor-pointer bg-neutral-900 border border-red-800 hover:border-red-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.3)]"
          >
            <h2 className="text-2xl mb-4 text-red-600 font-semibold">
              {story.title}
            </h2>

            {story.setting && (
              <p className="text-neutral-400 text-sm mb-3">
                {story.setting.location}
              </p>
            )}

            {story.setting?.atmosphere && (
              <p className="text-neutral-500 text-sm leading-relaxed">
                {story.setting.atmosphere}
              </p>
            )}

            <div className="mt-6 text-xs text-red-500 tracking-wider">
              ENTER INVESTIGATION →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}