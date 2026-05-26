import React, { useEffect, useState } from 'react'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ownerImage from '../assets/owner.jpg'
import MatrixBackground from './MatrixBackground'
import FloatingModules from './FloatingModules'

const roles = ['Cybersecurity Engineer','Ethical Hacker','VAPT Specialist','SOC Analyst']

export default function Hero(){
  const [idx,setIdx] = useState(0)
  const [displayText,setDisplayText] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)

  useEffect(()=>{
    let i = 0
    const type = () => {
      if(i <= roles[idx].length) {
        setDisplayText(roles[idx].slice(0,i))
        i++
      } else {
        setTimeout(()=>{
          setIdx((idx+1)%roles.length)
          setDisplayText('')
          i = 0
        }, 1400)
        return
      }
      setTimeout(type, 70)
    }
    type()
  },[idx])

  const handleProfileClick = () => {
    setShowGreeting(true)
    setTimeout(() => setShowGreeting(false), 2200)
  }

  return (
    <section id="top" className="relative overflow-hidden min-h-screen pt-20 sm:pt-24">
      <MatrixBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(127,90,240,0.12),_transparent_18%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex min-h-screen flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-[#081124]/70 px-4 py-2 rounded-full border border-white/10 shadow-neon">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-sm uppercase tracking-[0.3em] text-white/70">Command Center</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-orbitron tracking-tight text-white">Sanket Gopal Pawar</h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">Next-gen cybersecurity engineer focused on threat hunting, VAPT, SOC operations, and secure cloud architecture for modern enterprises.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="bg-neon text-black px-6 py-3 rounded-full font-semibold shadow-neon hover:scale-[1.02] transition">Contact Me</a>
              <a href="#projects" className="glass px-6 py-3 rounded-full border border-white/10 transition hover:bg-white/10">View Projects</a>
              <a href="/Sanket_Resume.pdf" download="Sanket_Resume.pdf" className="glass px-6 py-3 rounded-full border border-white/10 transition hover:bg-white/10">Download Resume</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-sm text-gray-300">
              <div className="glass p-4 rounded-3xl border border-white/10">Cybersecurity Engineer</div>
              <div className="glass p-4 rounded-3xl border border-white/10">Ethical Hacker</div>
              <div className="glass p-4 rounded-3xl border border-white/10">VAPT Specialist</div>
              <div className="glass p-4 rounded-3xl border border-white/10">SOC Analyst</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[640px] flex items-center justify-center">
              {/* subtle blurred backdrop + particles */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-r from-cyan-900/10 via-fuchsia-900/6 to-red-900/6 opacity-25 blur-[16px]" />
                <div className="absolute inset-0 pointer-events-none">
                  <span className="absolute left-10 top-8 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-pulse" />
                  <span className="absolute right-12 top-20 w-1.5 h-1.5 bg-red-400 rounded-full opacity-60 animate-pulse" />
                  <span className="absolute left-20 bottom-16 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-pulse" />
                </div>
              </div>

              {/* floating modules around and enlarged clean profile image */}
              <div className="relative w-full flex items-center justify-center">
                <div className="hidden md:block">
                  <FloatingModules />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }} className="relative z-10 flex items-center justify-center">
                  <div className="rounded-full p-1 bg-black/80 shadow-lg">
                    <div className="bg-[#05060a] rounded-full w-full max-w-[420px] aspect-square overflow-hidden border border-black/30">
                      <img src={ownerImage} alt="Sanket Gopal Pawar" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  {/* clean black border with subtle shadow */}
                  <div className="absolute -inset-3 rounded-full border border-black/40 opacity-90" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.55)' }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
