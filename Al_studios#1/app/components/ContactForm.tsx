"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="retro-panel max-w-2xl mx-auto">
      <h2 className="text-2xl font-press-start-2p text-white mb-6">Contact Us</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-purple-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-black bg-opacity-50 border-2 border-purple-600 rounded p-2 text-white"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-purple-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-black bg-opacity-50 border-2 border-purple-600 rounded p-2 text-white"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-purple-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-black bg-opacity-50 border-2 border-purple-600 rounded p-2 text-white"
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          required
        />
      </div>

      <button type="submit" className="retro-button">
        Send Message
      </button>
    </form>
  )
}

