import React, { useEffect, useState } from 'react'

export default function ScrollProgress(){
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setWidth(progress)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
      <div className="h-full bg-neon transition-all duration-150" style={{ width: `${width}%` }} />
    </div>
  )
}
