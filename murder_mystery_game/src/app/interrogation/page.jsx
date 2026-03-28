"use client";

import { useEffect, useState } from "react";
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
    nurse: "/c_assets/marta.png",
    grandson: "/c_assets/hugh.png",
    daughter: "/c_assets/lin.png",
    son: "/c_assets/walt.png",
  },
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
    nurse: "left-1/2 top-[56%] w-[28rem] -translate-x-1/2 -translate-y-1/2",
  },
};


const STORY_ROUTES = {
  sterling_estate: "/caseone",
  knives_out: "/casetwo",
};

export default function InterrogationPage() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId");
  const characterId = searchParams.get("characterId");
  const storageKey =
    storyId && characterId ? `interrogation_chat_${storyId}_${characterId}` : null;

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

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
      return;
    }

    setMessages([]);
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, storageKey]);

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

        <Link
          href={backHref}
          className={`${caesarDressing.className} absolute left-6 top-6 z-20 text-3xl tracking-[0.14em] text-white transition hover:text-[#B22222] md:left-10 md:top-8`}
        >
          Back
        </Link>

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

        <div className="absolute right-[4%] top-[10%] z-20 flex h-[78%] w-[30%] min-w-[22rem] flex-col rounded-[2rem] border border-white/10 bg-black/55 p-5 text-white backdrop-blur-md">
          <div className="border-b border-white/10 pb-4">
            <h1 className={`${cinzel.className} text-3xl text-red-200`}>
              {character.name}
            </h1>
            <p className="mt-2 text-sm text-zinc-300">
              Ask questions and they will only answer from their own knowledge in this case.
            </p>
          </div>

          <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-2">
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-sm leading-7 text-zinc-400">
                Start the interrogation. Ask about the timeline, alibi, or what they saw.
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.role === "user"
                        ? "bg-red-800 text-white"
                        : "bg-zinc-900/90 text-zinc-100"
                    }`}
                  >
                    <div className="mb-1 text-[11px] uppercase tracking-[0.18em] opacity-60">
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
              placeholder={`Question ${character.name}...`}
              disabled={loading}
              className="flex-1 rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <button
              type="button"
              onClick={askAI}
              disabled={loading || !question.trim()}
              className="rounded-xl bg-red-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
