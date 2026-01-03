export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto mb-20 md:mb-32 px-4 md:px-0">
      <div className="relative">
        {/* Sticky note intro */}
        <div
          className="absolute -top-12 -left-12 md:-left-20 z-10 sticky-note p-6 sketch-border-sm rotate-[-5deg] w-48 hidden lg:block bg-blue-100">
          <p className="handwritten text-xl font-bold">Have an idea, startup, or problem to solve? I'd love to help.</p>
        </div>

        <div className="p-6 md:p-12 sketch-border bg-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold handwritten mb-8 text-center md:text-left">Let's Build Something
            Awesome 🚀</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="handwritten text-xl font-bold">Name</label>
                <input type="text" placeholder="Your Name"
                  className="p-4 sketch-border-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="handwritten text-xl font-bold">Email</label>
                <input type="email" placeholder="your@email.com"
                  className="p-4 sketch-border-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="handwritten text-xl font-bold">Message</label>
              <textarea rows="4" placeholder="Tell me what you're thinking..."
                className="p-4 sketch-border-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"></textarea>
            </div>

            <button type="submit"
              className="w-full btn-sketch sketch-border bg-green-400 text-2xl py-4 hover:bg-green-500 font-bold handwritten transition-all shadow-lg">
              Send Message ✨
            </button>
          </form>

          <div
            className="mt-8 pt-8 border-t-2 border-dashed border-zinc-100 flex flex-wrap gap-4 md:gap-8 justify-center items-center text-zinc-400 handwritten text-xl">
            <span>No corporate spam.</span>
            <span className="hidden sm:inline">•</span>
            <span>I usually reply within 24 hours.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

