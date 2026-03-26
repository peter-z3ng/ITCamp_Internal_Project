"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caesar_Dressing } from "next/font/google";

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

export default function CaseOne() {
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

  const actionButtonClassName = `${caesarDressing.className} text-4xl tracking-[0.14em] text-white transition hover:text-[#B22222]`;

  return (
    <main className="relative w-full min-w-5xl aspect-video">
      <Image
        src="/caseonebg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <Link
        href="/interrogation"
        className="group absolute z-10 top-[55%] right-[37%] w-[clamp(80px,14%,200px)] aspect-[3/4]"
      >
        <Image
          src="/c_assets/son_idle.png"
          alt="Son idle"
          fill
          className="object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src="/c_assets/son_hover.png"
          alt="Son hover"
          fill
          className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </Link>

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative flex min-h-dvh flex-col">
        <div className="relative flex items-start justify-center px-6 py-6 md:px-10">

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

          
          

          

          {/* Wife */}
          <Link
            href="/interrogation"
            className="group relative w-fit"
          >
            <Image
              src="/c_assets/wife_idle.png"
              alt="Wife idle"
              width={200}
              height={200}
              className="absolute left-[10%] bottom-[10%] transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/c_assets/wife_hover.png"
              alt="Wife hover"
              width={200}
              height={200}
              className="fixed left-43 bottom-25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
           
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

          <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-4/3 w-6xl">
                <Image
                  src="/casefileone.png"
                  alt="Casefile One"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCasefileOpen(false)}
              className={`${actionButtonClassName} relative -mt-4`}
            >
              CLOSE
            </button>
            <Link
                href="/menu"
                className={`${actionButtonClassName} mt-12`}
                >
                Give up
            </Link>
          </div>
        </div>
      ) : null}
    </main>
  );
}
