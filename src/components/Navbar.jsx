import React from 'react'
import { FiGithub, FiMail, FiMoon, FiSun } from 'react-icons/fi'
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
  return (
    <nav className="fixed w-full z-50 top-4 px-6 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
      <div className="glass px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-xl border border-white/10">
        <div className="text-neon font-orbitron text-base sm:text-lg">Sanket G. Pawar</div>
        <button onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')} className="text-neon hover:text-white transition">
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} /> }
        </button>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {links.map(link => (
          <a key={link.href} href={link.href} className="glass px-3 py-2 rounded text-sm transition hover:bg-white/10">{link.label}</a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative group">
          <a href="https://github.com/HelloHackerTeam" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><FiGithub size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">GitHub</span>
        </div>

        <div className="relative group">
          <a href="https://linkedin.com/in/sanket87pawar" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiLinkedin size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">LinkedIn</span>
        </div>

        <div className="relative group">
          <a href="https://tryhackme.com/p/SanketPawar" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiTryhackme size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">TryHackMe</span>
        </div>

        <div className="relative group">
          <a href="https://profile.hackthebox.com/profile/019d4299-0c04-7212-89e8-b93677176edf" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiHackthebox size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">Hack The Box</span>
        </div>

        <div className="relative group">
          <a href="https://hackerone.com/hellohackerteam" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiHackerone size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">HackerOne</span>
        </div>

        <div className="relative group">
          <a href="https://bugcrowd.com/h/HelloHackerTeam" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiBugcrowd size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">BugCrowd</span>
        </div>

        <div className="relative group">
          <a href="https://www.youtube.com/@hello-hacker-team" target="_blank" rel="noreferrer" className="text-neon hover:text-white transition"><SiYoutube size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">YouTube</span>
        </div>

        <div className="relative group">
          <a href="mailto:sanke87tpawar@gmail.com" className="text-neon hover:text-white transition"><FiMail size={18} /></a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white pointer-events-none">Email</span>
        </div>
      </div>
    </nav>
  )
}
