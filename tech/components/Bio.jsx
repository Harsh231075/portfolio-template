export default function Bio() {
  return (
    <section id="about" className="max-w-6xl mx-auto mb-20 md:mb-32 relative">
      <h2 className="text-4xl font-bold handwritten mb-8 text-zinc-400 uppercase tracking-widest">// The Sketchpad Bio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative p-6 md:p-10 sketch-border bg-white text-lg leading-relaxed">
            <p className="mb-6">
              Currently pursuing B.Tech in Computer Science with a strong focus on <span
                className="highlight">Full-Stack</span> development and <span className="highlight-pink">AI-driven</span>
              systems.
            </p>
            <p className="mb-6">
              I enjoy turning complex ideas into clean, <span className="highlight">Scalable</span> products using modern
              web and AI technologies. My approach is always centered around <span
                className="highlight-pink">Problem-Solving</span>.
            </p>
            <p>
              I've worked on ed-tech, legal-tech, and <span className="highlight">Automation</span> platforms — always
              focused on real-world impact and efficiency.
            </p>
            {/* Small doodle */}
            <div className="absolute -bottom-8 right-4 text-6xl opacity-20 rotate-12">⚙️</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="sticky-note p-6 sketch-border-sm rotate-1">
            <p className="handwritten text-2xl font-bold mb-2">Harsh's Focus:</p>
            <ul className="space-y-2 text-sm font-semibold">
              <li>📍 Scalable Architectures</li>
              <li>🤖 LLM Integrations</li>
              <li>🛠️ Custom Workflows</li>
              <li>⚡ High Performance Apps</li>
            </ul>
          </div>
          <div className="sketch-border-sm p-6 bg-green-100 -rotate-1">
            <p className="handwritten text-2xl font-bold mb-2">Growth Mindset:</p>
            <p className="text-sm italic">"I don't just write code; I build solutions that matter."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

