"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Caesar_Dressing, Nosifer, Cinzel} from "next/font/google";

const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "500",
});

export default function CaseTwo() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldShowIntro = searchParams.get("intro") === "1";
  const [isCasefileOpen, setIsCasefileOpen] = useState(false);
  const [showIntroPanel, setShowIntroPanel] = useState(shouldShowIntro);

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
    if (!shouldShowIntro) return;

    const timer = window.setTimeout(() => {
      setShowIntroPanel(false);
      router.replace("/casetwo");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [shouldShowIntro, router]);

  const toggleCasefile = () => {
    setIsCasefileOpen((open) => !open);
  };

  const actionButtonClassName = `${caesarDressing.className} text-4xl tracking-[0.14em] text-white transition hover:text-[#B22222]`;

  return (
    <main className="min-h-dvh w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] min-w-[900px] aspect-[16/9] overflow-hidden">
          <Image
            src="/casetwo.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />

          {/* Walt */}
          <Link
            href="/interrogation?storyId=knives_out&characterId=son"
            className="absolute z-10 top-[19.5%] left-[7.8%] w-[clamp(10%,35%,35%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/walt.png"
              alt="Walt"
              fill
              className="object-contain transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-120 cursor-pointer"
            />
          </Link>

          

          {/* Marta */}
          <Link
            href="/interrogation?storyId=knives_out&characterId=nurse"
            className="group absolute z-10 top-[36%] right-[41.6%] w-[clamp(15%,19%,19%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/marta.png"
              alt="Marta"
              fill
              className="object-contain transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-120 cursor-pointer"
            />
          </Link>

          {/* Hugh */}
          <Link
            href="/interrogation?storyId=knives_out&characterId=grandson"
            className="group absolute z-10 top-[16%] right-[18.3%] w-[clamp(12%,27%,27%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/hugh.png"
              alt="Hugh"
              fill
              className="object-contain transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-120 cursor-pointer"
            />
          </Link>

          {/* Lin */}
          <Link
            href="/interrogation?storyId=knives_out&characterId=daughter"
            className="group absolute z-10 top-[42%] right-[1.2%] w-[clamp(10%,28%,28%)] aspect-[3/4]"
          >
            <Image
              src="/c_assets/lin.png"
              alt="Lin"
              fill
              className="object-contain transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-120 cursor-pointer"
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
                    width="80"
                    height="100"
                />
              </button>
            </div>
          </div>

          <div className={`absolute z-20 w-[75%] h-[20%] left-1/2 top-2/5 -translate-x-1/2 transition-all duration-400 ${
                showIntroPanel
                  ? "translate-y-0 opacity-100 brightness-250"
                  : "pointer-events-none translate-y-4 opacity-0"
              }`}
            >
              <h1 className={`${cinzel.className} text-center text-6xl text-[#5A0F0F] py-12 tracking-widest rounded-[2.5rem] border border-white/10 bg-black/80 backdrop-blur-1xl`}>
                The Blood on the Estate
              </h1>
            </div>

        {/* Case File */}
          {isCasefileOpen ? (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 px-4 py-6">
              <div
                className="absolute inset-0"
                onClick={() => setIsCasefileOpen(false)}
              />

              <div className="relative z-10 flex w-full flex-col items-center">
                  <div className="relative aspect-4/3 w-[60%]">
                    <Image
                      src="/casefiletwo.png"
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
