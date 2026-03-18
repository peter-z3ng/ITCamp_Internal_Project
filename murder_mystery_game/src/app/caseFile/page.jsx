'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { STORIES } from '@/lib/stories';

export default function CaseFilePage() {
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

  const suspects = Object.values(story.characters || {});
  const suspectCount = suspects.length;

  const templateMap = {
    3: '/casefiles/casefile-3.png',
    4: '/casefiles/casefile-4.png',
    5: '/casefiles/casefile-5.png',
  };

  const suspectLayoutMap = {
    3: [
      { left: 40, top: 0 },
      { left: 220, top: 0 },
      { left: 130, top: 170 },
    ],
    4: [
      { left: 0, top: 0 },
      { left: 170, top: 0 },
      { left: 340, top: 0 },
      { left: 170, top: 170 },
    ],
    5: [
      { left: 0, top: 0 },
      { left: 170, top: 0 },
      { left: 340, top: 0 },
      { left: 85, top: 170 },
      { left: 255, top: 170 },
    ],
  };

  const templateSrc = templateMap[suspectCount] || templateMap[3];
  const suspectPositions =
    suspectLayoutMap[suspectCount] || suspectLayoutMap[3];

  const displayTime =
    story.timeline && Object.keys(story.timeline).length > 0
      ? `${Object.keys(story.timeline)[0]} - ${
          Object.keys(story.timeline)[Object.keys(story.timeline).length - 1]
        }`
      : story.setting?.time || 'Unknown';

  const victimFoundLocation = story.setting?.location || 'Unknown';
  const causeOfDeath = story.truth?.weapon || 'Unknown';
  const overview = story.casefile?.overview?.trim() || '';
  const objective = story.casefile?.objective?.trim() || '';
  const headline = story.casefile?.headline || story.title || 'Case File';

  return (
  <div className="relative w-screen overflow-hidden">
    <Link
      href="/levels"
      className="absolute top-4 left-4 z-20 text-white text-[2vw] tracking-widest transition duration-300 hover:text-red-600 font-investigation"
    >
      ← Back
    </Link>

    <div className="relative w-full">
      <img
        src={templateSrc}
        alt="Case file template"
        className="block w-full h-auto"
      />

      {/* Headline */}
      <div className="absolute left-[15%] top-[8.5%] w-[52%] text-center text-[#2b1a12] font-serif font-bold text-[1.15vw] leading-tight">
        {headline}
      </div>

      {/* Case ID */}
      <div className="absolute left-[22.8%] top-[18.2%] w-[18%] text-[#2b1a12] font-serif text-[0.95vw]">
        {story.id}
      </div>

      {/* Date / Time */}
      <div className="absolute left-[20.8%] top-[23.2%] w-[24%] text-[#2b1a12] font-serif text-[0.95vw]">
        {displayTime}
      </div>

      {/* Location */}
      <div className="absolute left-[64.5%] top-[23.2%] w-[22%] text-[#2b1a12] font-serif text-[0.95vw]">
        {story.setting?.location}
      </div>

      {/* Victim Name */}
      <div className="absolute left-[13.6%] top-[34.4%] w-[28%] text-[#2b1a12] font-serif text-[0.95vw]">
        {story.victim?.name}
      </div>

      {/* Victim Role */}
      <div className="absolute left-[20.2%] top-[39.8%] w-[24%] text-[#2b1a12] font-serif text-[0.95vw]">
        {story.victim?.role}
      </div>

      {/* Found Location */}
      <div className="absolute left-[15%] top-[45%] w-[26%] text-[#2b1a12] font-serif text-[0.95vw]">
        {victimFoundLocation}
      </div>

      {/* Cause of Death */}
      <div className="absolute left-[24%] top-[50.4%] w-[24%] text-[#2b1a12] font-serif text-[0.95vw]">
        {causeOfDeath}
      </div>

      {/* Overview */}
      <div className="absolute left-[8.3%] top-[60.5%] w-[40%] text-[#2b1a12] font-serif text-[0.82vw] leading-[1.55] whitespace-pre-line">
        {overview}
      </div>

      {/* Objective */}
      <div className="absolute left-[7.3%] top-[84.5%] w-[42%] text-[#2b1a12] font-serif text-[0.8vw] leading-[1.45] whitespace-pre-line">
        {objective}
      </div>

      <button className="absolute bottom-[1%] right-[5%] z-20 text-white text-[2vw] tracking-widest transition duration-300 hover:text-red-600 font-investigation">
          BEGIN INVESTIGATION
      </button>

      {/* Suspects */}
      <div className="absolute left-[54.3%] top-[33.2%] w-[33%] h-[36%]">
        {suspects.map((suspect, index) => {
          const pos = suspectPositions[index];
          if (!pos) return null;

          return (
            <div
              key={suspect.id}
              className="absolute w-[120px] h-[140px] flex items-center justify-center text-center px-2"
              style={{
                left: `${pos.left}px`,
                top: `${pos.top}px`,
              }}
            >
              <span className="text-[#2b1a12] font-serif text-[0.8vw] leading-tight">
                {suspect.name}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  </div>
);
}