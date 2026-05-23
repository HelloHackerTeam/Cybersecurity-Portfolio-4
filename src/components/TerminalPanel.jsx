import React, { useEffect, useState } from 'react'

const lines = []

export default function TerminalPanel(){
  const [display, setDisplay] = useState([])
  const [line, setLine] = useState(0)

  useEffect(()=>{
    if (!lines || lines.length === 0) return
    const queue = []
    const addLine = (text, index) => {
      let i = 0
      const interval = setInterval(()=>{
        if(i <= text.length){
          queue[index] = text.slice(0, i)
          setDisplay([...queue])
          i += 1
        } else {
          clearInterval(interval)
          setTimeout(()=>{
            if(index < lines.length - 1) addLine(lines[index + 1], index + 1)
          }, 900)
        }
      }, 45)
    }
    addLine(lines[0], 0)
  },[])

  return (
    <div className="glass border border-white/10 rounded-[30px] bg-[#050816]/90 px-5 py-4 text-[0.95rem] text-white shadow-neon">
      <div className="flex items-center gap-2 text-xs uppercase text-neon tracking-[0.3em] mb-3">
        <span className="w-2 h-2 rounded-full bg-[#39ff14]" /> Security Terminal
      </div>
      <div className="space-y-2 font-mono text-sm leading-6 text-green-300/90">
        {display.map((text,index)=>(
          <div key={index} className="flex items-center gap-2">
            <span className="text-neon">&gt;</span><span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
