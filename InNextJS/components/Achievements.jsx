export default function Achievements() {
  return (
    <section className="max-w-6xl mx-auto mb-20 md:mb-32">
      <h2 className="text-4xl font-bold handwritten mb-8 text-center text-zinc-400 uppercase tracking-widest">//
        Achievements</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="sticky-note p-8 sketch-border rotate-[-1deg] md:w-1/3 text-center bg-yellow-200">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-2xl font-bold handwritten mb-2">VOID HACKS 6.0</h3>
          <p className="font-bold text-zinc-800 underline decoration-2 decoration-black">Winner (1st Rank, ₹20,000)</p>
        </div>
        <div className="sticky-note p-8 sketch-border rotate-[2deg] md:w-1/3 text-center bg-pink-200">
          <div className="text-4xl mb-2">🏅</div>
          <h3 className="text-2xl font-bold handwritten mb-2">Smart India Hackathon 2025</h3>
          <p className="font-bold text-zinc-800 underline decoration-2 decoration-black">Finalist</p>
        </div>
      </div>
    </section>
  )
}

