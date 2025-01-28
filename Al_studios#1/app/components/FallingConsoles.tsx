"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const consoles = [
  "/console1.png",
  "/console2.png",
  "/console3.png",
  // Add more console images as needed
]

export default function FallingConsoles() {
  const [visibleConsoles, setVisibleConsoles] = useState<JSX.Element[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && visibleConsoles.length < 5) {
        const newConsole = (
          <div
            key={visibleConsoles.length}
            className="console-drop fixed"
            style={{
              left: `${Math.random() * 90}%`,
              top: `-100px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Image
              src={consoles[Math.floor(Math.random() * consoles.length)] || "/placeholder.svg"}
              alt="Falling Console"
              width={50}
              height={50}
            />
          </div>
        )
        setVisibleConsoles((prev) => [...prev, newConsole])
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visibleConsoles])

  return <>{visibleConsoles}</>
}

