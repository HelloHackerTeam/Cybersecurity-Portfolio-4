import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience(){
  return (
    <section id="experience" className="py-24 px-8 sm:px-16 lg:px-32">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="space-y-4">
        <h3 className="text-3xl font-orbitron text-neon">Experience</h3>
        <p className="text-gray-300 max-w-3xl">A timeline of practical cybersecurity work, team leadership, and government collaboration.</p>
      </motion.div>

      <div className="mt-10 space-y-8">
        {experience.map((item, index)=> (
          <motion.div key={item.title} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:index*0.08}} className="glass p-6 rounded-xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <div className="text-xl font-semibold text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.employer}</div>
              </div>
              <div className="text-sm text-neon">{item.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              {item.details.map(detail=> <li key={detail}>{detail}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
