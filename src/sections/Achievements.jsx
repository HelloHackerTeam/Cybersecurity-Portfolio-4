import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { achievements } from '../data/achievements'

export default function Achievements(){
  const [active, setActive] = useState(null)

  return (
    <section id="achievements" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(127,90,240,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(0,245,255,0.08),_transparent_25%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Achievements</h2>
            <p className="mt-4 text-gray-300 max-w-3xl">A premium showcase of awards, hackathon leadership, and recognition from cybersecurity collaborations.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {achievements.map((award, index) => (
              <motion.button key={award.id} whileHover={{ y: -5 }} onClick={()=> setActive(award.id)} className="glass text-left p-6 rounded-[32px] border border-white/10 shadow-neon transition-transform">
                <div className="text-sm uppercase tracking-[0.35em] text-neon mb-3">Achievement</div>
                <div className="text-xl font-semibold text-white">{award.title}</div>
                <div className="mt-4 text-gray-300 text-sm leading-relaxed">{award.summary}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl glass p-8 rounded-[32px] border border-white/10 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-2xl font-semibold text-white pr-8">{achievements.find(item=>item.id===active).title}</div>
                <button onClick={()=> setActive(null)} className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/50 hover:text-neon text-2xl transition-colors">&times;</button>
              </div>
              <div className="mt-6 text-gray-300 text-lg">
                <p className="mb-6">{achievements.find(item=>item.id===active).summary}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
