"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Globe, Mail, GamepadIcon as GameController, Users } from "lucide-react"
import BackButton from "../../components/BackButton"

const teamMembers = {
  "sreejith-s": {
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
  },
  "nikhil-kumar": {
    name: "Nikhil Kumar",
    role: "Game Developer & Multiplayer Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikhil.jpg-hqAc2AbNTM2lTTfhd503WPiwbzRR7e.jpeg",
    bio: "Game developer and multiplayer lead passionate about creating engaging gaming experiences.",
    social: {
      instagram: "https://www.instagram.com/nikhil_k.u.m.a.r_",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-58083229a",
      github: "https://github.com/Nikhilkumar231",
    },
  },
  "shibasish-banerjee": {
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
  },
  "k-lakshmi-navyatha": {
    name: "K Lakshmi Navyatha",
    role: "Creative Lead & Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navyatha%20.jpg-36emi56xBjynm23W3eemvZLMDWK2Mf.jpeg",
    bio: "Greetings, Adventurer! I'm K.Lakshmi Navyatha. As the designer and the creative lead for Alstudios, my passion lies in translating dreams into art, creating worlds that are as captivating as the stories they hold. Whether it's crafting intricate characters or designing awe-inspiring environments, I aim to make every scene memorable. Ready to explore the universe we've built? Dive in!",
    social: {
      instagram: "https://www.instagram.com/kancharla.navyatha",
      linkedin: "https://www.linkedin.com/in/k-lakshmi-navyatha-453151293",
      github: "https://github.com/kancharlanavyatha",
    },
  },
  "sanjana-tg": {
    name: "Sanjana TG",
    role: "Art Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjana%20.jpg-plxicLBw4fZ5ZBr2bq7VubGWzP7Ecs.jpeg",
    bio: "Hello everyone Sanjana here!! As an aspiring Art Director, I'm thrilled to embark on my first game project, driven by a passion for creating visually captivating and inspiring game experiences. I'm eager to explore and develop unique art styles, collaborating with talented individuals to bring fresh ideas to life. This project is an exciting opportunity to push creative boundaries, learn new techniques, and craft visuals that enhance gameplay and storytelling. For me, game art isn't just about aesthetics—it's about building immersive worlds and memorable experiences for players.",
    social: {
      instagram: "https://www.instagram.com/sanjana_xx6/",
      linkedin: "https://www.linkedin.com/in/sanjana-t-g",
      github: "https://github.com/sanjanatg",
    },
  },
  "tarani-lakshmi": {
    name: "Tarani Lakshmi",
    role: "Beta Tester & Character Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarani%20.jpg-97h7dFyljXHOLYB3lDmx5E5Zng0AtF.jpeg",
    bio: "Hello! I'm Tarani Lakshmi, a creative mind who draws inspiration from the fusion of art and technology. When I'm not designing, you'll find me diving into novels to spark fresh ideas. Would love to build gaming experiences that are not just unforgettable, but also a whole lot of fun (and maybe a little bit of chaos)!",
    social: {
      instagram: "https://www.instagram.com/tara.xviii",
      linkedin: "https://www.linkedin.com/in/tarani-lakshmi-2658732bb",
      github: "https://github.com/Tannie02",
    },
  },
  "nithin-m": {
    name: "Nithin M",
    role: "Game Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nithin%20m%20-0l1MytvMr7nOX1nwGU1ahPE2ZIjhrZ.png",
    bio: "Anime, life, and fun. Passionate game developer creating engaging experiences.",
    social: {
      instagram: "https://www.instagram.com/nikelf_",
    },
  },
  "rohith-g": {
    name: "Rohith G",
    role: "Backend Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rohith.jpg-MZUyAxc4pLmypRW4gGs9yPR7WB0vaq.jpeg",
    bio: "Backend developer specializing in server-side technologies and database management.",
    social: {
      linkedin: "https://www.linkedin.com/in/rohith-g-0461a82b2",
      github: "https://github.com/Rohith-max",
      instagram: "https://www.instagram.com/rohith.ggg",
    },
  },
  limnisha: {
    name: "Limnisha",
    role: "UI/UX Designer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/limnisha%20.jpg-zaTpRnOPRWd8ASGU7akyVp39x76CqA.jpeg",
    bio: "UI/UX designer focused on creating intuitive and visually appealing user interfaces for games.",
    social: {
      instagram: "https://www.instagram.com/limnisha._",
      linkedin: "https://www.linkedin.com/in/limnisha-changkakati-6a6453326",
    },
  },
}

export default function MemberPage({ params }: { params: { member: string } }) {
  const member = teamMembers[params.member as keyof typeof teamMembers]

  if (!member) {
    return <div>Member not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black/90 py-12">
      <BackButton />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="retro-panel overflow-hidden">
            <div className="md:flex gap-8 p-6">
              <div className="md:w-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-square mb-6"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg border-2 border-cyan-600/30 glow-lg"
                  />
                </motion.div>

                <div className="flex justify-center gap-4 mb-6">
                  {member.social.instagram && (
                    <SocialLink href={member.social.instagram} icon={Instagram} label="Instagram" />
                  )}
                  {member.social.linkedin && (
                    <SocialLink href={member.social.linkedin} icon={Linkedin} label="LinkedIn" />
                  )}
                  {member.social.github && <SocialLink href={member.social.github} icon={Github} label="GitHub" />}
                  {member.social.email && (
                    <SocialLink href={`mailto:${member.social.email}`} icon={Mail} label="Email" />
                  )}
                  {member.social.itch && <SocialLink href={member.social.itch} icon={Globe} label="itch.io" />}
                  {member.social.steam && <SocialLink href={member.social.steam} icon={GameController} label="Steam" />}
                  {member.social.socioverse && (
                    <SocialLink href={member.social.socioverse} icon={Users} label="Socioverse" />
                  )}
                </div>
              </div>

              <div className="md:w-2/3">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h1 className="text-3xl font-press-start-2p text-cyan-400 mb-2 glow-text">{member.name}</h1>
                  <h2 className="text-xl text-cyan-300 mb-6">{member.role}</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 hover:text-cyan-300 transition-colors transform hover:scale-110"
    title={label}
  >
    <Icon size={24} className="glow-sm" />
  </a>
)

