import Link from 'next/link'

export default function ProjectDetails({ project }) {
  if (!project) return null

  return (
    <article className="max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="mb-4 flex items-center gap-3">
        <Link href="/" className="handwritten project-link flex items-center gap-2">
          <span className="arrow-draw">←</span>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-6 p-4 sketch-border bg-white doodle-card">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl handwritten font-bold flex items-center gap-3">{project.emoji} {project.title}</h1>
          <p className="handwritten text-xl highlight mt-1">{project.tagline}</p>

          <div className="mt-3 flex gap-3">
            <a href={project.links?.demo || '#'} target="_blank" rel="noreferrer" className="btn-sketch sticky-note handwritten">Live Demo</a>
            <a href={project.links?.repo || '#'} target="_blank" rel="noreferrer" className="btn-sketch sticky-note handwritten">Source Code</a>
          </div>
        </div>
      </header>

      {/* Meta sticky notes */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="sticky-note p-3 sketch-border-sm handwritten">Category: {project.category}</div>
        <div className="sticky-note p-3 sketch-border-sm handwritten">Tech Type: {project.techType}</div>
        <div className="sticky-note p-3 sketch-border-sm handwritten">Status: {project.status}</div>
        {project.date && <div className="sticky-note p-3 sketch-border-sm handwritten">Date: {project.date}</div>}
      </div>

      {/* Video / Preview */}
      <div className="mb-6 p-4 sketch-border bg-white relative" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)" }}>
        {project.video ? (
          <div className="aspect-video bg-zinc-100 sketch-border">{/* video embed */}
            <iframe src={project.video} title="project video" className="w-full h-full" />
          </div>
        ) : (
          <img src={project.preview} alt={`${project.title} preview`} className="w-full h-auto object-cover sketch-border" />
        )}
        <p className="text-sm italic handwritten mt-2">Preview: {project.subtitle}</p>
      </div>

      {/* Screenshots horizontal scroll */}
      <section className="mb-6">
        <h3 className="handwritten text-2xl mb-3">Screenshots</h3>
        <div className="projects-scroll-wrapper p-2">
          <div className="projects-scroll-inner">
            {project.screenshots?.map((src, i) => (
              <div key={i} className={`project-card bg-white sketch-border doodle-card`} style={{ minWidth: '70%', transform: `rotate(${(i % 3) - 1}deg)` }}>
                <img src={src} alt={`screenshot-${i}`} className="w-full h-56 object-cover" />
                <div className="p-2 handwritten text-sm">Screenshot {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Features / Stack */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 sketch-border bg-white">
          <h3 className="handwritten text-2xl mb-2">About this project</h3>
          <p className="text-zinc-700">{project.description}</p>
        </div>

        <div className="p-4 sketch-border bg-white">
          <h3 className="handwritten text-2xl mb-2">Key Features</h3>
          <ul className="list-inside space-y-2">
            {project.features?.map((f, idx) => (
              <li key={idx} className="p-2 sketch-border-sm handwritten">✔ {f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6 p-4 sketch-border bg-white">
        <h3 className="handwritten text-2xl mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack?.map((s, idx) => (
            <span key={idx} className="px-3 py-1 sketch-border-sm bg-zinc-50 text-xs font-semibold handwritten">{s}</span>
          ))}
        </div>
      </div>

      <div className="mb-12 flex gap-3">
        <a href={project.links?.demo || '#'} target="_blank" rel="noreferrer" className="btn-sketch sticky-note handwritten">Live Project</a>
        <a href={project.links?.repo || '#'} target="_blank" rel="noreferrer" className="btn-sketch sticky-note handwritten">GitHub Repo</a>
      </div>
    </article>
  )
}
