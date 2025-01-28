"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BackButton from "../components/BackButton"

const teamMembers = [
  {
    name: "Sreejith S",
    role: "Lead Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sreejith.jpg-lMgilBMOyNNCIiAYcYsVfb019UXxKF.jpeg",
    bio: "Hello fellas! Sreejith here with a big smile. As a fellow avkgeek, petrolhead and a game developer, my passion lies in creating experiences that I am proud of. With the appropriate skills and experience, my greatest strength still remains sheer human grit :)",
    social: {
      instagram: "https://www.instagram.com/_sreejith_0511nair?igsh=Yjg2ZXUyc3pkN2Rk",
      linkedin: "https://www.linkedin.com/in/sreejith-s-b232092a9",
      github: "https://github.com/Sreejith-nair511",
      itch: "https://zreegames.itch.io/",
      steam: "https://steamcommunity.com/profiles/76561199502312683/",
    },
    slug: "sreejith-s",
  },
  {
    name: "Nikhil Kumar",
    role: "Game Developer & Multiplayer Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikhil.jpg-hqAc2AbNTM2lTTfhd503WPiwbzRR7e.jpeg",
    bio: "Game developer and multiplayer lead passionate about creating engaging gaming experiences.",
    social: {
      instagram: "https://www.instagram.com/nikhil_k.u.m.a.r_",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-58083229a",
      github: "https://github.com/Nikhilkumar231",
    },
    slug: "nikhil-kumar",
  },
  {
    name: "Shibasish Banerjee",
    role: "Media Head & Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shibasish%20-MSUgybSG1YjHEvt6Yelp3LID1GZxnp.png",
    bio: "I'm Shibasish Banerjee, a Bachelor of Technology student specializing in Information Science and Engineering (ISE). I thrive at the intersection of technology and creativity, driven by a passion for content creation and programming. I believe in 'Shaping the Media, Coding the Future'—a vision where technology meets creativity to deliver transformative experiences.",
    social: {
      instagram: "https://www.instagram.com/shibufrr",
      linkedin: "https://www.linkedin.com/in/shibasishbanerjee",
      email: "shibasish2005@gmail.com",
      socioverse: "https://www.instagram.com/socioverse.in",
    },
    slug: "shibasish-banerjee",
  },
  {
    name: "K Lakshmi Navyatha",
    role: "Creative Lead & Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navyatha%20.jpg-36emi56xBjynm23W3eemvZLMDWK2Mf.jpeg",
    bio: "Hello! I'm K.Lakshmi Navyatha an aspiring data scientist with a keen interest in art. I'm the designer and creative lead for AL Studios. My passion lies in translating dreams into art, creating world's that are as captivating as the stories they hold. Whether it's crafting intricate characters or designing awe-inspiring environments, I aim to make every scene memorable. Ready to explore the universe we've built? Dive in!",
    social: {
      instagram: "https://www.instagram.com/kancharla.navyatha",
      linkedin: "https://www.linkedin.com/in/k-lakshmi-navyatha-453151293",
      github: "https://github.com/kancharlanavyatha",
    },
    slug: "k-lakshmi-navyatha",
  },
  {
    name: "Sanjana TG",
    role: "Art Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjana%20.jpg-plxicLBw4fZ5ZBr2bq7VubGWzP7Ecs.jpeg",
    bio: "Hello everyone Sanjana here!! As an aspiring Art Director, I'm thrilled to embark on my first game project, driven by a passion for creating visually captivating and inspiring game experiences. I'm eager to explore and develop unique art styles, collaborating with talented individuals to bring fresh ideas to life. This project is an exciting opportunity to push creative boundaries, learn new techniques, and craft visuals that enhance gameplay and storytelling.",
    social: {
      instagram: "https://www.instagram.com/sanjana_xx6/",
      linkedin: "https://www.linkedin.com/in/sanjana-t-g",
      github: "https://github.com/sanjanatg",
    },
    slug: "sanjana-tg",
  },
  {
    name: "Tarani Lakshmi",
    role: "Beta Tester & Character Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarani%20.jpg-97h7dFyljXHOLYB3lDmx5E5Zng0AtF.jpeg",
    bio: "Hello! I'm Tarani Lakshmi, a creative mind who draws inspiration from the fusion of art and technology. When I'm not designing, you'll find me diving into novels to spark fresh ideas. Would love to build gaming experiences that are not just unforgettable, but also a whole lot of fun (and maybe a little bit of chaos)!",
    social: {
      instagram: "https://www.instagram.com/tara.xviii",
      linkedin: "https://www.linkedin.com/in/tarani-lakshmi-2658732bb",
      github: "https://github.com/Tannie02",
    },
    slug: "tarani-lakshmi",
  },
  {
    name: "Nithin M",
    role: "Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nithin%20m%20-0l1MytvMr7nOX1nwGU1ahPE2ZIjhrZ.png",
    bio: "Anime, life, and fun. Passionate game developer creating engaging experiences.",
    social: {
      instagram: "https://www.instagram.com/nikelf_",
    },
    slug: "nithin-m",
  },
  {
    name: "Rohith G",
    role: "Backend Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rohith.jpg-MZUyAxc4pLmypRW4gGs9yPR7WB0vaq.jpeg",
    bio: "Backend developer specializing in server-side technologies and database management.",
    social: {
      linkedin: "https://www.linkedin.com/in/rohith-g-0461a82b2",
      github: "https://github.com/Rohith-max",
      instagram: "https://www.instagram.com/rohith.ggg",
    },
    slug: "rohith-g",
  },
  {
    name: "Limnisha",
    role: "UI/UX Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limnisha%20.jpg-zaTpRnOPRWd8ASGU7akyVp39x76CqA.jpeg",
    bio: "UI/UX designer focused on creating intuitive and visually appealing user interfaces for games.",
    social: {
      instagram: "https://www.instagram.com/limnisha._",
      linkedin: "https://www.linkedin.com/in/limnisha-changkakati-6a6453326",
    },
    slug: "limnisha",
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black/90 py-12">
      <BackButton />

      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-press-start-2p mb-12 text-center text-white glow-text"
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
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <Link href={`/team/${member.slug}`} className="block mb-4">
                  <h2 className="text-2xl font-press-start-2p text-cyan-400 mb-2 glow-sm">{member.name}</h2>
                  <h3 className="text-cyan-300 text-lg mb-4">{member.role}</h3>
                </Link>
                <p className="text-gray-300 mb-6 line-clamp-3">{member.bio}</p>

                <div className="flex gap-4">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  )}
                  {member.social.socioverse && (
                    <a
                      href={member.social.socioverse}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Users size={24} />
                    </a>
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

