import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education(){
  return (
    <section id="education" className="py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(127,90,240,0.08),_transparent_25%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Education</h2>
          <p className="mt-4 text-gray-300 max-w-3xl">Academic milestones and certifications that support a strong cybersecurity foundation.</p>
          <div className="mt-10 space-y-5">
            {education.map((item,index)=>(
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:index*0.08}} key={item.school} className="glass p-6 rounded-[32px] border border-white/10 shadow-neon">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-xl font-semibold text-white">{item.school}</div>
                    <div className="text-sm text-gray-400">{item.degree}</div>
                  </div>
                  <div className="text-sm text-neon">{item.period}</div>
                </div>
                <p className="mt-4 text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
