import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">
      <div className="glass p-10 rounded-[32px] border border-white/10 text-center max-w-lg">
        <h1 className="text-5xl font-orbitron text-neon">404</h1>
        <p className="mt-4 text-gray-300">Page not found. Return to the portfolio command center.</p>
        <Link to="/" className="inline-flex mt-8 px-6 py-3 bg-neon text-black rounded-full font-semibold">Go Home</Link>
      </div>
    </div>
  )
}
