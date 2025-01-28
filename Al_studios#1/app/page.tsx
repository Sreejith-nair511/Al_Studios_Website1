import Link from "next/link"
import dynamic from "next/dynamic"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import CompanyDashboard from "./components/CompanyDashboard"
import TeamSlider from "./components/TeamSlider"
import GameCarousel from "./components/GameCarousel"
import MusicPlayer from "./components/MusicPlayer"
import JoinCommunity from "./components/JoinCommunity"
import NewsletterPromo from "./components/NewsletterPromo"
import AnimatedSection from "./components/AnimatedSection"

const Map = dynamic(() => import("./components/Map"), { ssr: false })

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 smooth-scroll">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-press-start-2p mb-6 text-white glow-text">Rethink Gaming</h1>
        <p className="text-xl mb-8 text-purple-300">Welcome to the future of interactive entertainment</p>
        <Link href="/play" className="retro-button">
          Start Playing
        </Link>
      </section>

      <section className="my-20">
        <NewsletterPromo />
      </section>

      <section className="my-20 retro-panel">
        <h2 className="text-3xl font-press-start-2p mb-6 text-center text-white glow-text">About AL Studios</h2>
        <p className="text-lg mb-4 text-purple-300">
          Welcome to ALStudios, where nostalgia meets innovation! We are passionate creators dedicated to developing
          retro-inspired games that capture the charm of classic gaming while delivering a fresh, engaging experience
          for modern players.
        </p>
        <p className="text-lg mb-4 text-purple-300">
          Our team at ALStudios combines a love for pixel art, 8-bit and 16-bit aesthetics, and timeless gameplay
          mechanics to craft immersive worlds that bring back the magic of gaming's golden era. Whether you're a
          lifelong gamer reliving cherished memories or a newcomer exploring retro-style adventures, our games are
          designed to spark joy, challenge your skills, and keep you coming back for more.
        </p>
        <p className="text-lg text-purple-300">
          At ALStudios, we believe in the power of simplicity, creativity, and storytelling. Join us on this journey to
          celebrate the past while shaping the future of retro gaming.
        </p>
      </section>

      <CompanyDashboard />

      <AnimatedSection className="my-20 overflow-hidden">
        <h2 className="text-3xl font-press-start-2p mb-6 text-center text-white glow-text">Our Games</h2>
        <GameCarousel />
      </AnimatedSection>

      <section className="my-20 overflow-hidden">
        <h2 className="text-3xl font-press-start-2p mb-6 text-center text-white glow-text">Meet Our Team</h2>
        <div className="relative">
          <div className="sliding-panel">
            <TeamSlider />
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-3xl font-press-start-2p mb-6 text-center text-white glow-text">Get in Touch</h2>
        <ContactInfo />
        <ContactForm />
      </section>

      <section className="my-20">
        <JoinCommunity />
      </section>

      <section className="my-20">
        <h2 className="text-3xl font-press-start-2p mb-6 text-center text-white glow-text">Find Us</h2>
        <div className="retro-panel overflow-hidden">
          <Map />
        </div>
      </section>

      <MusicPlayer />
    </div>
  )
}

