"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const games = [
  { name: "Cyber Quest", image: "/placeholder.svg", genre: "Action RPG" },
  { name: "Pixel Warriors", image: "/placeholder.svg", genre: "Fighting" },
  { name: "Retro Racer", image: "/placeholder.svg", genre: "Racing" },
  { name: "Space Explorer", image: "/placeholder.svg", genre: "Adventure" },
  { name: "8-Bit Battles", image: "/placeholder.svg", genre: "Strategy" },
]

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: (direction: number) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction: number) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full"
        >
          <div className="retro-panel p-4">
            <Image
              src={games[currentIndex].image || "/placeholder.svg"}
              alt={games[currentIndex].name}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="font-press-start-2p text-lg text-white mb-2">{games[currentIndex].name}</h3>
            <p className="text-purple-300">{games[currentIndex].genre}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 retro-button" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 retro-button" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

