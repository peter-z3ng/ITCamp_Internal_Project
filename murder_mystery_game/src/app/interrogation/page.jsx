"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

const CHARACTER_ASSETS = {
  sterling_estate: {
    wife: "/c_assets/wife_ir.png",
    son: "/c_assets/son_ir.png",
    maid: "/c_assets/maid_ir.png",
    driver: "/c_assets/driver_ir.png",
    gardener: "/c_assets/gardener_ir.png",
  },
  knives_out: {
    nurse: "/c_assets/marta_ir.png",
    grandson: "/c_assets/hugh_ir.png",
    daughter: "/c_assets/lin_ir.png",
    son: "/c_assets/walt_ir.png",
  },
  sim_it_club: {
    vp: "/c_assets/michelle_ir.png",
    partnership: "/c_assets/winston_ir.png",
    technical: "/c_assets/yanmei_ir.png",
    secretary: "/c_assets/rey_ir.png",
  }
};

const CHARACTER_POSITIONS = {
  sterling_estate: {
    son: "left-[38%] top-[26%] w-[clamp(10%,25%,25%)] aspect-[3/4]",
    wife: "left-[38%] top-[37%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    maid: "left-[41%] top-[39.1%] w-[clamp(10%,18%,18%)] aspect-[3/4]",
    driver: "left-[29%] top-[34.3%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    gardener: "left-[36%] top-[29%] w-[clamp(10%,25%,25%)] aspect-[3/4]",
  },
  knives_out: {
    nurse: "left-[40%] top-[34.4%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    grandson: "left-[39%] top-[38%] w-[clamp(10%,22%,22%)] aspect-[3/4]",
    daughter: "left-[40%] top-[34.5%] w-[clamp(10%,20%,20%)] aspect-[3/4]",
    son: "left-[37.5%] top-[26%] w-[clamp(10%,25%,25%)] aspect-[3/4]",
  },
  sim_it_club: {
    vp: "left-[38%] top-[32.5%] w-[clamp(10%,24%,24%)] aspect-[3/4]",
    partnership: "left-[39%] top-[27%] w-[clamp(10%,24%,24%)] aspect-[3/4]",
    technical: "left-[40%] top-[32%] w-[clamp(10%,24%,24%)] aspect-[3/4]",
    secretary: "left-[38%] top-[33%] w-[clamp(10%,24%,24%)] aspect-[3/4]",
  }
};


const STORY_ROUTES = {
  sterling_estate: "/caseone",
  knives_out: "/casetwo",
  sim_it_club: "/casethree"
};

function InterrogationContent() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const characterId = searchParams.get("characterId");
  const storageKey =
    storyId && characterId ? `interrogation_chat_${storyId}_${characterId}` : null;
  const notesStorageKey = storyId ? `interrogation_notes_${storyId}` : null;

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [notes, setNotes] = useState("");
  const chatHydratedRef = useRef(false);
  const notesHydratedRef = useRef(false);

  const characterPosition =
  CHARACTER_POSITIONS[storyId]?.[characterId] ||
  "left-1/2 top-[56%] w-[28rem] -translate-x-1/2 -translate-y-1/2";

  const story = storyId ? STORIES[storyId] : null;
  const character = story && characterId ? story.characters?.[characterId] : null;
  const characterImage =
    storyId && characterId ? CHARACTER_ASSETS[storyId]?.[characterId] : null;
  const backHref = storyId ? STORY_ROUTES[storyId] || "/menu" : "/menu";

  useEffect(() => {
    if (!storageKey) return;

    const savedMessages = localStorage.getItem(storageKey);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([]);
    }
    chatHydratedRef.current = true;
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey || !chatHydratedRef.current) return;
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, storageKey]);

  useEffect(() => {
    if (!notesStorageKey) return;

    const savedNotes = localStorage.getItem(notesStorageKey);
    setNotes(savedNotes || "");
    notesHydratedRef.current = true;
  }, [notesStorageKey]);

  useEffect(() => {
    if (!notesStorageKey || !notesHydratedRef.current) return;
    localStorage.setItem(notesStorageKey, notes);
  }, [notes, notesStorageKey]);

  async function askAI() {
    if (!question.trim() || !storyId || !characterId) return;

    const userText = question.trim();
    const nextMessages = [...messages, { role: "user", content: userText }];
    setQuestion("");
    setMessages(nextMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storyId,
          characterId,
          question: userText,
          memory: nextMessages,
        }),
      });

      const json = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.ok && !json.error ? json.answer : json.error || "AI error",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error contacting AI." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!story || !character) {
    return (
      <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
        <Image
          src="/interrogation.png"
          alt="Interrogation room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-xl rounded-[2rem] border border-red-900/40 bg-black/70 p-8 text-center shadow-2xl">
          <h1 className={`${cinzel.className} text-4xl text-red-400`}>
            Character not found
          </h1>
          <Link
            href={backHref}
            className={`${caesarDressing.className} mt-8 inline-block text-2xl tracking-[0.14em] text-white transition hover:text-[#B22222]`}
          >
            Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] min-w-[900px] aspect-[16/9] overflow-hidden">
        <Image
          src="/interrogation.png"
          alt="Interrogation room"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute left-[16%] top-[10%] z-10 w-[clamp(10%,20%,20%)] aspect-[3/4]">
          <Image
            src="/scroll.png"
            alt="Notes"
            fill
            className="object-contain brightness-70 contrast-150 drop-shadow-[0_24px_35px_rgba(0,0,0,0.45)]"
          />

          <div className="absolute inset-[22%_18%_16%_20%]">
            <div className="flex h-full flex-col">
              <p className={`${cinzel.className} text-center text-xl text-[#000000]/80`}>
                Notes
              </p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Quick clues..."
                className="h-full w-full resize-none px-1 text-[12px] leading-5 text-[#000000]/80 placeholder:text-[#000000]/60 focus:outline-none"
              />
              <Link
              href={backHref}
              className={`${caesarDressing.className} flex translate-x-1 items-center justify-center text-2xl tracking-[0.14em] text-black/60 transition hover:text-black`}
            >
              Back
            </Link>
            </div>
          </div>
          
        </div>

        <div className={`absolute z-10  ${characterPosition}`}>
          {characterImage ? (
            <Image
              src={characterImage}
              alt={character.name}
              fill
              className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
            />
          ) : (
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-black/30 text-center text-sm text-zinc-300">
              Character render not available.
            </div>
          )}
        </div>

        <div className="absolute right-[4%] top-[4%] z-20 w-[clamp(10%,32%,32%)] aspect-3/4 flex flex-col  p-5">
          <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-2">
              {(messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.role === "user"
                        ? "bg-black/50 border border-white/10 backdrop-blur-xs text-zinc-100"
                        : "bg-[#B22222]/50 border border-white/10 text-zinc-100"
                    }`}
                  >
                    <div className="mb-1 text-[11px] uppercase tracking-[0.2em] opacity-60">
                      {message.role === "user" ? "You" : character.name}
                    </div>
                    <p>{message.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  askAI();
                }
              }}
              placeholder={`Interrogate ${character.name}...`}
              disabled={loading}
              className="flex-1 rounded-xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-700"
            />
            <button
              type="button"
              onClick={askAI}
              disabled={loading || !question.trim()}
              className="rounded-xl bg-red-800 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "..." : "Ask"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function InterrogationPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-black" />}>
      <InterrogationContent />
    </Suspense>
  );
}
