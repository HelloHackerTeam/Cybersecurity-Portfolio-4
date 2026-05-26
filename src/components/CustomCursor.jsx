import React, { useEffect, useState } from 'react'

export default function CustomCursor(){
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(()=>{
    if(typeof window === 'undefined') return
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches
    if(isTouch) return

    setEnabled(true)
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const enter = () => setActive(true)
    const leave = () => setActive(false)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
    }
  },[])

  if(!enabled) return null

  return (
    <div className="pointer-events-none">
      <div className={`custom-cursor-ring ${active ? 'opacity-100' : 'opacity-0'}`} style={{ left: position.x, top: position.y }} />
      <div className="custom-cursor-dot" style={{ left: position.x, top: position.y }} />
    </div>
  )
}
