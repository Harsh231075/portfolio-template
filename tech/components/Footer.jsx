export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto text-center pb-12">
      <p className="text-zinc-400 handwritten text-lg">
        &copy; 2024 Harsh.dev — Built with ☕ and AI.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#"
          className="hover:text-pink-500 transition-colors handwritten text-xl font-bold underline decoration-pink-200">LinkedIn</a>
        <a href="#"
          className="hover:text-green-500 transition-colors handwritten text-xl font-bold underline decoration-green-200">GitHub</a>
        <a href="#"
          className="hover:text-yellow-500 transition-colors handwritten text-xl font-bold underline decoration-yellow-200">Twitter</a>
      </div>
    </footer>
  )
}

