import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Footer(){
  return (
    <footer className="py-10 px-6 sm:px-10 border-t border-white/10 text-center text-sm text-gray-400">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="text-white">© {new Date().getFullYear()} Sanket Gopal Pawar</div>
        <div>Designed for security leaders, ethical hackers and future-ready teams.</div>
        <div className="flex flex-wrap justify-center gap-4 text-neon">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="#top" className="inline-flex items-center gap-2 text-neon hover:text-white transition"><FiArrowUpRight />Back to top</a>
      </div>
    </footer>
  )
}
