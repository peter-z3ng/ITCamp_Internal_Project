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
    <main className="min-h-dvh w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] min-w-[900px] aspect-[16/9] overflow-hidden">
          <Image
            src="/caseonebg.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />

          {/* Son */}
          <Link
            href="/interrogation"
            className="group absolute z-10 top-[50%] right-[37%] w-[clamp(10%,14%,14%)] aspect-[3/4]"
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

          {/* Wife */}
          <Link
            href="/interrogation"
            className="group absolute z-10 top-[55%] left-[18%] w-[clamp(10%,14%,14%)] aspect-[3/4] -rotate-3"
          >
            <Image
              src="/c_assets/wife_idle.png"
              alt="Wife idle"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/c_assets/wife_hover.png"
              alt="Wife hover"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          {/* Driver */}
          <Link
            href="/interrogation"
            className="group absolute z-10 top-[41%] right-[0.2%] w-[clamp(15%,30%,30%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/driver_idle.png"
              alt="Driver idle"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/c_assets/driver_hover.png"
              alt="Driver hover"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 -rotate-3"
            />
          </Link>

          {/* Maid */}
          <Link
            href="/interrogation"
            className="group absolute z-10 top-[38%] left-[25%] w-[clamp(12%,18%,18%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/maid_idle.png"
              alt="Maid idle"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/c_assets/maid_hover.png"
              alt="Maid hover"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          

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
                  <div className="relative aspect-4/3 w-4xl">
                    <Image
                      src="/casefileone.png"
                      alt="Casefile One"
                      fill
                      className="object-contain"
                    />
                  </div>

                <button
                  type="button"
                  onClick={() => setIsCasefileOpen(false)}
                  className={`${actionButtonClassName} relative -mt-5`}
                >
                  CLOSE
                </button>
                <Link
                    href="/menu"
                    className={`${actionButtonClassName} text-xl translate-y-10`}
                    >
                    Give up
                </Link>
              </div>
            </div>
          ) : null}
        </div>
    </main>
  );
}
