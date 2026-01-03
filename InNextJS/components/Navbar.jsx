export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 relative z-50">
      <div className="text-3xl font-bold handwritten">Harsh.dev</div>
      <div className="hidden md:flex gap-8 handwritten text-xl">
        <a href="#about" className="hover:underline decoration-pink-400 decoration-2">Bio</a>
        <a href="#skills" className="hover:underline decoration-yellow-400 decoration-2">Skills</a>
        <a href="#experience" className="hover:underline decoration-blue-400 decoration-2">Path</a>
        <a href="#projects" className="hover:underline decoration-green-400 decoration-2">Work</a>
        <a href="#contact"
          className="px-4 py-1 sketch-border-sm bg-black text-white hover:bg-zinc-800 transition-colors">Let's talk!</a>
      </div>
    </nav>
  )
}

