"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X } from "lucide-react"

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

const GREETINGS = [
  "Ya ha ha! Found me! 🌱",
  "Hello, fellow adventurer! 🎮",
  "Ready to play some games? 🎲",
  "Ooh, a visitor! How exciting! ✨",
]

const RESPONSES = {
  hello: ["Ya ha ha! Hello there! 🌿", "Hi friend! Found any cool games? 🎮"],
  help: ["Need help? I can tell you about our games, team, or events! Just ask! 🎯"],
  games: ["We've got tons of fun games! Check out the Play section for some retro action! 🕹️"],
  team: ["Our team is full of passionate gamers and creators! Want to meet them? 👥"],
  default: ["Hmm... interesting! Tell me more! 🤔", "Ya ha ha! That's fun! 🌟"],
}

export default function KorokChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
      setTimeout(() => {
        setMessages([{ text: greeting, isUser: false, timestamp: new Date() }])
      }, 500)
    }
  }, [isOpen, messages.length]) // Added messages.length to dependencies

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { text: inputValue, isUser: true, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate response
    setTimeout(() => {
      let response
      const lowercaseInput = inputValue.toLowerCase()

      if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
        response = RESPONSES.hello[Math.floor(Math.random() * RESPONSES.hello.length)]
      } else if (lowercaseInput.includes("help")) {
        response = RESPONSES.help[0]
      } else if (lowercaseInput.includes("game")) {
        response = RESPONSES.games[0]
      } else if (lowercaseInput.includes("team")) {
        response = RESPONSES.team[0]
      } else {
        response = RESPONSES.default[Math.floor(Math.random() * RESPONSES.default.length)]
      }

      setMessages((prev) => [...prev, { text: response, isUser: false, timestamp: new Date() }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 retro-panel w-80"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-press-start-2p text-white">Korok Helper</h3>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(false)}>
                <X className="text-purple-400 hover:text-purple-300" />
              </motion.button>
            </div>

            <div className="h-64 overflow-y-auto mb-4 p-2 rounded bg-black/30">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-2 flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded ${
                      message.isUser ? "bg-purple-600/80 text-white" : "bg-black/50 text-purple-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-2 text-purple-400">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-black/30 border border-purple-600/30 rounded p-2 text-white focus:outline-none focus:border-purple-600"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="retro-button"
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-purple-600/80 shadow-lg hover:bg-purple-700/80 transition-colors duration-300 backdrop-blur-sm"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatbot%20(2)-0Uj4VSKMJGWd3MWhWI17dNbQ0ajivw.gif"
          alt="Korok Chat"
          width={64}
          height={64}
          className="rounded-full"
        />
      </motion.button>
    </div>
  )
}

