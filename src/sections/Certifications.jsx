import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications } from '../data/certifications'
import { SiTryhackme, SiHackthebox, SiGithub } from 'react-icons/si'
import { FaShieldAlt } from 'react-icons/fa'

const labCards = [
  {
    id: 'tryhackme',
    icon: SiTryhackme,
    title: 'TryHackMe',
    badge: 'Elite Learner',
    progress: 88,
    rank: 'Rising Star',
    stats: ['110 guided labs completed', '1200+ points', '10 active paths'],
    details: 'Hands-on lab experience on real-world attack scenarios, guided labs completion, and exploit development.'
  },
  {
    id: 'hackthebox',
    icon: SiHackthebox,
    title: 'Hack The Box',
    badge: 'Active',
    progress: 45,
    rank: 'Active Labs',
    stats: ['45 active labs', '30 retired machines', 'CTF contributor'],
    details: 'Working through Hack The Box labs — actively solving lab challenges and improving exploitation skills.'
  },
  {
    id: 'github',
    icon: SiGithub,
    title: 'GitHub',
    badge: 'New Contributor',
    progress: 14,
    rank: 'New in GitHub',
    stats: ['New account', 'Starting repo contributions', 'Learning open-source workflows'],
    details: 'New to GitHub — growing contributions with security tooling and lab repos.'
  },
  {
    id: 'security-labs',
    icon: FaShieldAlt,
    title: 'Security Labs & CTFs',
    badge: 'Challenge Master',
      progress: 84,
      rank: 'CTF Specialist',
      stats: ['12 CTFs completed', '8 writeups', '15 lab scenarios', 'Completed OverTheWire Bandit (33 levels)', '39 PortSwigger labs solved'],
      details: 'Capture-the-flag problem solving, exploit chaining, and vulnerability discovery across platform labs.'
  }
]

export default function Certifications(){
  const [active, setActive] = useState('tryhackme')
  const githubGraph = useMemo(() => Array.from({ length: 28 }, (_, index) => ({
    intensity: [0, 1, 2, 3, 4][Math.floor(Math.random() * 5)]
  })), [])

  return (
    <section id="certifications" className="py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,56,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Certifications & Labs</h2>
              <p className="mt-4 text-gray-300 max-w-3xl">Interactive achievement cards for TryHackMe, Hack The Box, GitHub, and security lab progress.</p>
              <div className="mt-4">
                <div className="text-sm text-gray-300 mb-3">Certifications:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {certifications.map(c => (
                    <li key={c.id} className="rounded-lg bg-white/5 px-4 py-2 text-sm sm:text-base md:text-lg text-gray-100 font-medium tracking-wide shadow-sm">{c.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {labCards.map(card => (
                <button key={card.id} type="button" onClick={() => setActive(card.id)} className={`rounded-full px-4 py-2 text-sm transition ${active === card.id ? 'bg-neon text-black' : 'glass text-white/80 hover:bg-white/10'}`}>
                  {card.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {labCards.map(card => {
              const Icon = card.icon
              return (
                <motion.div key={card.id} whileHover={{ y: -5 }} onClick={() => setActive(card.id)} className={`cursor-pointer rounded-[32px] border p-6 transition ${active === card.id ? 'border-red-500/40 bg-[#140108]/90 shadow-[0_0_40px_rgba(255,0,56,0.2)]' : 'border-white/10 bg-white/5 hover:border-red-500/20 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/15 text-red-300">
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-white">{card.title}</div>
                      <div className="text-sm text-gray-400">{card.rank}</div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-red-500 via-fuchsia-500 to-red-300" style={{ width: `${card.progress}%` }} />
                    </div>
                    <div className="text-sm font-semibold text-white">{card.progress}%</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gray-300">
                    {card.stats.map(stat => (
                      <span key={stat} className="rounded-full bg-white/5 px-3 py-2">{stat}</span>
                    ))}
                  </div>
                  <AnimatePresence>
                    {active === card.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-6 overflow-hidden text-gray-300">
                        <p className="text-sm leading-relaxed">{card.details}</p>
                        {card.id === 'github' && (
                          <div className="mt-5 rounded-[28px] border border-white/10 bg-[#050305] p-4">
                            <div className="grid grid-cols-7 gap-1">
                              {githubGraph.map((square, index) => (
                                <span key={index} className={`h-5 w-5 rounded-sm ${['bg-[#0f1012]','bg-red-700/70','bg-red-500/80','bg-red-400/90','bg-red-300'][square.intensity]}`} />
                              ))}
                            </div>
                            <div className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-400">GitHub contribution style activity</div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
