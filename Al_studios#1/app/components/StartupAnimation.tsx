"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

export default function StartupAnimation() {
  const [show, setShow] = useState(true)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const navbar = document.querySelector("header")
    if (navbar) navbar.style.display = "none"

    const timer1 = setTimeout(() => setStage(1), 1000)
    const timer2 = setTimeout(() => setStage(2), 2000)
    const timer3 = setTimeout(() => setStage(3), 3000)
    const timer4 = setTimeout(() => {
      setStage(4)
      document.body.style.overflow = "hidden"
    }, 4000)
    const timer5 = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = "auto"
      if (navbar) navbar.style.display = "block"
    }, 5000)

    document.body.style.overflow = "hidden"

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      document.body.style.overflow = "auto"
      if (navbar) navbar.style.display = "block"
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />

            <motion.div
              className="relative w-64 h-64 mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: [-180, 0],
                filter: ["blur(10px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20same1%20-xPI9ee8bVo7NWJWutvbt7215gr5sel.png"
                alt="AL Studios"
                layout="fill"
                objectFit="contain"
                priority
                className="drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
              />
            </motion.div>

            <motion.div
              className={`text-4xl ${outfit.className} text-cyan-400 mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Rethinking Gaming
              </motion.span>
            </motion.div>

            <motion.div
              className={`text-2xl ${outfit.className} text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Welcome to AL Studios
              </motion.span>
            </motion.div>

            <motion.div
              className="w-64 h-2 mt-8 bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

