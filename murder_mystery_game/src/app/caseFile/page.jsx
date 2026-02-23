"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import stories from '../../data/stories.json';

export default function Story() {
  const [levelData, setLevelData] = useState(null);
  const [levelId, setLevelId] = useState(null);

  // The actual JSON data (you can also move this to a separate file)
  const storiesData = stories

  useEffect(() => {
    // 1. Grab the ID from localStorage
    const savedId = localStorage.getItem('currentLevel');
    
    if (savedId && storiesData[savedId]) {
      setLevelId(savedId);
      setLevelData(storiesData[savedId]);
    }
  }, []);

  // Show a loading state or error if the data hasn't loaded yet
  if (!levelData) {
    return <div className="min-h-screen bg-white flex items-center justify-center text-black">Loading Story...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-white p-8 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-yellow-300 text-black p-12 max-w-3xl shadow-2xl border-2 border-black">
          
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest border-b-2 border-black pb-2">
            Case #{levelId}: The Mystery
          </h2>
          
          {/* Main Description */}
          <p className="text-xl leading-relaxed mb-8 font-serif">
            {levelData.desc}
          </p>

          <h3 className="text-2xl font-bold mb-4 underline">The Suspects:</h3>
          
          {/* Character List */}
          <ul className="space-y-4">
            {Object.entries(levelData.char).map(([name, description]) => (
              <li key={name} className="bg-white/50 p-3 rounded border border-black/10">
                <strong className="text-red-700">{name}:</strong> {description}
              </li>
            ))}
          </ul>
          
          <div className="mt-10 flex justify-between items-center">8            
            <Link href={'../suspects'}>
              <button
                className="px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
              >
                Start Investigation
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}