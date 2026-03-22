'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { STORIES } from '@/lib/stories';

export default function CaseFilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storyId = searchParams.get('storyId');
  const story = storyId ? STORIES[storyId] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        Case not found
      </div>
    );
  }

  const imageSrc = `/casefiles/${story.id}.png`;

  const handleBeginInvestigation = () => {
    router.push(`/suspects?storyId=${story.id}`);
  };

  return (
    <div className="min-h-screen w-screen bg-black overflow-hidden relative">
      <Link
        href="/levels"
        className="fixed left-6 top-6 z-30 text-white text-[2.6vw] tracking-widest transition duration-300 hover:text-red-700 font-investigation"
      >
        ← BACK
      </Link>

      <img
        src={imageSrc}
        alt={`${story.id} case file`}
        className="block w-full h-auto select-none"
        draggable="false"
      />

      <button
        onClick={handleBeginInvestigation}
        className="absolute bottom-[4%] right-[5%] z-20 text-white text-[2.6vw] tracking-widest transition duration-300 hover:text-red-700 font-investigation"
      >
        BEGIN INVESTIGATION
      </button>
    </div>
  );
}