export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
      {/* Background Doodle */}
      <svg className="absolute -top-20 -left-10 w-40 h-40 text-pink-200/50 -z-10" viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M40,100 Q60,40 100,100 T160,100" fill="none" stroke="currentColor" strokeWidth="4"
          strokeLinecap="round" />
        <path d="M50,120 Q70,60 110,120 T170,120" fill="none" stroke="currentColor" strokeWidth="4"
          strokeLinecap="round" />
      </svg>

      <div className="order-2 lg:order-1">
        <h1 className="text-5xl md:text-8xl font-bold handwritten leading-tight mb-4">
          Hey, I'm <span className="highlight">Harsh</span> 👋
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-800">Full-Stack & AI Engineer building scalable web
          apps and smart AI workflows</h2>
        <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
          I work with MERN, Next.js, and AI tools like Gemini & LangChain to build fast, scalable, and intelligent
          products.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
          <span className="px-3 py-1 md:px-4 md:py-2 sketch-border-sm bg-white floating text-xs md:text-sm font-semibold">🚀
            MERN Stack</span>
          <span className="px-3 py-1 md:px-4 md:py-2 sketch-border-sm bg-white floating text-xs md:text-sm font-semibold"
            style={{ animationDelay: '0.5s' }}>⚡ Next.js</span>
          <span className="px-3 py-1 md:px-4 md:py-2 sketch-border-sm bg-white floating text-xs md:text-sm font-semibold"
            style={{ animationDelay: '1.2s' }}>🤖 AI Automation</span>
          <span className="px-3 py-1 md:px-4 md:py-2 sketch-border-sm bg-white floating text-xs md:text-sm font-semibold"
            style={{ animationDelay: '0.8s' }}>🦜 LangChain</span>
          <span className="px-3 py-1 md:px-4 md:py-2 sketch-border-sm bg-white floating text-xs md:text-sm font-semibold"
            style={{ animationDelay: '1.5s' }}>⚙️ n8n Workflows</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="btn-sketch sketch-border bg-pink-300 text-lg hover:bg-pink-400 text-center">View My
            Work 🚀</a>
          <a href="#contact" className="btn-sketch sketch-border bg-white text-lg hover:bg-zinc-50 text-center">Let's Build
            Together 💬</a>
        </div>

        <div className="mt-12 text-zinc-400 handwritten text-xl italic flex items-center gap-2">
          <span>Keep scrolling for the tech bits</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 sketch-border bg-zinc-100 rotate-3"></div>
          <div
            className="absolute inset-0 sketch-border overflow-hidden bg-white -rotate-2 flex items-center justify-center">
            <div className="text-[100px] md:text-[180px] select-none">⚡💻</div>
          </div>
          {/* Hand-drawn doodles */}
          <div className="absolute -top-6 -right-6 text-4xl floating">🔥</div>
          <div className="absolute -bottom-4 -left-8 text-4xl floating" style={{ animationDelay: '1s' }}>🧠</div>
          <div
            className="absolute top-1/2 -left-12 rotate-[-20deg] handwritten text-lg bg-yellow-100 px-2 py-1 sketch-border-sm">
            "Always building"</div>
        </div>
      </div>
    </section>
  )
}

