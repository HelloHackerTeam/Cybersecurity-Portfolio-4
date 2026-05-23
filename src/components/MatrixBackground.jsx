import React from 'react'

export default function MatrixBackground(){
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="matrix-rain" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_25%)]" />
    </div>
  )
}
