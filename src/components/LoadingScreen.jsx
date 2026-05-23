import React, { useEffect, useRef, useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import '../styles/cinematic-intro.css'

export default function LoadingScreen({ show, onComplete }){
  const [hasInteracted, setHasInteracted] = useState(false)
  const container = useRef(null)
  const audioContext = useRef(null)
  const activeAudio = useRef([])

  // Generate a block of realistic-looking scrolling server code
  const scrollingCode = useMemo(() => {
    return Array(60).fill(0).map((_, i) => 
      `[${Math.floor(Math.random()*9000)+1000}.${Math.floor(Math.random()*900)+100}] kernel: mem_init: allocating ${Math.floor(Math.random()*8000)}k pages at 0x000${Math.random().toString(16).substr(2, 6)}... OK\n`
    ).join('')
  }, [])

  const createAudioContext = () => {
    if(audioContext.current) return audioContext.current
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    audioContext.current = ctx
    return ctx
  }

  const stopAllAudio = () => {
    activeAudio.current.forEach(node => {
      try { node.stop() } catch(e){}
    })
    activeAudio.current = []
  }

  const playCRTHum = () => {
    const ctx = createAudioContext()
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(60, ctx.currentTime) // 60Hz hum
    
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.01, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 1)
    gain.gain.setValueAtTime(0.05, ctx.currentTime + 5)
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 6)

    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 6)
    activeAudio.current.push(osc)
  }

  const playKeyboardClick = () => {
    const ctx = createAudioContext()
    const bufferSize = ctx.sampleRate * 0.05 // 50ms click
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for(let i=0; i<bufferSize; i++) {
      data[i] = Math.random() * 2 - 1
    }
    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 2500 + Math.random() * 1000

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

    noise.connect(filter).connect(gain).connect(ctx.destination)
    noise.start()
    activeAudio.current.push(noise)
  }

  const playTypingBurst = (duration = 0.5) => {
    let elapsed = 0;
    const interval = setInterval(() => {
      playKeyboardClick()
      elapsed += 0.05
      if(elapsed >= duration) clearInterval(interval)
    }, 40 + Math.random() * 20)
  }

  const playLowBuzz = () => {
    const ctx = createAudioContext()
    const osc = ctx.createOscillator()
    osc.type = 'square'
    osc.frequency.setValueAtTime(45, ctx.currentTime)
    
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(200, ctx.currentTime)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1)

    osc.connect(filter).connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 1)
    activeAudio.current.push(osc)
  }

  const playAuthBeep = () => {
    const ctx = createAudioContext()
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)

    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.5)
    activeAudio.current.push(osc)
  }

  useEffect(()=>{
    if(!show || !hasInteracted) return

    createAudioContext()

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Reset
      gsap.set('.seq-1, .seq-2, .seq-3, .seq-4, .seq-5', { display: 'none', opacity: 0 })
      gsap.set('.type-line', { width: 0 })
      gsap.set('.scrolling-code', { y: 0 })

      // 0s - 1s
      tl.set('.seq-1', { display: 'block', opacity: 1 }, 0)
        .call(() => playCRTHum(), null, 0)
        .call(() => playTypingBurst(0.8), null, 0.1)
        .to('#line-0', { width: '100%', duration: 0.8, ease: 'steps(30)' }, 0.1)

      // 1s - 2s
      tl.set('.seq-2', { display: 'block', opacity: 1 }, 1.0)
        .call(() => playTypingBurst(0.2), null, 1.0)
        .to('#line-1', { width: '100%', duration: 0.2, ease: 'steps(20)' }, 1.0)
        .call(() => playTypingBurst(0.2), null, 1.2)
        .to('#line-2', { width: '100%', duration: 0.2, ease: 'steps(20)' }, 1.2)
        .call(() => playTypingBurst(0.2), null, 1.4)
        .to('#line-3', { width: '100%', duration: 0.2, ease: 'steps(20)' }, 1.4)
        .call(() => playTypingBurst(0.2), null, 1.6)
        .to('#line-4', { width: '100%', duration: 0.2, ease: 'steps(20)' }, 1.6)

      // 2s - 3s (Glitches, ACCESS DENIED)
      tl.set('.seq-1, .seq-2', { opacity: 0.3 }, 2.0)
        .set('.seq-3', { display: 'flex', opacity: 1 }, 2.0)
        .call(() => {
          document.querySelector('.cinematic-intro-container').classList.add('subtle-glitch')
          playLowBuzz()
        }, null, 2.0)

      // 3s - 4.5s (Transition, override)
      tl.set('.seq-1, .seq-2, .seq-3', { display: 'none', opacity: 0 }, 3.0)
        .set('.seq-4', { display: 'block', opacity: 1 }, 3.0)
        .to('.scrolling-code', { y: -300, duration: 3.0, ease: 'linear' }, 3.0)
        .call(() => {
          document.querySelector('.cinematic-intro-container').classList.remove('subtle-glitch')
          playTypingBurst(0.5)
        }, null, 3.0)
        .to('#line-5', { width: '100%', duration: 0.5, ease: 'steps(25)' }, 3.0)
        .call(() => playTypingBurst(0.5), null, 3.6)
        .to('#line-6', { width: '100%', duration: 0.5, ease: 'steps(25)' }, 3.6)

      // 4.5s - 6s (ACCESS AUTHORIZED)
      tl.set('.seq-4', { display: 'none', opacity: 0 }, 4.5)
        .set('.seq-5', { display: 'flex', opacity: 1 }, 4.5)
        .call(() => playAuthBeep(), null, 4.5)

      // END INTRO: 6.0s
      tl.to('.cinematic-intro-container', { opacity: 0, duration: 0.5 }, 5.5)
        .call(() => {
          stopAllAudio()
          if(onComplete) onComplete()
        }, null, 6.0)

      return () => {
        tl.kill()
        stopAllAudio()
      }
    }, container)

    return () => ctx.revert()
  }, [show, hasInteracted, onComplete])

  return (
    <AnimatePresence>
      {show && !hasInteracted && (
        <motion.div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505] cursor-pointer" onClick={() => setHasInteracted(true)} exit={{ opacity: 0 }}>
          <div className="text-[#E8E8E8] font-mono text-xl animate-pulse hover:text-[#4DA6FF] transition-colors duration-300">
            [ CLICK TO INITIALIZE TERMINAL ]
          </div>
        </motion.div>
      )}
      {show && hasInteracted && (
        <motion.div ref={container} className="cinematic-intro-container" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          
          <div className="scrolling-code">{scrollingCode}</div>
          <div className="intro-noise" />
          <div className="intro-scanlines" />

          {/* Phase 1: 0-1s */}
          <div className="seq-1 absolute top-8 left-8 md:top-12 md:left-12 font-mono text-sm md:text-base">
             <div id="line-0" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8]">
               <span className="text-[#7CFF7C]">root@system:~$</span> initializing_secure_connection<span className="terminal-cursor"></span>
             </div>
          </div>

          {/* Phase 2: 1-2s */}
          <div className="seq-2 absolute top-16 left-8 md:top-20 md:left-12 font-mono text-sm md:text-base mt-2">
             <div id="line-1" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8]">
               &gt; checking permissions...
             </div>
             <div id="line-2" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8] mt-1">
               &gt; loading encrypted modules...
             </div>
             <div id="line-3" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8] mt-1">
               &gt; authentication request pending...
             </div>
             <div id="line-4" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8] mt-1">
               &gt; network integrity verified...<span className="terminal-cursor"></span>
             </div>
          </div>

          {/* Phase 3: 2-3s */}
          <div className="seq-3 warning-overlay">
              <div className="warning-text">ACCESS DENIED</div>
          </div>

          {/* Phase 4: 3-4.5s */}
          <div className="seq-4 absolute top-8 left-8 md:top-12 md:left-12 font-mono text-sm md:text-base">
             <div id="line-5" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8]">
               welcome_sanket_pawar.sys
             </div>
             <div id="line-6" className="type-line overflow-hidden whitespace-nowrap text-[#E8E8E8] mt-2">
               permission override detected<span className="terminal-cursor"></span>
             </div>
          </div>

          {/* Phase 5: 4.5-6s */}
          <div className="seq-5 success-overlay">
              <div className="success-text">ACCESS AUTHORIZED<span className="terminal-cursor blue"></span></div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
