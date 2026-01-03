'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ChatLauncher from '@/components/ChatLauncher'

export default function ChatPage() {
  const router = useRouter()
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'harsh',
      content: (
        <>
          <p className="handwritten text-base md:text-lg mb-1">Hey, I'm Harsh!</p>
          <p>I love chatting about ideas, AI workflows, full-stack builds, and how to ship things fast without
            breaking quality.</p>
        </>
      ),
      timestamp: 'just now',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatMessagesRef = useRef(null)
  const chatInputRef = useRef(null)

  useEffect(() => {
    if (chatInputRef.current) {
      setTimeout(() => chatInputRef.current.focus(), 150)
    }
  }, [])

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const appendUserMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: <p>{text}</p>,
      timestamp: 'just now',
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const appendHarshReply = (text) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'harsh',
      content: <p>{text}</p>,
      timestamp: 'just now',
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const simulateHarshReply = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      appendHarshReply("Thanks for reaching out! I'll get back to you soon with more details.")
    }, 1200)
  }

  const handleSend = () => {
    const value = inputValue.trim()
    if (!value) return
    appendUserMessage(value)
    setInputValue('')
    simulateHarshReply()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <main className="chat-page-wrapper flex flex-col items-center justify-start pt-6 md:pt-10">
        <section className="w-full max-w-3xl px-4 pb-6 md:pb-10">
          <div className="mb-6 md:mb-8 flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="sketch-border-sm bg-white px-3 py-1 text-xs md:text-sm flex items-center gap-1 hover:bg-zinc-50"
            >
              <span className="text-lg">←</span>
              <span className="handwritten text-base md:text-lg">Back to portfolio</span>
            </button>
          </div>
          <header className="mb-6 md:mb-8">
            <h1 className="handwritten text-4xl md:text-5xl font-bold mb-2">Let's Talk ✨</h1>
            <p className="text-zinc-600 text-sm md:text-base max-w-md">Ask me about projects, internships, freelancing, or tech.
            </p>
          </header>

          <div className="mb-4 sketch-border bg-white/80 p-4 md:p-5 rotate-[-1deg]">
            <p className="handwritten text-xl md:text-2xl">👋 Hey! I'm Harsh.<br /><span className="text-base md:text-lg">Drop a
              message — I usually reply pretty fast.</span></p>
          </div>

          <section
            className="sketch-border bg-white/90 p-3 md:p-5 flex flex-col gap-3 md:gap-4"
            style={{ maxHeight: '60vh', overflowY: 'auto' }}
            ref={chatMessagesRef}
            id="chat-messages"
          >
            {messages.map((message) => (
              <article key={message.id} className={`flex items-start gap-2 md:gap-3 chat-message-enter ${message.type === 'user' ? 'justify-end' : ''}`}>
                {message.type === 'harsh' && <div className="chat-avatar">⚡</div>}
                <div>
                  <div className={`chat-bubble ${message.type === 'harsh' ? 'chat-bubble-harsh' : 'chat-bubble-user'} text-sm md:text-base`}>
                    {message.content}
                  </div>
                  <p className={`chat-meta text-zinc-400 mt-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    {message.type === 'harsh' ? 'Harsh' : 'You'} · {message.timestamp}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-4 md:mt-5">
            <div className="chat-input-note sketch-border bg-white/90 p-3 md:p-4 flex flex-col gap-2 sticky bottom-4">
              <label htmlFor="chat-input" className="handwritten text-lg md:text-xl">Write something…</label>
              <textarea
                id="chat-input"
                ref={chatInputRef}
                rows="2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="chat-textarea w-full bg-transparent outline-none text-sm md:text-base"
                placeholder="Write something…"
              />
              <div className="flex items-center justify-between gap-3 mt-1">
                <p className="text-[11px] md:text-xs text-zinc-400">Press Enter to send</p>
                <button
                  onClick={handleSend}
                  className="btn-sketch sketch-border-sm bg-green-300 px-3 py-1 text-xs md:text-sm flex items-center gap-1 hover:bg-green-400"
                >
                  <span className="handwritten">Send</span>
                  <span>📨</span>
                </button>
              </div>
            </div>
          </section>

          {isTyping && (
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
              <span>Harsh is typing ✍️</span>
              <div className="typing-dots flex gap-1">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </section>
      </main>
      <ChatLauncher />
    </>
  )
}

