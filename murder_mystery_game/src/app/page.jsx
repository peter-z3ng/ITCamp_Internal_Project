import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl text-black">Murder Mystery Game</h1>
          <Link href="/levels">
            <button 
              className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Start
            </button>
          </Link>
      </div>
    </div>
  );
}
