export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto mb-20 md:mb-32">
      <h2
        className="text-4xl md:text-5xl font-bold handwritten mb-12 text-center underline decoration-dashed decoration-zinc-300">
        Professional Journey</h2>

      <div className="space-y-8">
        {/* Exp 1 */}
        <div className="sketch-border p-6 md:p-8 bg-white hover:bg-zinc-50 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold handwritten text-pink-500">MyMoment</h3>
              <p className="font-semibold text-zinc-700">Full Stack Developer</p>
            </div>
            <div className="handwritten text-lg text-zinc-400">Nov 2025 – Present</div>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Building scalable MERN & Next.js features, handling authentication, APIs, and production-ready deployments
            while working closely with product teams.
          </p>
        </div>

        {/* Exp 2 */}
        <div className="sketch-border p-6 md:p-8 bg-white hover:bg-zinc-50 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold handwritten text-yellow-500">Daphnis Labs</h3>
              <p className="font-semibold text-zinc-700">Full Stack Developer Intern</p>
            </div>
            <div className="handwritten text-lg text-zinc-400">Internship</div>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Developed MERN & Next.js solutions under a tech lead, coordinating directly with clients for real-time
            requirements.
          </p>
        </div>

        {/* Exp 3 */}
        <div className="sketch-border p-6 md:p-8 bg-white hover:bg-zinc-50 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold handwritten text-blue-500">iLegalLearn</h3>
              <p className="font-semibold text-zinc-700">Software Engineer Intern</p>
            </div>
            <div className="handwritten text-lg text-zinc-400">Internship</div>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Built backend and frontend modules for a legal-tech platform, including dashboards, authentication, and
            data-driven components.
          </p>
        </div>

        {/* Exp 4 */}
        <div className="sketch-border p-6 md:p-8 bg-white hover:bg-zinc-50 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold handwritten text-green-500">Webseeder Pvt. Ltd</h3>
              <p className="font-semibold text-zinc-700">Full Stack Intern</p>
            </div>
            <div className="handwritten text-lg text-zinc-400">Internship</div>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            Developed MERN stack applications using Git-based collaboration and agile practices.
          </p>
        </div>
      </div>
    </section>
  )
}

