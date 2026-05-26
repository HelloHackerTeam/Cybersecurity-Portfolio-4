import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'

export default function App(){
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const saved = window.localStorage.getItem('portfolio-theme')
    if(saved) setTheme(saved)
  },[])

  useEffect(()=>{
    document.documentElement.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('portfolio-theme', theme)
  },[theme])

  useEffect(()=>{
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const playClick = () => {
      if (audioContext.state === 'suspended') audioContext.resume()
      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()
      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(900, audioContext.currentTime)
      gain.gain.setValueAtTime(0.16, audioContext.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08)
      oscillator.connect(gain).connect(audioContext.destination)
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.08)
    }

    const handler = () => playClick()
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen font-space bg-bg text-white transition-colors duration-500 overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen show={loading} onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <>
        <ScrollProgress />
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>}
    </div>
  )
}
