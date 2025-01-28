"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Home, ShoppingBag, Users, Gamepad2, Tv, User, Sun, Moon, Newspaper, Menu, X } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/60 backdrop-blur-sm border-b border-cyan-600/30 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20same1%20-xPI9ee8bVo7NWJWutvbt7215gr5sel.png"
              alt="AL Studios"
              width={40}
              height={40}
              className="rounded glow-sm"
            />
            <span className="font-press-start-2p text-xl text-cyan-400 glow-text hidden sm:inline">AL Studios</span>
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-cyan-400 md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <NavItems />
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col space-y-4">
              <NavItems mobile />
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavItems = ({ mobile }: { mobile?: boolean }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <NavLink href="/" icon={Home} text="Home" mobile={mobile} />
      <NavLink href="/shop" icon={ShoppingBag} text="Shop" mobile={mobile} />
      <NavLink href="/team" icon={Users} text="Team" mobile={mobile} />
      <NavLink href="/play" icon={Gamepad2} text="Play" mobile={mobile} />
      <NavLink href="/emulation" icon={Tv} text="Emulation" mobile={mobile} />
      <NavLink href="/newsletter" icon={Newspaper} text="Newsletter" mobile={mobile} />
      <NavLink href="/account" icon={User} text="Account" mobile={mobile} />
      <li>
        <button
          onClick={toggleTheme}
          className={`flex items-center text-cyan-400 hover:text-cyan-300 transition-colors ${
            mobile ? "w-full p-2" : ""
          }`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          {mobile && <span className="ml-2">Toggle Theme</span>}
        </button>
      </li>
    </>
  )
}

const NavLink = ({
  href,
  icon: Icon,
  text,
  mobile,
}: {
  href: string
  icon: any
  text: string
  mobile?: boolean
}) => (
  <li>
    <Link
      href={href}
      className={`flex items-center text-cyan-400 hover:text-cyan-300 transition-colors ${mobile ? "w-full p-2" : ""}`}
    >
      <Icon size={20} className="glow-sm" />
      <span className={`${mobile ? "ml-2" : "ml-2 hidden lg:inline"}`}>{text}</span>
    </Link>
  </li>
)

export default Header

