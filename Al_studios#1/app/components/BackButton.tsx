"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="back-button bottom-4 top-auto">
      <ChevronLeft className="inline-block mr-1" size={16} />
      Back
    </button>
  )
}

