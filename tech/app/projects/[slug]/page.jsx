import { notFound } from 'next/navigation'
import ProjectDetails from '@/components/ProjectDetails'
import { getProjectBySlug } from '../../../data/projects'

export default function ProjectPage({ params }) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen p-2">
      <ProjectDetails project={project} />
    </main>
  )
}
