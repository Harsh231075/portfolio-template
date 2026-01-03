export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto mb-20 md:mb-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-5xl font-bold handwritten mb-4">The Toolkit</h2>
        <p className="text-zinc-500 italic">Specialized in full-stack performance and AI intelligence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Frontend */}
        <div className="p-6 sketch-border bg-white flex flex-col">
          <h3 className="text-xl font-bold handwritten mb-4 underline decoration-yellow-400">Frontend Magic</h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">React.js</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Next.js</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Tailwind</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Redux</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Zustand</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">SEO</span>
          </div>
        </div>
        {/* Backend */}
        <div className="p-6 sketch-border bg-white flex flex-col">
          <h3 className="text-xl font-bold handwritten mb-4 underline decoration-pink-400">Backend Arsenal</h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Node.js</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Express</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">MongoDB</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">PostgreSQL</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Prisma</span>
          </div>
        </div>
        {/* AI */}
        <div className="p-6 sketch-border bg-white flex flex-col">
          <h3 className="text-xl font-bold handwritten mb-4 underline decoration-green-400">AI & Automation</h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Gemini API</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">LangChain</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">n8n</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Prompts</span>
          </div>
        </div>
        {/* Tools */}
        <div className="p-6 sketch-border bg-white flex flex-col">
          <h3 className="text-xl font-bold handwritten mb-4 underline decoration-blue-400">Tools & More</h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Git/GitHub</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">JWT Auth</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">Cloudinary</span>
            <span className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold">WordPress</span>
          </div>
        </div>
      </div>
    </section>
  )
}

