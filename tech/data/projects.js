export const projects = [
  {
    slug: 'self-learning',
    title: 'Self Learning',
    emoji: '🎓',
    category: 'Major',
    techType: 'Full Stack',
    status: 'Completed',
    date: '2025-06-01',
    tagline: 'AI EdTech platform using MERN & Gemini API.',
    subtitle: 'AI-powered personalized learning with quizzes and gamified progress.',
    description: `Built a personalized learning platform that uses AI to generate practice questions, adapt content difficulty, and track progress. Integrates Gemini API for content generation and provides analytics dashboards for students and teachers.`,
    video: '',
    preview: '/assets/projects/self-learning/preview.png',
    screenshots: [
      '/assets/projects/self-learning/ss1.png',
      '/assets/projects/self-learning/ss2.png',
      '/assets/projects/self-learning/ss3.png'
    ],
    features: [
      'Adaptive learning paths powered by AI',
      'Real-time quiz generation and grading',
      'Progress dashboards and exportable reports',
      'Mentorship session booking and notes'
    ],
    stack: ['MERN', 'Next.js', 'Gemini API', 'MongoDB', 'Tailwind'],
    links: {
      demo: 'https://example.com/self-learning',
      repo: 'https://github.com/harsh/self-learning'
    }
  },
  {
    slug: 'nextgen-learn',
    title: 'NextGen Learn',
    emoji: '🤖',
    category: 'Major',
    techType: 'Full Stack',
    status: 'In Progress',
    date: '2025-09-12',
    tagline: 'Community-driven AI learning platform built with MERN, LangChain & Gemini.',
    subtitle: 'AI chatbot for doubt-solving, personalized paths, and mentorship + certification flows.',
    description: `A community platform for collaborative AI-driven learning. Integrates chat, LangChain pipelines, and certification systems. Designed for scale and community moderation.`,
    video: '',
    preview: '/assets/projects/nextgen-learn/preview.png',
    screenshots: ['/assets/projects/nextgen-learn/ss1.png', '/assets/projects/nextgen-learn/ss2.png'],
    features: ['AI chat-driven doubt solving', 'Community-sourced paths', 'Certifications and progress sharing'],
    stack: ['MERN', 'LangChain', 'Gemini', 'Redis'],
    links: { demo: '', repo: 'https://github.com/harsh/nextgen-learn' }
  }
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}
