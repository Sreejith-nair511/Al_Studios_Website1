import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-press-start-2p mb-8 text-center text-white glow-text">The Hyrule Letter</h1>

        <div className="retro-panel mb-8">
          <h2 className="text-2xl font-press-start-2p text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-purple-300 mb-6">
            Stay updated with the latest news, game releases, and exclusive content from AL Studios.
          </p>

          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black bg-opacity-50 border-2 border-purple-600 rounded p-2 text-white"
            />
            <button type="submit" className="retro-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-6">
          <div className="retro-panel">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-purple-400" size={24} />
              <h3 className="text-xl font-press-start-2p text-white">Latest Issue</h3>
            </div>
            <h4 className="text-lg text-purple-300 mb-2">New Game Announcement!</h4>
            <p className="text-gray-300">Exciting news! We're thrilled to announce our latest project...</p>
          </div>

          <div className="retro-panel">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-purple-400" size={24} />
              <h3 className="text-xl font-press-start-2p text-white">Previous Issue</h3>
            </div>
            <h4 className="text-lg text-purple-300 mb-2">Studio Update</h4>
            <p className="text-gray-300">Check out what we've been working on this month...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

