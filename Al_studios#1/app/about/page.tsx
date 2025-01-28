"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Globe, Mail, GamepadIcon as GameController, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Outfit } from "next/font/google"
import BackButton from "../components/BackButton"

const outfit = Outfit({ subsets: ["latin"] })

// Team member data with social links and bios
const teamMembers = [
  {
    name: "Sreejith S",
    role: "Lead Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sreejith.jpg-C1hsaIu4DBKjlgT54Ee38NWAXSHKOD.jpeg",
    bio: "Hello fellas! Sreejith here with a big smile. As a fellow avkgeek, petrolhead, and game developer, my passion lies in creating experiences that I am proud of. With the appropriate skills and experience, my greatest strength still remains sheer human grit :)",
    social: {
      instagram: "https://www.instagram.com/_sreejith_0511nair?igsh=Yjg2ZXUyc3pkN2Rk",
      linkedin: "https://www.linkedin.com/in/sreejith-s-b232092a9",
      github: "https://github.com/Sreejith-nair511",
      itch: "https://zreegames.itch.io/",
      steam: "https://steamcommunity.com/profiles/76561199502312683/",
    },
  },
  {
    name: "Nikhil Kumar",
    role: "Game Developer and Multiplayer Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikhil.jpg-7MfZIqlAfDGjvRzgoPU7c9M59ghCdl.jpeg",
    bio: "Game developer and multiplayer lead passionate about creating engaging gaming experiences.",
    social: {
      instagram: "https://www.instagram.com/nikhil_k.u.m.a.r_/",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-58083229a",
      github: "https://github.com/Nikhilkumar231",
    },
  },
  {
    name: "Shibasish Banerjee",
    role: "Media Head and Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shibasish%20-OAe8OdtxIMi6itCqGQz4yxYUApId7M.png",
    bio: "I'm Shibasish Banerjee, a Bachelor of Technology student specializing in Information Science and Engineering (ISE). I thrive at the intersection of technology and creativity, driven by a passion for content creation and programming. I believe in 'Shaping the Media, Coding the Future'—a vision where technology meets creativity to deliver transformative experiences.",
    social: {
      instagram: "https://www.instagram.com/shibufrr/",
      linkedin: "https://www.linkedin.com/in/shibasishbanerjee",
      email: "shibasish2005@gmail.com",
      socioverse: "https://www.instagram.com/socioverse.in",
    },
  },
  {
    name: "K Lakshmi Navyatha",
    role: "Creative Lead & Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navyatha%20.jpg-qvWX6Q5vpaABCXQJvbxndsIo8hIlor.jpeg",
    bio: "Hello! I'm K.Lakshmi Navyatha, an aspiring data scientist with a keen interest in art. I'm the designer and creative lead for AL Studios. My passion lies in translating dreams into art, creating worlds that are as captivating as the stories they hold. Whether it's crafting intricate characters or designing awe-inspiring environments, I aim to make every scene memorable.",
    social: {
      instagram: "https://www.instagram.com/kancharla.navyatha",
      linkedin: "https://www.linkedin.com/in/k-lakshmi-navyatha-453151293",
      github: "https://github.com/kancharlanavyatha",
    },
  },
  {
    name: "Sanjana TG",
    role: "Art Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjana%20.jpg-PlKjogEtqaLMroXMPXmwztTdUELVHA.jpeg",
    bio: "Hello everyone, Sanjana here! As an aspiring Art Director, I'm thrilled to embark on my first game project, driven by a passion for creating visually captivating and inspiring game experiences. I'm eager to explore and develop unique art styles, collaborating with talented individuals to bring fresh ideas to life. This project is an exciting opportunity to push creative boundaries, learn new techniques, and craft visuals that enhance gameplay and storytelling.",
    social: {
      instagram: "https://www.instagram.com/sanjana_xx6/",
      linkedin: "https://www.linkedin.com/in/sanjana-t-g",
      github: "https://github.com/sanjanatg",
    },
  },
  {
    name: "Tarani Lakshmi",
    role: "Beta Tester and Character Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarani%20.jpg-fO94BFQOdSGQ5U1LaRcjAfFN4qLmkm.jpeg",
    bio: "Hello! I'm Tarani Lakshmi, a creative mind who draws inspiration from the fusion of art and technology. When I'm not designing, you'll find me diving into novels to spark fresh ideas. Would love to build gaming experiences that are not just unforgettable, but also a whole lot of fun (and maybe a little bit of chaos)!",
    social: {
      instagram: "https://www.instagram.com/tara.xviii",
      linkedin: "https://www.linkedin.com/in/tarani-lakshmi-2658732bb",
      github: "https://github.com/Tannie02",
    },
  },
  {
    name: "Nithin M",
    role: "Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nithin%20m%20-oRTnqGo0emN307rwQ9PVH08yaxBQTp.png",
    bio: "Anime, life, and fun. Passionate game developer creating engaging experiences.",
    social: {
      instagram: "https://www.instagram.com/nikelf_",
    },
  },
  {
    name: "Rohith G",
    role: "Backend Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rohith.jpg-0Az1Jmp0scjQk0Qefb2BLa6k2IfxNE.jpeg",
    bio: "Backend developer specializing in server-side technologies and database management.",
    social: {
      linkedin: "https://www.linkedin.com/in/rohith-g-0461a82b2",
      github: "https://github.com/Rohith-max",
      instagram: "https://www.instagram.com/rohith.ggg",
    },
  },
  {
    name: "Limnisha",
    role: "UI/UX Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limnisha%20.jpg-JXGOTo3NMCNF05NtqQCl0l9oloEZaW.jpeg",
    bio: "UI/UX designer focused on creating intuitive and visually appealing user interfaces for games.",
    social: {
      instagram: "https://www.instagram.com/limnisha._",
      linkedin: "https://www.linkedin.com/in/limnisha-changkakati-6a6453326",
    },
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black/90 py-12">
      <BackButton />

      <div className="container mx-auto px-4">
        <motion.h1
          className={`text-4xl ${outfit.className} font-bold text-center text-white mb-12 glow-text`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="retro-panel hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h2 className={`${outfit.className} text-2xl font-bold text-cyan-400 mb-2`}>{member.name}</h2>
                <h3 className="text-cyan-300 text-lg mb-4">{member.role}</h3>
                <p className="text-gray-300 mb-6">{member.bio}</p>

                <div className="flex gap-4">
                  {member.social.instagram && (
                    <Link
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Instagram size={24} />
                    </Link>
                  )}
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Linkedin size={24} />
                    </Link>
                  )}
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={24} />
                    </Link>
                  )}
                  {member.social.email && (
                    <Link
                      href={`mailto:${member.social.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail size={24} />
                    </Link>
                  )}
                  {member.social.itch && (
                    <Link
                      href={member.social.itch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Globe size={24} />
                    </Link>
                  )}
                  {member.social.steam && (
                    <Link
                      href={member.social.steam}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <GameController size={24} />
                    </Link>
                  )}
                  {member.social.socioverse && (
                    <Link
                      href={member.social.socioverse}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Users size={24} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

