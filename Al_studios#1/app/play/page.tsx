"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Gamepad2, X } from "lucide-react"
import BackButton from "../components/BackButton"

const games = [
  {
    id: "snake",
    name: "Snake",
    description: "Classic snake game",
    image: "/images/snake-game.jpg",
    color: "from-green-500 to-green-700",
  },
  {
    id: "tetris",
    name: "Tetris",
    description: "Arrange falling blocks",
    image: "/images/tetris-game.jpg",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "quiz",
    name: "Quiz",
    description: "Test your knowledge",
    image: "/images/quiz-game.jpg",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    id: "memory",
    name: "Memory",
    description: "Match pairs of cards",
    image: "/images/memory-game.jpg",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "pong",
    name: "Pong",
    description: "Classic table tennis game",
    image: "/images/pong-game.jpg",
    color: "from-red-500 to-red-700",
  },
  {
    id: "breakout",
    name: "Breakout",
    description: "Break bricks with a ball",
    image: "/images/breakout-game.jpg",
    color: "from-orange-500 to-orange-700",
  },
]

export default function Play() {
  const [activeGame, setActiveGame] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const launchGame = (gameId: string) => {
    setIsLoading(true)
    setActiveGame(gameId)
    setTimeout(() => setIsLoading(false), 1500) // Simulating game load time
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />

      <motion.h1
        className="text-4xl font-press-start-2p text-center text-white glow-text mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Arcade Zone
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`retro-panel h-64 flex flex-col items-center justify-end cursor-pointer overflow-hidden relative bg-gradient-to-br ${game.color}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => launchGame(game.id)}
            >
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                layout="fill"
                objectFit="cover"
                className="opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h2 className="text-2xl font-press-start-2p text-white mb-2 glow-text">{game.name}</h2>
                <p className="text-white text-center mb-4">{game.description}</p>
                <motion.button
                  className="retro-button flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Gamepad2 size={16} />
                  Play Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 p-8 rounded-lg w-full max-w-4xl relative"
            >
              <button
                onClick={() => setActiveGame(null)}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-96">
                  <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
                  <p className="text-white text-xl">Loading game...</p>
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center">
                  <h2 className="text-3xl text-white font-press-start-2p">
                    {games.find((game) => game.id === activeGame)?.name}
                  </h2>
                  {/* Game component would be rendered here */}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

