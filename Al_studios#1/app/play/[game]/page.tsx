"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import BackButton from "../../components/BackButton"
import { Maximize2, Minimize2 } from "lucide-react"

interface GameProps {
  params: {
    game: string
  }
}

export default function Game({ params }: GameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const gameContainerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      gameContainerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const renderGame = () => {
    switch (params.game) {
      case "snake":
        return <SnakeGame />
      case "memory":
        return <MemoryGame />
      case "whack-a-mole":
        return <WhackAMole />
      case "minesweeper":
        return <Minesweeper />
      case "trivia":
        return <TriviaGame />
      default:
        return <div>Game not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black">
      <BackButton />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-press-start-2p text-white">
              {params.game.charAt(0).toUpperCase() + params.game.slice(1)}
            </h1>
            <button onClick={toggleFullscreen} className="retro-button flex items-center gap-2">
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              <span>{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
            </button>
          </div>

          <div ref={gameContainerRef} className="retro-panel aspect-video relative overflow-hidden">
            {renderGame()}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Game Components
function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Snake game implementation
    const snake = [{ x: 10, y: 10 }]
    let food = { x: 15, y: 15 }
    let dx = 1
    let dy = 0
    const gridSize = 20
    const tileCount = canvas.width / gridSize

    const gameLoop = setInterval(() => {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Move snake
      const head = { x: snake[0].x + dx, y: snake[0].y + dy }
      snake.unshift(head)

      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1)
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        }
      } else {
        snake.pop()
      }

      // Draw snake
      ctx.fillStyle = "#9333EA"
      snake.forEach((segment) => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2)
      })

      // Draw food
      ctx.fillStyle = "#22C55E"
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2)

      // Check collision with walls
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        clearInterval(gameLoop)
      }

      // Check collision with self
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          clearInterval(gameLoop)
        }
      }
    }, 100)

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (dy !== 1) {
            dx = 0
            dy = -1
          }
          break
        case "ArrowDown":
          if (dy !== -1) {
            dx = 0
            dy = 1
          }
          break
        case "ArrowLeft":
          if (dx !== 1) {
            dx = -1
            dy = 0
          }
          break
        case "ArrowRight":
          if (dx !== -1) {
            dx = 1
            dy = 0
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(gameLoop)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute top-4 left-4 text-white font-press-start-2p">Score: {score}</div>
      <canvas ref={canvasRef} width={400} height={400} className="border-2 border-purple-600" />
    </div>
  )
}

// Implement other game components similarly
function MemoryGame() {
  // Memory game implementation
  return <div>Memory Game Implementation</div>
}

function WhackAMole() {
  // Whack-a-mole implementation
  return <div>Whack-a-Mole Implementation</div>
}

function Minesweeper() {
  // Minesweeper implementation
  return <div>Minesweeper Implementation</div>
}

function TriviaGame() {
  // Trivia game implementation
  return <div>Trivia Game Implementation</div>
}

