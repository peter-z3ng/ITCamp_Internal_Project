"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Caesar_Dressing, Cinzel, Patrick_Hand } from "next/font/google";
import { STORIES } from "@/lib/stories";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});


const CORKBOARD_ASSETS = {
  sterling_estate: "/corkboard.png",
  knives_out: "/corkboard.png",
  sim_it_club: "/corkboard.png",
};

const ACCUSATION_LAYOUTS = {
  sterling_estate: {
    suspects: [
        {
        id: "son",
        image: "/c_assets/son_acc.png",
        className: "left-[3.8%] top-[-8.3%] w-[43%] aspect-[3/4] focus:outline-none grayscale transition duration-100  hover:grayscale-0",
        },
        {
        id: "wife",
        image: "/c_assets/wife_acc.png",
        className: "right-[5.5%] top-[-0.5%] w-[36%] aspect-[3/4] grayscale transition duration-100  hover:grayscale-0",
        },
        {
        id: "driver",
        image: "/c_assets/driver_acc.png",
        className: "left-[3.5%] bottom-[0.1%] w-[36%] aspect-[3/4] grayscale transition duration-100  hover:grayscale-0",
        },
        {
        id: "gardener",
        image: "/c_assets/gardener_acc.png",
        className: "left-[29%] bottom-[6%] w-[26%] aspect-[3/4] grayscale transition duration-100  hover:grayscale-0",
        },
        {
        id: "maid",
        image: "/c_assets/maid_acc.png",
        className: "right-[11%] bottom-[4.8%] w-[30%] aspect-[3/4] grayscale transition duration-100  hover:grayscale-0",
        },
    ],
    victim: {
        image: "/c_assets/master_acc.png",
        className: "left-[36%] top-[27%] w-[28%] aspect-[3/4]",
    },
},
  knives_out: [
    {
      id: "son",
      image: "/c_assets/Walt_ir.png",
      className: "left-[7%] top-[10%] w-[21%] aspect-[3/4] -rotate-3",
      labelClassName: "left-[9%] top-[56%]",
    },
    {
      id: "nurse",
      image: "/c_assets/marta_ir.png",
      className: "right-[8%] top-[11%] w-[17%] aspect-[3/4] rotate-[2deg]",
      labelClassName: "right-[9%] top-[55%]",
    },
    {
      id: "grandson",
      image: "/c_assets/hugh_ir.png",
      className: "left-[38%] top-[10%] w-[20%] aspect-[3/4]",
      labelClassName: "left-[39%] top-[57%]",
    },
    {
      id: "daughter",
      image: "/c_assets/lin_ir.png",
      className: "left-[37%] bottom-[8%] w-[17%] aspect-[3/4] rotate-[1deg]",
      labelClassName: "left-[39%] bottom-[3%]",
    },
  ],
  sim_it_club: [
    {
      id: "vp",
      image: "/c_assets/michelle_ir.png",
      className: "left-[7%] top-[10%] w-[18%] aspect-[3/4] -rotate-2",
      labelClassName: "left-[8%] top-[55%]",
    },
    {
      id: "partnership",
      image: "/c_assets/winston_ir.png",
      className: "right-[8%] top-[10%] w-[18%] aspect-[3/4] rotate-[2deg]",
      labelClassName: "right-[7%] top-[55%]",
    },
    {
      id: "technical",
      image: "/c_assets/yanmei_ir.png",
      className: "left-[15%] bottom-[8%] w-[18%] aspect-[3/4] -rotate-1",
      labelClassName: "left-[17%] bottom-[3%]",
    },
    {
      id: "secretary",
      image: "/c_assets/rey_ir.png",
      className: "right-[16%] bottom-[9%] w-[15%] aspect-[3/4] rotate-[1deg]",
      labelClassName: "right-[16%] bottom-[3%]",
    },
  ],
}

export default function AccusationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const story = storyId ? STORIES[storyId] : null;
  const corkboardImage = storyId ? CORKBOARD_ASSETS[storyId] || "/corkboard.png" : "/corkboard.png";
  const murdererId = story?.truth?.murderer;

  const layout = ACCUSATION_LAYOUTS[storyId];
  const suspects = Array.isArray(layout) ? layout : layout?.suspects || [];
  const victim = Array.isArray(layout) ? null : layout?.victim;
  const [answer, setAnswer] = useState("");
  const [selectedSuspectId, setSelectedSuspectId] = useState(null);


  useEffect(() => {
    const currentUrl = window.location.href;

    // Duplicate the current accusation entry so browser-back stays on this page.
    window.history.pushState(null, "", currentUrl);

    const handlePopState = () => {
      window.history.pushState(null, "", currentUrl);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function handleAccuse(characterId) {
    setSelectedSuspectId(characterId);
  }

  function handleConfirm() {
    if (!murdererId || !storyId) return;
    const outcome = selectedSuspectId === murdererId ? "correct" : "wrong";
    router.replace(`/result?storyId=${storyId}&outcome=${outcome}`);
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,0,0,0.22),_rgba(0,0,0,0.92)_65%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <h1 className={`${cinzel.className} mt-4 text-center text-5xl tracking-[0.16em] text-[#B22222]`}>
          Accusation Board
        </h1>
        <p className="mt-5 text-center text-sm tracking-[0.28em] text-zinc-400 animate-[pulse_1.2s_ease-in-out_infinite]">
            Select the culprit and justify your verdict
        </p>

        <div className="relative -mt-8 aspect-[4/3] w-full max-w-5xl">
          <Image
            src={corkboardImage}
            alt="Accusation corkboard"
            fill
            priority
            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          />

          {suspects.map((suspect) => {
            const character = story?.characters?.[suspect.id];
            if (!character) return null;
            const isSelected = selectedSuspectId === suspect.id;

            return (
              <button
                key={suspect.id}
                type="button"
                onClick={() => handleAccuse(suspect.id)}
                className={`group absolute z-10 cursor-pointer transition-transform ${suspect.className} ${
                  isSelected ? "grayscale-0" : ""
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={suspect.image}
                    alt={character.name}
                    fill
                    className={`object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)] ${
                      isSelected ? "grayscale-0 brightness-120" : ""
                    }`}
                  />
                </div>
              </button>
            );
          })}

          {victim ? (
            <div className={`absolute z-10 ${victim.className}`}>
                <div className="relative h-full w-full">
                <Image
                    src={victim.image}
                    alt="Victim"
                    fill
                    className="object-contain"
                />
                </div>
            </div>
            ) : null}

            <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Your verdict here..."
                    className={`${patrickHand.className} absolute z-20 left-[40%] top-[24%] w-[20%] aspect-[21/9] text-zinc-600 tracking-[0.2rem] outline-none resize-none`}
                />
        </div>
      </div>
      <button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedSuspectId || !answer.trim()}
            className={`${caesarDressing.className} absolute z-10 text-4xl bottom-[4%] text-[#B22222] disabled:opacity-50 disabled:cursor-not-allowed`}
            >CONFIRM
        </button>
    </main>
  );
}
