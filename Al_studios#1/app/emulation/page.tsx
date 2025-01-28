"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Gamepad, Monitor } from "lucide-react"
import BackButton from "../components/BackButton"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

const emulators = [
  {
    name: "PCSX2",
    description: "PlayStation 2 Emulator",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pcx2.jpg-0z1IKDkU5Cgm96zImLsyvwPc12UMcH.jpeg",
    games: ["Final Fantasy X", "Kingdom Hearts", "God of War"],
    link: "https://pcsx2.net/",
  },
  {
    name: "mGBA",
    description: "Game Boy Advance Emulator",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mgba.jpg-AIkAtusFTjfL3ZLw25F9Rcz8h2VdQv.jpeg",
    games: ["Pokémon FireRed", "Mario Kart: Super Circuit", "The Legend of Zelda: The Minish Cap"],
    link: "https://mgba.io/",
  },
  {
    name: "PPSSPP",
    description: "PSP Emulator",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ppssp.jpg-2hrZZWGT8VZrQbhsHFbve26Ja1SGSX.jpeg",
    games: ["Crisis Core: Final Fantasy VII", "God of War: Chains of Olympus", "Monster Hunter Freedom Unite"],
    link: "https://www.ppsspp.org/",
  },
  {
    name: "BSNES",
    description: "Super Nintendo Emulator",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bsnes.jpg-99QTICo25MlLfFnO1FmJdTkacu0ssy.jpeg",
    games: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Chrono Trigger"],
    link: "https://bsnes.dev/",
  },
]

const featuredGames = [
  {
    title: "Pokémon Red/Blue",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red%20blue.jpg-gMTmWAscOlekaQ1unTU5LCO7ovZkhS.jpeg",
    description: "The classic that started it all. Begin your journey as a Pokémon trainer!",
    emulator: "mGBA",
  },
  {
    title: "Mario Kart: Super Circuit",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mario%20kart.jpg-fBnFsTl2lgZOnEfbhj3m8zzTIvHAri.jpeg",
    description: "Race through colorful tracks in this beloved GBA racing game.",
    emulator: "mGBA",
  },
  {
    title: "DOOM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doom.jpg-8oeopETwPLM7FLap82R6ye2BRut5mK.jpeg",
    description: "The groundbreaking FPS that changed gaming forever.",
    emulator: "DOSBox",
  },
  {
    title: "The Legend of Zelda: Link's Awakening",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/legend%20of%20zelfa.jpg-bsuNnNGcORRtshzR8ZiV9uIUFOObvf.jpeg",
    description: "Embark on an epic adventure on Koholint Island.",
    emulator: "mGBA",
  },
]

export default function Emulation() {
  const [activeTab, setActiveTab] = useState<"emulators" | "games">("emulators")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black/90 py-12">
      <BackButton />

      <div className="container mx-auto px-4">
        <motion.h1
          className={`text-4xl ${outfit.className} font-bold text-center text-white mb-8 glow-text`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Emulation Station
        </motion.h1>

        <div className="flex justify-center mb-8">
          <div className="retro-panel inline-flex rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                activeTab === "emulators" ? "bg-cyan-600/80 text-white" : "text-cyan-400 hover:text-cyan-300"
              }`}
              onClick={() => setActiveTab("emulators")}
            >
              <Monitor size={20} />
              <span>Emulators</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                activeTab === "games" ? "bg-cyan-600/80 text-white" : "text-cyan-400 hover:text-cyan-300"
              }`}
              onClick={() => setActiveTab("games")}
            >
              <Gamepad size={20} />
              <span>Games</span>
            </button>
          </div>
        </div>

        {activeTab === "emulators" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emulators.map((emulator, index) => (
              <motion.div
                key={emulator.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="retro-panel hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-40 mb-4">
                  <Image
                    src={emulator.image || "/placeholder.svg"}
                    alt={emulator.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h2 className={`${outfit.className} text-xl font-bold text-cyan-400 mb-2`}>{emulator.name}</h2>
                  <p className="text-cyan-300 mb-4">{emulator.description}</p>
                  <div className="space-y-1 mb-4">
                    {emulator.games.map((game) => (
                      <p key={game} className="text-gray-400 text-sm">
                        • {game}
                      </p>
                    ))}
                  </div>
                  <a
                    href={emulator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="retro-panel overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className={`${outfit.className} text-xl font-bold text-cyan-400 mb-2`}>{game.title}</h2>
                  <p className="text-gray-300 mb-2">{game.description}</p>
                  <p className="text-cyan-300 text-sm">Emulator: {game.emulator}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

