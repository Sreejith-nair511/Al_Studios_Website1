"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, X, Minimize2, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const PLAYLIST = [
  {
    title: "Dynamite",
    artist: "BTS",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20BTS%20-%20Dynamite%20(online-video-cutter.com)-5ZXICTGT5GG1BRYhONjdehvjcdnMvL.mp3",
  },
  {
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/109_Michael_Jackson_-_Smooth_Criminal-CD-R%20(online-video-cutter.com)-uCq25g61q93vtt3KNJQ0MexIj8jqNg.mp3",
  },
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Starboy%20ft.%20Daft%20Punk%20(online-video-cutter.com)-jSd5z1zZ4LOEPsJJfXbtDYR0qCrXzy.mp3",
  },
  {
    title: "Uptown Funk",
    artist: "Bruno Mars",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/up%20town-bruno%20mars-vtuo41g4EZTYfeHJ21Yv98QC2rD2Mb.mp3",
  },
  {
    title: "Count On Me",
    artist: "Bruno Mars",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bruno%20Mars%20%20-%20Count%20On%20Me-ZOZ80a4ruMxfbewZz511n58lJlOkvL.mp3",
  },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`retro-panel p-4 audio-player transition-all duration-300 bg-opacity-50 backdrop-blur-sm ${
              isExpanded ? "w-80" : "w-auto"
            } ${isMinimized ? "scale-75 hover:scale-100" : ""}`}
          >
            <div className="flex justify-between mb-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-cyan-400 hover:text-cyan-300 glow-sm"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={toggleVisibility}
                className="text-cyan-400 hover:text-cyan-300 glow-sm"
                title="Hide Player"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevTrack}
                className="text-cyan-400 hover:text-cyan-300 glow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipBack size={20} />
              </motion.button>

              <motion.button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-cyan-600/80 flex items-center justify-center hover:bg-cyan-500/80 audio-icon shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </motion.button>

              <motion.button
                onClick={nextTrack}
                className="text-cyan-400 hover:text-cyan-300 glow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipForward size={20} />
              </motion.button>

              <motion.button
                onClick={toggleMute}
                className="text-cyan-400 hover:text-cyan-300 glow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </motion.button>

              <AnimatePresence>
                {isExpanded && !isMinimized && (
                  <motion.div
                    className="text-sm overflow-hidden"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    <div className="text-cyan-100 font-press-start-2p truncate glow-sm">
                      {PLAYLIST[currentTrack].title}
                    </div>
                    <div className="text-cyan-300 text-xs truncate">{PLAYLIST[currentTrack].artist}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={PLAYLIST[currentTrack].url}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </motion.div>
  )
}

