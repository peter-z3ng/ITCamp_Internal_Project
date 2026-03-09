'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { STORIES } from '@/lib/stories';

export default function SuspectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const storyId = searchParams.get('storyId');
  const story = STORIES[storyId];

  const STORAGE_KEY = `chat_sessions_${storyId}`;
  const SELECTED_KEY = `selected_suspect_${storyId}`;

  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState({});

  useEffect(() => {
    if (!storyId) return;

    const savedSessions = localStorage.getItem(STORAGE_KEY);
    if (savedSessions) setSessions(JSON.parse(savedSessions));

    const savedSelected = localStorage.getItem(SELECTED_KEY);
    if (savedSelected) setSelected(savedSelected);
  }, [storyId]);

  useEffect(() => {
    if (!storyId) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions, storyId]);

  useEffect(() => {
    if (!selected || !storyId) return;
    localStorage.setItem(SELECTED_KEY, selected);
  }, [selected, storyId]);

  if (!story) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center p-8">
        Story not found.
      </div>
    );
  }

  const CHARACTERS = Object.values(story.characters);
  const messages = selected ? sessions[selected] || [] : [];

  async function askAI() {
    if (!question || !selected) return;

    const userText = question;
    setQuestion('');

    setSessions(prev => {
      const updated = { ...prev };
      const prevMsgs = updated[selected] || [];
      updated[selected] = [...prevMsgs, { role: 'user', content: userText }];
      return updated;
    });

    setLoading(true);

    const memoryMessages = [
      ...(sessions[selected] || []),
      { role: 'user', content: userText }
    ];

    try {
      const res = await fetch('/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyId,
          characterId: selected,
          question: userText,
          memory: memoryMessages
        }),
      });

      const json = await res.json();

      const aiMsg = {
        role: 'assistant',
        content: res.ok && !json.error ? json.answer : (json.error || 'AI error')
      };

      setSessions(prev => {
        const updated = { ...prev };
        const prevMsgs = updated[selected] || [];
        updated[selected] = [...prevMsgs, aiMsg];
        return updated;
      });

    } catch {
      setSessions(prev => {
        const updated = { ...prev };
        const prevMsgs = updated[selected] || [];
        updated[selected] = [...prevMsgs, { role: 'assistant', content: 'Error contacting AI' }];
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center p-8 gap-8">

      <div className="w-full max-w-5xl">
        <button
          onClick={() => router.push('/cases')}
          className="bg-black border cursor-pointer border-red-600 hover:bg-red-700 hover:border-red-500 transition-all px-6 py-2 rounded-xl font-semibold text-red-500 hover:text-white"
        >
          ← Back to Cases
        </button>
      </div>

      <h1 className="text-3xl font-bold tracking-wide text-red-500">
        Interrogate the Suspects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {CHARACTERS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`w-56 h-36 rounded-2xl border p-4 text-left transition-all cursor-pointer shadow-lg ${
              selected === s.id
                ? "bg-red-700/90 border-red-500 scale-105"
                : "bg-zinc-900 border-zinc-700 hover:border-red-600 hover:scale-[1.02]"
            }`}
          >
            <div className="text-xl font-bold">{s.name}</div>
            <div className="text-sm mt-1 text-zinc-400">{s.role}</div>
            <div className="mt-3 text-xs text-zinc-500">Click to interrogate</div>
          </button>
        ))}
      </div>

      <div className="w-full max-w-3xl h-80 bg-black/60 rounded-2xl border border-zinc-700 p-4 overflow-y-auto shadow-inner">

        {messages.length === 0 && selected && (
          <div className="text-center text-zinc-500 mt-24">
            Start questioning {CHARACTERS.find(s => s.id === selected)?.name}.
          </div>
        )}

        {!selected && (
          <div className="text-center text-zinc-500 mt-24">
            Select a suspect and start questioning them.
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`px-4 py-2 rounded-xl max-w-[80%] text-sm leading-relaxed ${
              m.role === "user" ? "bg-red-700 text-white" : "bg-zinc-800 text-zinc-200"
            }`}>
              <div className="text-xs opacity-60 mb-1">
                {m.role === "user" ? "You" : "Suspect"}
              </div>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 w-full max-w-3xl">
        <input
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={selected ? "Ask your question..." : "Select a suspect first"}
          disabled={!selected}
        />

        <button
          onClick={askAI}
          disabled={loading || !selected}
          className="bg-red-700 hover:bg-red-600 transition-colors px-6 rounded-xl font-semibold disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>

      <button
        onClick={() => router.push(`/accuse?storyId=${storyId}`)}
        className="mt-6 cursor-pointer bg-black border border-red-600 hover:bg-red-700 hover:border-red-500 transition-all px-8 py-3 rounded-2xl font-bold text-red-500 hover:text-white"
      >
        Accuse
      </button>
    </div>
  );
}