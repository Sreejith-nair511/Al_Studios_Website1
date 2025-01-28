"use client"

import Image from "next/image"
import { useState } from "react"
import { Github, Facebook, Mail } from "lucide-react"
import BackButton from "../components/BackButton"
import { motion } from "framer-motion"

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carl-raw-m3hn2Kn5Bns-unsplash.jpg-boTOFzo14qE5jY7ZKpkcfYAGWX7Q7o.jpeg"
        alt="Arcade Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm" />

      <BackButton />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20same1%20-xPI9ee8bVo7NWJWutvbt7215gr5sel.png"
            alt="AL Studios"
            width={80}
            height={80}
            className="rounded-full glow-lg"
          />
        </div>

        <h1 className="text-3xl font-press-start-2p text-center text-white mb-8 glow-text">Sign In</h1>

        <div className="retro-panel backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-press-start-2p text-cyan-300 mb-2 glow-sm">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full bg-black/50 border-2 border-cyan-500/30 rounded p-2 text-white shadow-[0_0_10px_rgba(6,182,212,0.2)] focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                value={formData.username}
                onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-press-start-2p text-cyan-300 mb-2 glow-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-black/50 border-2 border-cyan-500/30 rounded p-2 text-white shadow-[0_0_10px_rgba(6,182,212,0.2)] focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600/80 hover:bg-cyan-500/80 text-white font-press-start-2p py-2 px-4 rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] glow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center text-sm text-cyan-300 mb-4 glow-sm">Or sign in with</p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 bg-cyan-600/80 rounded-full hover:bg-cyan-500/80 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Github size={24} />
              </button>
              <button className="p-2 bg-cyan-600/80 rounded-full hover:bg-cyan-500/80 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Facebook size={24} />
              </button>
              <button className="p-2 bg-cyan-600/80 rounded-full hover:bg-cyan-500/80 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

