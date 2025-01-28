import { DiscIcon as Discord, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function JoinCommunity() {
  const socials = [
    { name: "Discord", icon: Discord, url: "#", color: "hover:text-[#7289DA]" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-[#0077B5]" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-[#E4405F]" },
    { name: "itch.io", icon: Github, url: "#", color: "hover:text-[#FA5C5C]" },
  ]

  return (
    <div className="retro-panel">
      <h2 className="text-2xl font-press-start-2p text-white mb-6">Join Our Community</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            className={`flex flex-col items-center p-4 rounded-lg bg-black/30 
                       transition-all duration-300 hover:scale-105 ${social.color}`}
          >
            <social.icon size={32} className="mb-2" />
            <span className="text-sm font-press-start-2p">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

