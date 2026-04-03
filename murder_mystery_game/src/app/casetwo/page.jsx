"use client";

import { Suspense, useEffect, useState } from "react";
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

function CaseTwoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldShowIntro = searchParams.get("intro") === "1";
  const [isCasefileOpen, setIsCasefileOpen] = useState(false);
  const [isAccusationConfirmOpen, setIsAccusationConfirmOpen] = useState(false);
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

  const openAccusationConfirm = () => {
    setIsAccusationConfirmOpen(true);
  };

  const closeAccusationConfirm = () => {
    setIsAccusationConfirmOpen(false);
  };

  const goToAccusation = () => {
    router.replace("/accusation?storyId=knives_out");
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

          <div className="relative flex flex-row px-6 py-6 md:px-10">
              <button
                  type="button"
                  onClick={openAccusationConfirm}
                  className={`${actionButtonClassName} absolute right-6 top-6 hover:rotate-10 cursor-pointer focus:outline-none`}
                >
                  <Image
                    src="/accuse.png"
                    alt="Accuse"
                    width="70"
                    height="70"
                  />
              </button>
              <button
                type="button"
                onClick={toggleCasefile}
                className="absolute right-30 top-6 hover:rotate-10 focus:outline-none"
              >
                <Image
                    src="/casefiletoggle.png"
                    alt="Casefile"
                    width="70"
                    height="70"
                />
              </button>
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

          {isAccusationConfirmOpen ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/65 px-4">
              <div
                className="absolute inset-0"
                onClick={closeAccusationConfirm}
              />

              <div className="relative w-full max-w-2xl rounded-[2rem] border border-red-900/40 bg-black/85 p-8 text-center text-white shadow-2xl backdrop-blur-md">
                <h2 className={`${cinzel.className} text-4xl text-[#B22222]`}>
                  Enter Accusation?
                </h2>
                <p className="mt-5 text-xl leading-8 text-zinc-400">
                  Are you sure? There&apos;s no turning back.
                </p>

                <div className="mt-5 flex items-center justify-center gap-10">
                  <button
                    type="button"
                    onClick={closeAccusationConfirm}
                    className={`${actionButtonClassName} cursor-pointer text-2xl`}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={goToAccusation}
                    className={`${actionButtonClassName} cursor-pointer text-2xl`}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
    </main>
  );
}

export default function CaseTwoPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-black" />}>
      <CaseTwoContent />
    </Suspense>
  );
}
