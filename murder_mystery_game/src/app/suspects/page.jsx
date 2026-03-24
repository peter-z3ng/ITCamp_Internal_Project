'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { STORIES } from '@/lib/stories'

export default function SuspectsPage() {

  // get the story ID from query parameter
  const searchParams = useSearchParams()
  const router = useRouter()
  const storyId = searchParams.get('storyId')

  // get the story user selected
  const story = STORIES[storyId]

  const [selected, setSelected] = useState(null)
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessions, setSessions] = useState({})

  // when page loads, get the previous messages and selected character from local storage
  useEffect(() => {
    if (!storyId) return

    const savedSessions = localStorage.getItem(`chat_sessions_${storyId}`)
    const savedSelected = localStorage.getItem(`selected_suspect_${storyId}`)

    if (savedSessions) setSessions(JSON.parse(savedSessions))
    if (savedSelected) setSelected(savedSelected)
  }, [storyId])

  if (!storyId || !story) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        Story not found.
      </div>
    )
  }

  // get all the characters from the selected story
  const CHARACTERS = Object.values(story.characters)

  // get the previous messages locally
  const messages = sessions[selected] || []

  async function askAI() {
    if (!question || !selected) return

    const userText = question
    setQuestion('')
    setLoading(true)

    // save the user message in react state and local storage
    let updatedSessions = { ...sessions }
    const prevMsgs = updatedSessions[selected] || []
    updatedSessions[selected] = [...prevMsgs, { role: 'user', content: userText }]

    setSessions(updatedSessions)
    localStorage.setItem(`chat_sessions_${storyId}`, JSON.stringify(updatedSessions))

    // call '/api/game' route and pass in story ID, character ID, user text and previous messages
    try {
      const res = await fetch('/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyId,
          characterId: selected,
          question: userText,
          memory: updatedSessions[selected],
        }),
      })

      // get AI response through API and save in react state and local storage
      const json = await res.json()

      const aiMsg = {
        role: 'assistant',
        content: res.ok && !json.error ? json.answer : 'AI error',
      }

      updatedSessions = { ...updatedSessions }
      updatedSessions[selected] = [...updatedSessions[selected], aiMsg]

      setSessions(updatedSessions)
      localStorage.setItem(`chat_sessions_${storyId}`, JSON.stringify(updatedSessions))

    } catch {
      const errorMsg = { role: 'assistant', content: 'Error contacting AI' }

      updatedSessions = { ...updatedSessions }
      updatedSessions[selected] = [...updatedSessions[selected], errorMsg]

      setSessions(updatedSessions)
      localStorage.setItem(`chat_sessions_${storyId}`, JSON.stringify(updatedSessions))
    } finally {
      setLoading(false)
    }
  }

  // when a character is clicked, it will be saved in both react state and local storage
  function handleSelect(id) {
    setSelected(id)
    localStorage.setItem(`selected_suspect_${storyId}`, id)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 gap-8">

      <button
        onClick={() => router.push('/cases')}
        className="border border-red-600 px-6 py-2 rounded-xl text-red-500 cursor-pointer"
      >
        ← Back
      </button>

      <h1 className="text-2xl text-red-500">Interrogate</h1>

      <div className="flex gap-4">
        {CHARACTERS.map(s => (
          <button
            key={s.id}
            onClick={() => handleSelect(s.id)}
            className={`p-4 border rounded-xl cursor-pointer ${
              selected === s.id ? 'bg-red-700' : 'bg-zinc-900'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl h-80 overflow-y-auto border p-4">
        {!selected && <p>Select a suspect</p>}

        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
            <p><b>{m.role}:</b> {m.content}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-2xl gap-2">
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          disabled={!selected}
          className="flex-1 border p-2"
        />

        <button
          onClick={askAI}
          disabled={loading || !selected}
          className="bg-red-700 px-4 cursor-pointer"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>

      <button
        onClick={() => router.push(`/accuse?storyId=${storyId}`)}
        className="border border-red-600 px-6 py-3 rounded-xl cursor-pointer"
      >
        Accuse
      </button>
    </div>
  )
}