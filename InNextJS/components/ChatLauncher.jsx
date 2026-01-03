'use client'

import { useRouter } from 'next/navigation'

export default function ChatLauncher() {
  const router = useRouter()

  return (
    <button
      id="chat-launcher"
      onClick={() => router.push('/chat')}
      className="fixed bottom-5 right-4 md:bottom-7 md:right-7 flex items-center gap-2 z-50 focus:outline-none"
    >
      <div className="relative">
        <div className="launcher-highlight"></div>
        <div className="launcher-circle">
          <span className="text-2xl">💬</span>
        </div>
      </div>
      <span className="hidden sm:inline handwritten text-base bg-yellow-100 px-2 py-1 sketch-border-sm -rotate-2">Let's Chat
        💬</span>
    </button>
  )
}

