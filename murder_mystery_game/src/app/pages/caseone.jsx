"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caesar_Dressing } from "next/font/google";

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

export default function CaseOneView() {
  const [isCasefileOpen, setIsCasefileOpen] = useState(false);
  const [showIntroPanel, setShowIntroPanel] = useState(true);

  useEffect(() => {
    if (!isCasefileOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCasefileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isCasefileOpen]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntroPanel(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  const toggleCasefile = () => {
    setIsCasefileOpen((open) => !open);
  };

  const actionButtonClassName = `${caesarDressing.className} rounded-full bg-[#B22222] px-8 py-3 text-l uppercase tracking-[0.14em] text-white transition hover:bg-[#C30F16]`;

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <Image
        src="/case1bg.png"
        alt="Case 1 background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <div className="relative flex items-start justify-center px-6 py-6 md:px-10">
            <Link
                href="/menu"
                className={`${actionButtonClassName} absolute left-6 top-6 md:left-10 md:top-6`}
                >
                BACK
            </Link>

          <button
            type="button"
            onClick={toggleCasefile}
            className="absolute right-6 top-6 md:right-6 md:top-6 hover:rotate-10"
          >
            <Image
                src="/casefiletoggle.png"
                alt="Casefile"
                width="100"
                height="50"
            />
          </button>
        </div>

        <div className="flex flex-1 items-end px-6 pb-10 md:px-10">
          <div
            className={`max-w-xl rounded-[2rem] border border-white/20 bg-black/30 p-6 backdrop-blur-[3px] transition-all duration-700 md:p-8 ${
              showIntroPanel
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-8 opacity-0"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Case 1
            </p>
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
              Investigation Room
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/85 md:text-base">
              Review the scene, open the casefile when you need it, and move
              between clues from the menu book.
            </p>
          </div>
        </div>
      </div>

      {isCasefileOpen ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 px-4 py-6">
          <div
            className="absolute inset-0"
            onClick={() => setIsCasefileOpen(false)}
          />

          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/casefile1.png"
                  alt="Case 1 file"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCasefileOpen(false)}
              className={`${actionButtonClassName} relative mt-5`}
            >
              CLOSE
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
