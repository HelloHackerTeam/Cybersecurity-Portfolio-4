import React, { useState } from 'react'
import { FiGithub, FiMail, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { SiLinkedin, SiTryhackme, SiYoutube, SiHackthebox, SiHackerone, SiBugcrowd } from 'react-icons/si'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar({ theme, setTheme }){
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-10">
      <div className="glass px-4 py-3 rounded-3xl flex flex-wrap items-center justify-between gap-3 backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-neon font-orbitron text-base sm:text-lg">Sanket G. Pawar</div>
          <button onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')} className="text-neon hover:text-white transition">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} /> }
          </button>
        </div>

        <button onClick={() => setMenuOpen(prev => !prev)} className="sm:hidden text-neon hover:text-white transition p-2 rounded-xl glass border border-white/10">
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className="hidden sm:flex flex-wrap gap-2 items-center">
          {links.map(link => (
            <a key={link.href} href={link.href} className="glass px-3 py-2 rounded text-sm transition hover:bg-white/10">{link.label}</a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <SocialIcon href="https://github.com/HelloHackerTeam" label="GitHub"><FiGithub size={18} /></SocialIcon>
          <SocialIcon href="https://linkedin.com/in/sanket87pawar" label="LinkedIn"><SiLinkedin size={18} /></SocialIcon>
          <SocialIcon href="https://tryhackme.com/p/SanketPawar" label="TryHackMe"><SiTryhackme size={18} /></SocialIcon>
          <SocialIcon href="https://profile.hackthebox.com/profile/019d4299-0c04-7212-89e8-b93677176edf" label="Hack The Box"><SiHackthebox size={18} /></SocialIcon>
          <SocialIcon href="https://hackerone.com/hellohackerteam" label="HackerOne"><SiHackerone size={18} /></SocialIcon>
          <SocialIcon href="https://bugcrowd.com/h/HelloHackerTeam" label="BugCrowd"><SiBugcrowd size={18} /></SocialIcon>
          <SocialIcon href="https://www.youtube.com/@hello-hacker-team" label="YouTube"><SiYoutube size={18} /></SocialIcon>
          <SocialIcon href="mailto:sanke87tpawar@gmail.com" label="Email"><FiMail size={18} /></SocialIcon>
        </div>
      </div>

      {menuOpen && (
        <div className="glass mt-2 rounded-3xl border border-white/10 backdrop-blur-3xl p-4 sm:hidden">
          <div className="flex flex-col gap-3">
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="glass px-4 py-3 rounded-2xl text-base text-white transition hover:bg-white/10">{link.label}</a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href="https://github.com/HelloHackerTeam" target="_blank" rel="noreferrer" className="glass px-4 py-3 rounded-2xl text-sm text-white text-center transition hover:bg-white/10">GitHub</a>
              <a href="mailto:sanke87tpawar@gmail.com" className="glass px-4 py-3 rounded-2xl text-sm text-white text-center transition hover:bg-white/10">Email</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function SocialIcon({ href, label, children }){
  return (
    <div className="relative group">
      <a href={href} target="_blank" rel="noreferrer" className="text-neon hover:text-white transition">{children}</a>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">{label}</span>
    </div>
  )
}
