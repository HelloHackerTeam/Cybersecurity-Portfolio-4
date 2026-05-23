import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Vulnerabilities Identified', value: 320 },
  { label: 'Security Audits', value: 45 },
  { label: 'Workshops Conducted', value: 12 },
  { label: 'TryHackMe guided labs', value: 110 },
  { label: 'PortSwigger labs solved', value: 39 },
  { label: 'Hack The Box active labs', value: 45 }
]

export default function About(){
  return (
    <section id="about" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(57,255,20,0.08),_transparent_30%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="max-w-4xl">
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-5xl font-orbitron text-neon">About</motion.h2>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}} className="mt-6 space-y-5 text-gray-300 max-w-3xl">
              <p className="text-lg sm:text-xl leading-relaxed">
                My journey into cybersecurity started after some of my online accounts and platforms, including my GitHub and Hack The Box profiles, were compromised.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                That incident completely changed my perspective on digital security and made me realize how important cybersecurity is in today’s world. Instead of giving up, I decided to understand how attacks happen, how vulnerabilities are exploited, and how systems can be secured against real-world threats.
              </p>
              <div className="rounded-[28px] border border-red-500/20 bg-[#0d0408]/80 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-red-300 mb-4">Core learning path</p>
                <ul className="space-y-3 text-sm leading-6 text-gray-300">
                  <li>Rebuilt stronger with ethics-first hacking and penetration testing.</li>
                  <li>Focused on security operations, threat hunting, and incident response.</li>
                  <li>Practiced continuously on real labs, CTFs, and online security platforms.</li>
                  <li>Now committed to making the digital world safer with proactive defense.</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
            <div className="space-y-5">
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} className="glass p-6 rounded-[30px] border border-white/5 shadow-neon">
                <div className="text-sm uppercase tracking-[0.3em] text-neon mb-3">Cyber Command</div>
                <div className="text-white text-2xl font-semibold">Leading the next wave of secure infrastructure with advanced threat defense and hacker-aware strategies.</div>
              </motion.div>
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:0.1}} className="grid grid-cols-2 gap-4">
                <FloatingCard label="Network Security" description="Real-time monitoring, segmentation, and intrusion analysis." />
                <FloatingCard label="Threat Hunting" description="Proactive detection, SIEM orchestration, and SOC readiness." />
                <FloatingCard label="Web Security" description="OWASP-driven hardening and penetration testing guidance." />
                <FloatingCard label="Incident Response" description="Structured playbooks, containment, and recovery workflows." />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat,index)=>(
                <motion.div key={stat.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1 * index}} className="glass p-6 rounded-[28px] border border-white/10 shadow-neon">
                  {stat.value ? (
                    <div className="text-4xl font-orbitron text-neon">{stat.value}+</div>
                  ) : (
                    <div className="h-12" />
                  )}
                  <div className="mt-3 text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({label, description}){
  return (
    <div className="glass p-5 rounded-[28px] border border-white/10 hover:-translate-y-1 transition-transform duration-300">
      <div className="text-sm uppercase tracking-[0.3em] text-neon mb-2">{label}</div>
      <div className="text-sm text-gray-300 leading-relaxed">{description}</div>
    </div>
  )
}
