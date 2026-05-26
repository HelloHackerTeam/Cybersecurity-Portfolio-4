import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import vault1 from '../assets/vault-1.jpg'
import vault2 from '../assets/vault-2.jpg'
import vault3 from '../assets/vault-3.jpg'
import vault4 from '../assets/vault-4.jpg'
import vault5 from '../assets/vault-5.jpg'
import vault6 from '../assets/vault-6.jpg'
import vault7 from '../assets/vault-7.jpg'
import vault8 from '../assets/vault-8.jpg'
import vault9 from '../assets/vault-9.jpg'
import vault10 from '../assets/vault-10.jpg'
import vault11 from '../assets/vault-11.jpg'
import vault12 from '../assets/vault-12.jpg'

const galleryImages = [
  // Group 1: Law Enforcement & High Impact
  { id: 9, src: vault9, title: "Official Police Headquarters Engagement" },
  { id: 1, src: vault1, title: "Police Commendation & Recognition" },
  { id: 10, src: vault10, title: "Law Enforcement Cyber Training Session" },
  { id: 8, src: vault8, title: "Mobile Security App Demonstration" },
  { id: 6, src: vault6, title: "Law Enforcement Collaboration" },
  
  // Group 2: Public Speaking & Expertise
  { id: 2, src: vault2, title: "Cybersecurity Keynote Address" },
  { id: 4, src: vault4, title: "Information Security Seminar" },
  { id: 3, src: vault3, title: "Live Threat Demonstration" },
  
  // Group 3: Leadership & Mentorship
  { id: 7, src: vault7, title: "Student Council Leadership Award" },
  { id: 12, src: vault12, title: "Student Council Team Assembly" },
  { id: 5, src: vault5, title: "Student Mentorship & Interaction" },
  { id: 11, src: vault11, title: "Team Event Registration Desk" },
]

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,12,44,0.12),_transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(255,0,52,0.12),_transparent_25%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="max-w-4xl">
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-5xl font-orbitron text-neon">Photo Vault</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}} className="mt-4 text-gray-300 max-w-3xl">
              A curated collection of visual snapshots from my cybersecurity journey, seminars, and real-world operations.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {galleryImages.map((img) => (
              <motion.div 
                key={img.id} 
                whileHover={{ scale: 1.02 }} 
                onClick={() => setSelectedImage(img)}
                className="glass overflow-hidden rounded-[28px] border border-white/10 shadow-neon flex flex-col cursor-pointer hover:border-[#4DA6FF]/50 transition-colors duration-300"
              >
                <img src={img.src} alt={img.title} className="h-60 sm:h-72 w-full object-cover" />
                <div className="px-5 py-4 text-sm font-mono tracking-wide text-[#E8E8E8] bg-black/60 border-t border-white/5">
                  &gt; {img.title}
                </div>
              </motion.div>
             ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] rounded-xl border border-white/10 shadow-[0_0_30px_rgba(77,166,255,0.15)] object-contain"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 left-0 right-0 text-center text-[#E8E8E8] font-mono tracking-widest text-base sm:text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >
               &gt; {selectedImage.title}
            </motion.div>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
