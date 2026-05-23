import React, { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { SiPython, SiReact, SiAndroid, SiHackthebox, SiCloudflare } from 'react-icons/si'
import { FaNetworkWired } from 'react-icons/fa'

const categories = ['All', 'Security Tools', 'Web Security', 'Python Automation', 'Threat Analysis', 'Mobile Security']
const iconMap = {
  Python: SiPython,
  Nmap: FaNetworkWired,
  React: SiReact,
  Android: SiAndroid,
  Cloud: SiCloudflare,
  HTB: SiHackthebox
}

export default function Projects(){
  const [selected, setSelected] = useState('All')
  const filtered = useMemo(() => selected === 'All' ? projects : projects.filter(project => project.category === selected), [selected])

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,56,0.1),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Projects</h2>
              <p className="mt-4 text-gray-300 max-w-3xl">Animated security-focused project cards with glowing borders, tech stack chips, and DM-based live access.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button key={category} type="button" onClick={()=> setSelected(category)} className={`px-4 py-2 rounded-full text-sm transition ${selected === category ? 'bg-neon text-black' : 'glass text-white/80 hover:bg-white/10'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {filtered.map(project => (
              <motion.div key={project.id} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050608]/80 p-6 shadow-[0_0_35px_rgba(255,0,56,0.18)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(255,0,56,0.35)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-fuchsia-500 to-red-400" />
                <div className="relative">
                  <div className="h-48 rounded-3xl border border-white/10 bg-gradient-to-br from-[#080208] to-[#12020d] mb-5 flex items-center justify-center text-sm uppercase tracking-[0.3em] text-neon">{project.type}</div>
                  <div className="text-xl font-semibold text-white mb-3">{project.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed min-h-[72px]">{project.desc}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map(tech => {
                      const Icon = iconMap[tech] || null
                      return (
                        <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-200 shadow-[0_0_14px_rgba(255,0,56,0.12)]">
                          {Icon ? <Icon className="text-[0.85rem] text-red-300" /> : null}
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="glass px-4 py-3 rounded-full text-sm text-center transition hover:bg-white/10">GitHub</a>
                    <a href="https://linkedin.com/in/sanket87pawar" target="_blank" rel="noreferrer" className="bg-neon text-black px-4 py-3 rounded-full text-sm font-semibold text-center transition hover:scale-[1.02]">DM me for project</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
