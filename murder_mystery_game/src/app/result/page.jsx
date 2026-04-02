"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Caesar_Dressing, Cinzel } from "next/font/google";
import { STORIES } from "@/lib/stories";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

const STORY_ROUTES = {
  sterling_estate: "/caseone",
  knives_out: "/casetwo",
  sim_it_club: "/casethree",
};

const RESULT_CONTENT = {
  sterling_estate: {
    correct: {
      title: "The Murderer Revealed",
      message: "You saw through the lies in the estate and named the real killer.",
      image: "/caseonecorrect.png"
    },
    wrong: {
      title: "The Real Culprit Escaped",
      message: "You accused an innocent person. Your mistake ruined their life.",
      image:"/justicefailed.png"
    },
  },
  knives_out: {
    correct: {
      title: "The Murderer Revealed",
      message: "You unraveled the twisted family plot and uncovered the true mastermind behind the death.",
      image: "/casetwocorrect.png"
    },
    wrong: {
      title: "The Real Culprit Escaped",
      message: "You accused an innocent person. Your mistake ruined their life.",
      image:"/justicefailed.png"
    },
  },
  sim_it_club: {
    correct: {
      title: "Fuku Did Not Die in Vain",
      message: "You revealed who poisoned Fuku and uncovered the truth hidden in the club room.",
      image:"/casethreecorrect.png"
    },
    wrong: {
      title: "The Real Culprit Escaped",
      message: "Your accusation ruined an innocent life. The real murderer is still among the EXCO",
      image:"/justicefailed.png"
    },
  },
};

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const outcome = searchParams.get("outcome");

  const story = storyId ? STORIES[storyId] : null;
  const resultConfig =
    storyId && outcome ? RESULT_CONTENT[storyId]?.[outcome] || null : null;
  const isCorrect = outcome === "correct";

  useEffect(() => {
    const currentUrl = window.location.href;
    window.history.pushState(null, "", currentUrl);

    const handlePopState = () => {
      window.history.pushState(null, "", currentUrl);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (!story || !resultConfig) {
    return (
      <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,0,0,0.22),_rgba(0,0,0,0.95)_70%)]" />
        <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-red-900/40 bg-black/85 p-10 text-center shadow-2xl backdrop-blur-md">
          <h1 className={`${cinzel.className} text-5xl text-red-300`}>
            Result Unavailable
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            The result screen could not be loaded for this case.
          </p>
          <Link
            href="/menu"
            className={`${caesarDressing.className} mt-10 inline-block text-2xl uppercase tracking-[0.14em] text-white transition hover:text-[#B22222]`}
          >
            Back To Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-dvh aspect-[16/9] bg-black overflow-hidden">
      {resultConfig.image ? (
          <div>
            <Image
              src={resultConfig.image}
              alt={resultConfig.title}
              fill
              className="object-cover"
            />
            

            <div className={`absolute left-[10%] bottom-[20%] rounded-[2rem] text-center backdrop-blur-xs border border-white/30 p-10 ${
              isCorrect ? "shadow-[0_0_8px_rgba(110,231,183,0.35),0_0_24px_rgba(110,231,183,0.25),0_0_48px_rgba(110,231,183,0.18)]"
              : "shadow-[0_0_8px_rgba(178,34,34,0.35),0_0_24px_rgba(178,34,34,0.25),0_0_48px_rgba(178,34,34,0.18)]" }`}>
              <p className="text-md tracking-[0.3em] text-zinc-300">
                {isCorrect ? "Well Done, Detective!" : "Wrongful Conviction!"}
              </p>
              <h1
                className={`${cinzel.className} mt-4 text-5xl ${
                  isCorrect ? "text-emerald-300" : "text-[#B22222]"
                }`}
              >
                {resultConfig.title}
              </h1>
              <p className="mt-6 text-md tracking-[0.1em] text-zinc-300">
                {resultConfig.message}
              </p>

              <div className="mt-10 flex items-center justify-center gap-12">
                {!isCorrect ? (
                  <button
                    type="button"
                    onClick={() => router.replace(STORY_ROUTES[storyId] || "/menu")}
                    className={`${caesarDressing.className} text-3xl uppercase tracking-[0.14em] text-white transition hover:text-[#B22222]`}
                  >
                    Try Again
                  </button>
                ) : null}
                <Link
                  href="/"
                  className={`${caesarDressing.className} text-3xl uppercase tracking-[0.14em] text-white transition ${
                    isCorrect ? "hover:text-emerald-300" : "hover:text-[#B22222]"
                  }`}
                >
                  Back To Main Menu
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      
    </main>
  );
}
