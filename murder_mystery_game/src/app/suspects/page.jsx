export default function Buttons() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex gap-6">
        <button className="w-32 h-32 bg-gray-300 hover:bg-gray-400 transition-colors text-black text-4xl">
          1
        </button>
        <button className="w-32 h-32 bg-gray-300 hover:bg-gray-400 transition-colors text-black text-4xl">
          2
        </button>
        <button className="w-32 h-32 bg-gray-300 hover:bg-gray-400 transition-colors text-black text-4xl">
          3
        </button>
        <button className="w-32 h-32 bg-gray-300 hover:bg-gray-400 transition-colors text-black text-4xl">
          4
        </button>
      </div>
    </div>
  );
}