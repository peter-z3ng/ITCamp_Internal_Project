"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Caesar_Dressing, Nosifer } from "next/font/google";

const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400",
});

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

function MenuButton({ children, href, onClick, disabled = false }) {
  const className = `${caesarDressing.className} text-left text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.3em] text-white transition duration-300 ${
    disabled
      ? "cursor-not-allowed opacity-60"
      : "cursor-pointer hover:text-[#B22222]"
  }`;

  if (disabled) {
    return (
      <button type="button" disabled className={className}>
        {children}
      </button>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Home() {
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [isCancelHovered, setIsCancelHovered] = useState(false);

  useEffect(() => {
    if (!showQuitModal) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowQuitModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [showQuitModal]);

  const handleQuit = () => {
    window.close();

    setTimeout(() => {
      if (!window.closed) {
        window.location.href = "https://www.google.com/search";
      }
    }, 150);
  };

  return (
    <main
      className="relative min-h-dvh overflow-hidden bg-black bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/landingpagebg.png')" }}
    >
      <div className="relative z-10 min-h-dvh">
        <nav className="fixed bottom-[clamp(3rem,9vh,8rem)] left-[clamp(3rem,9vw,8rem)] z-20">
          <div className="flex flex-col items-start gap-5 md:gap-7">
            <MenuButton href="/cases">Play</MenuButton>
            <MenuButton href="/suspects">Credit</MenuButton>
            <MenuButton onClick={() => setShowQuitModal(true)}>Quit</MenuButton>
          </div>
        </nav>

        <section className="fixed right-[clamp(4rem,10vw,9rem)] top-[clamp(7rem,24vh,18rem)] z-20 w-fit text-center">
          <h1
            className={`${nosifer.className} landing-title landing-title-pulse text-[clamp(2rem,6vw,4.5rem)] leading-[1.5] tracking-[clamp(0.12em,0.3em,0.3em)] text-[#B22222] drop-shadow-[0_0_18px_rgba(0,0,0,0.85)]`}
            style={{
              textShadow: `
                0 0 4px rgba(178, 34, 34, 0.22),
                0 0 10px rgba(178, 34, 34, 0.16),
                0 0 18px rgba(139, 0, 0, 0.12),
                0 4px 12px rgba(0, 0, 0, 0.8)
              `,
            }}
          >
            Crimson
            <br />
            Midnight
          </h1>
        </section>
      </div>

      {showQuitModal ? (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/65 px-6 py-8">
          <div
            className="relative h-[min(86vh,980px)] w-[min(94vw,1500px)] overflow-hidden rounded-[2rem] border border-black/40 bg-black bg-cover bg-center shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
            style={{ backgroundImage: "url('/quitbg.png')" }}
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(88vw,1200px)] -translate-x-1/2 -translate-y-1/2 text-center">
              <p
                className={`${nosifer.className} whitespace-nowrap text-[clamp(2.5rem,6vw,6rem)] uppercase leading-none tracking-[0.06em] text-[#B22222] transition-opacity duration-200 ${
                  isCancelHovered ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  textShadow: "0 6px 20px rgba(0, 0, 0, 0.8)",
                }}
              >
                You're Next
              </p>
              <p
                className={`${caesarDressing.className} absolute inset-0 flex items-center justify-center whitespace-nowrap text-[clamp(2.2rem,5.5vw,5.2rem)] uppercase tracking-[0.14em] text-white transition-opacity duration-200 ${
                  isCancelHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  textShadow: "0 6px 20px rgba(0, 0, 0, 0.8)",
                }}
              >
                For now... you're safe
              </p>
            </div>

            <div className="absolute bottom-[clamp(2rem,5vh,4rem)] right-[clamp(2rem,4vw,4rem)] z-10 flex flex-col items-end gap-4">
              <button
                type="button"
                onClick={() => setShowQuitModal(false)}
                onMouseEnter={() => setIsCancelHovered(true)}
                onMouseLeave={() => setIsCancelHovered(false)}
                className={`${caesarDressing.className} bg-transparent text-[clamp(2rem,3.4vw,3.4rem)] uppercase tracking-[0.16em] text-white transition hover:text-[#B22222]`}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleQuit}
                className={`${caesarDressing.className} bg-transparent text-[clamp(2rem,3.6vw,3.8rem)] uppercase tracking-[0.14em] text-white transition hover:text-[#B22222]`}
              >
                Quit Anyway
              </button>
            </div>

            <div className="absolute inset-0 z-0">
              <div className="h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.12)_100%)]" />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
