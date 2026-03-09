import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="text-center space-y-10">

        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-red-600">
          Murder Mystery Game
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Interrogate suspects. Uncover contradictions.
          Decide who is lying — and who is capable of murder.
        </p>

        <Link href="/cases">
          <button className="px-10 py-4 cursor-pointer rounded-2xl bg-red-800 hover:bg-red-700 transition font-semibold text-lg shadow-xl shadow-red-900/40">
            Begin Investigation
          </button>
        </Link>

      </div>
    </div>
  );
}