"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BackButton from "../components/BackButton"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sign%20in%202%20.jpg-J8GphrtpNNPqapbNf93vRpI6Q4MwQt.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366AB]/80 to-black/90" />

      <BackButton />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-press-start-2p text-white mb-4"
            >
              Welcome to the Adventure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-purple-300"
            >
              Sign up to rethink gaming!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="retro-panel backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-press-start-2p text-purple-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                  <input
                    type="text"
                    id="username"
                    className="w-full bg-black/50 border-2 border-purple-600 rounded pl-10 p-2 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-colors"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-press-start-2p text-purple-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border-2 border-purple-600 rounded pl-10 p-2 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-press-start-2p text-purple-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full bg-black/50 border-2 border-purple-600 rounded pl-10 p-2 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-colors"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full retro-button"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-purple-300">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

