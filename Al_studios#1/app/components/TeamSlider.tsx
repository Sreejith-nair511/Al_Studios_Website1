"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Sreejith S",
    role: "Lead Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sreejith.jpg-lMgilBMOyNNCIiAYcYsVfb019UXxKF.jpeg",
    slug: "sreejith-s",
  },
  {
    name: "Nikhil Kumar",
    role: "Game Developer & Multiplayer Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikhil.jpg-hqAc2AbNTM2lTTfhd503WPiwbzRR7e.jpeg",
    slug: "nikhil-kumar",
  },
  {
    name: "Shibasish Banerjee",
    role: "Media Head & Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shibasish%20-MSUgybSG1YjHEvt6Yelp3LID1GZxnp.png",
    slug: "shibasish-banerjee",
  },
  {
    name: "K Lakshmi Navyatha",
    role: "Creative Lead & Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navyatha%20.jpg-36emi56xBjynm23W3eemvZLMDWK2Mf.jpeg",
    slug: "k-lakshmi-navyatha",
  },
  {
    name: "Sanjana TG",
    role: "Art Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjana%20.jpg-plxicLBw4fZ5ZBr2bq7VubGWzP7Ecs.jpeg",
    slug: "sanjana-tg",
  },
  {
    name: "Tarani Lakshmi",
    role: "Beta Tester & Character Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarani%20.jpg-97h7dFyljXHOLYB3lDmx5E5Zng0AtF.jpeg",
    slug: "tarani-lakshmi",
  },
  {
    name: "Nithin M",
    role: "Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nithin%20m%20-0l1MytvMr7nOX1nwGU1ahPE2ZIjhrZ.png",
    slug: "nithin-m",
  },
  {
    name: "Rohith G",
    role: "Backend Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rohith.jpg-MZUyAxc4pLmypRW4gGs9yPR7WB0vaq.jpeg",
    slug: "rohith-g",
  },
  {
    name: "Limnisha",
    role: "UI/UX Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limnisha%20.jpg-zaTpRnOPRWd8ASGU7akyVp39x76CqA.jpeg",
    slug: "limnisha",
  },
]

export default function TeamSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 retro-button"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 retro-button"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </motion.button>

      <div ref={containerRef} className="overflow-x-auto hide-scrollbar relative" style={{ scrollBehavior: "smooth" }}>
        <div className="flex gap-8 p-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-64"
            >
              <Link href={`/team/${member.slug}`}>
                <motion.div
                  className="retro-panel h-full flex flex-col items-center p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-48 h-48 mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover border-2 border-cyan-600/30 glow-sm"
                    />
                  </div>
                  <h3 className="font-press-start-2p text-lg text-cyan-400 mb-2 text-center glow-sm px-2 w-full truncate">
                    {member.name}
                  </h3>
                  <p className="text-cyan-300 text-center px-2 w-full truncate">{member.role}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

