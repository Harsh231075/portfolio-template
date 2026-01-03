'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const projectsScrollWrapperRef = useRef(null)

  const projects = [
    {
      id: 1,
      slug: 'self-learning',
      category: 'major',
      emoji: '🎓',
      title: 'Self Learning',
      subtitle: 'AI EdTech platform using MERN & Gemini API.',
      description: 'AI-powered personalized learning with quizzes, performance tracking, and gamified progress.',
      tags: [
        { name: 'MERN', color: 'bg-yellow-50' },
        { name: 'Gemini API', color: 'bg-pink-50' },
        { name: 'AI', color: 'bg-green-50' },
        { name: 'EdTech', color: 'bg-blue-50' },
      ],
      result: 'Smart learning with real-time AI insights.',
      rotation: 'rotate-[-1deg]',
    },
    {
      id: 2,
      slug: 'nextgen-learn',
      category: 'major',
      emoji: '🤖',
      title: 'NextGen Learn',
      subtitle: 'Community-driven AI learning platform built with MERN, LangChain & Gemini.',
      description: 'AI chatbot for doubt-solving, personalized paths, and mentorship + certification flows.',
      tags: [
        { name: 'MERN', color: 'bg-yellow-50' },
        { name: 'LangChain', color: 'bg-green-50' },
        { name: 'Gemini', color: 'bg-pink-50' },
        { name: 'AI Chatbot', color: 'bg-blue-50' },
      ],
      result: 'Community-driven AI learning platform.',
      rotation: 'rotate-[1deg]',
    },
    {
      id: 3,
      slug: 'automation-toolkit',
      category: 'minor',
      emoji: '⚙️',
      title: 'Automation Toolkit',
      subtitle: 'A set of n8n workflows for automating repetitive dev tasks.',
      description: 'Trigger-based automations that connect APIs, webhooks, and AI to save hours every week.',
      tags: [
        { name: 'n8n', color: 'bg-green-50' },
        { name: 'Automation', color: 'bg-yellow-50' },
        { name: 'AI Workflows', color: 'bg-pink-50' },
      ],
      result: '90% time saved on recurring ops.',
      rotation: 'rotate-[-2deg]',
    },
    {
      id: 4,
      slug: 'ui-sketchbook',
      category: 'minor',
      emoji: '🎨',
      title: 'UI Sketchbook',
      subtitle: 'A collection of playful UI experiments and micro-apps.',
      description: 'Exploring sketch-style layouts, motion, and interactions to keep interfaces fun and human.',
      tags: [
        { name: 'React', color: 'bg-yellow-50' },
        { name: 'Next.js', color: 'bg-blue-50' },
        { name: 'Playground', color: 'bg-pink-50' },
      ],
      result: 'Faster iteration on product-ready UI ideas.',
      rotation: 'rotate-[2deg]',
    },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    if (projectsScrollWrapperRef.current) {
      projectsScrollWrapperRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [activeFilter])

  return (
    <section id="projects" className="projects-section max-w-6xl mx-auto mb-20 md:mb-32">
      <div className="mb-6 md:mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold handwritten flex items-center gap-3">
            My Projects 🧠
            <svg className="w-8 h-8 text-pink-400 hidden sm:block" viewBox="0 0 100 100" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50C20 50 40 10 80 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M70 30L80 50L60 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base mt-1">Swipe through my work — from small experiments to major
            builds.</p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="projects-filters flex gap-2 overflow-x-auto pb-2 mb-4 md:mb-6">
        <button
          className={`project-filter-btn handwritten ${activeFilter === 'all' ? 'project-filter-btn-active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`project-filter-btn handwritten rotate-[-1deg] ${activeFilter === 'major' ? 'project-filter-btn-active' : ''}`}
          onClick={() => setActiveFilter('major')}
        >
          Major Projects
        </button>
        <button
          className={`project-filter-btn handwritten rotate-[1deg] ${activeFilter === 'minor' ? 'project-filter-btn-active' : ''}`}
          onClick={() => setActiveFilter('minor')}
        >
          Minor Projects
        </button>
      </div>

      {/* Horizontal Scroll Projects */}
      <div className="projects-scroll-wrapper sketch-border bg-white/70 p-3 md:p-4" ref={projectsScrollWrapperRef}>
        <div className="projects-scroll-inner">
          {projects.map((project) => {
            const shouldShow = activeFilter === 'all' || project.category === activeFilter
            return (
              <article
                key={project.id}
                className={`project-card sketch-border bg-white doodle-card ${project.rotation}`}
                data-category={project.category}
                style={{
                  opacity: shouldShow ? 1 : 0,
                  pointerEvents: shouldShow ? 'auto' : 'none',
                  transform: shouldShow ? '' : 'translateY(10px) scale(0.97)',
                }}
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="text-3xl">{project.emoji}</div>
                      <h3 className="text-xl font-bold handwritten leading-snug">{project.title}</h3>
                    </div>
                    <span className="project-badge handwritten">{project.category === 'major' ? 'Major' : 'Minor'}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2" dangerouslySetInnerHTML={{ __html: project.subtitle }}></p>
                  <p className="text-sm text-zinc-700 mb-3">{project.description}</p>
                  <div className="project-card-tags flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`px-2 py-0.5 sketch-border-sm ${tag.color}`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs italic mb-3"><span className="font-semibold">Result:</span> {project.result}</p>
                  <Link href={`/projects/${project.slug}`} className="mt-auto self-start handwritten text-sm project-link">
                    {project.category === 'major' ? 'Case Study →' : 'View Project →'}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

