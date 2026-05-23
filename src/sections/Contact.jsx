import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiTryhackme, SiBugcrowd, SiHackerone, SiHackthebox } from 'react-icons/si'
import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [status,setStatus] = useState('')

  const handleChange = (e) => setForm({...form,[e.target.name]:e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus('Please fill in all fields before sending.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sanke87tpawar@gmail.com?subject=${subject}&body=${body}`
    setStatus('Opening your email client to send the message...')
  }

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,255,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(127,90,240,0.10),_transparent_20%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Contact</h2>
              <p className="mt-4 text-gray-300 max-w-3xl">Send a message to discuss cybersecurity strategy, VAPT services, or collaboration opportunities.</p>
              <div className="mt-8 space-y-4 text-gray-300 text-sm">
                <div className="glass p-4 rounded-3xl border border-white/10 flex items-center gap-3">
                  <FaEnvelope className="text-neon text-lg" />
                  <span>sanke87tpawar@gmail.com</span>
                </div>
                <div className="glass p-4 rounded-3xl border border-white/10 flex items-center gap-3">
                  <span>Location: Mumbai, India</span>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-neon mb-4 font-semibold tracking-wider uppercase text-sm">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://tryhackme.com/p/SanketPawar" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-neon transition-colors text-white hover:text-neon group" title="TryHackMe">
                      <SiTryhackme size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://profile.hackthebox.com/profile/019d4299-0c04-7212-89e8-b93677176edf" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-[#9FEF00] transition-colors text-white hover:text-[#9FEF00] group" title="HackTheBox">
                      <SiHackthebox size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://bugcrowd.com/h/HelloHackerTeam" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-[#F26522] transition-colors text-white hover:text-[#F26522] group" title="Bugcrowd">
                      <SiBugcrowd size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://hackerone.com/hellohackerteam" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-white transition-colors text-white hover:text-white group" title="HackerOne">
                      <SiHackerone size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.youtube.com/@hello-hacker-team" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-[#FF0000] transition-colors text-white hover:text-[#FF0000] group" title="YouTube">
                      <FaYoutube size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://linkedin.com/in/sanket87pawar" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-[#0077B5] transition-colors text-white hover:text-[#0077B5] group" title="LinkedIn">
                      <FaLinkedin size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/HelloHackerTeam" target="_blank" rel="noreferrer" className="glass p-4 rounded-full border border-white/10 hover:border-white transition-colors text-white hover:text-white group" title="GitHub">
                      <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <motion.form initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-gray-300 text-sm">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full glass rounded-3xl px-5 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Your Name" />
              <label className="block text-gray-300 text-sm">Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full glass rounded-3xl px-5 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Your Email" />
              <label className="block text-gray-300 text-sm">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required className="w-full glass rounded-3xl px-5 py-4 h-40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Tell me about your requirements..."></textarea>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <button type="submit" className="bg-neon text-black px-6 py-3 rounded-full font-semibold shadow-neon hover:scale-[1.02] transition">Send Email</button>
                <span className="text-sm text-gray-300">{status}</span>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
