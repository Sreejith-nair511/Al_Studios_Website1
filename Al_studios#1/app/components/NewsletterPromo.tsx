import Link from "next/link"
import { Mail } from "lucide-react"

export default function NewsletterPromo() {
  return (
    <div className="retro-panel bg-gradient-to-r from-purple-900/50 to-black/50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-press-start-2p text-white mb-2">The Hyrule Letter</h3>
          <p className="text-purple-300 mb-4 md:mb-0">
            Stay updated with our latest news and releases, curated by our Editor-in-Chief, K Lakshmi Navyatha
          </p>
        </div>
        <Link href="/newsletter" className="retro-button flex items-center gap-2">
          <Mail size={16} />
          <span>Subscribe</span>
        </Link>
      </div>
    </div>
  )
}

