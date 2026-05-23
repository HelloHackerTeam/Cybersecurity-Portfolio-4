import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiCpu, FiTerminal, FiLock, FiMap, FiDatabase, FiGlobe, FiLayers } from 'react-icons/fi'
import { FaBug } from 'react-icons/fa'

const modules = [
  { id: 'shield', icon: FiShield, title: 'Holographic Shield' },
  { id: 'cube', icon: FiLayers, title: 'Code Cubes' },
  { id: 'ai', icon: FiCpu, title: 'AI Security Panel' },
  { id: 'stream', icon: FiGlobe, title: 'Encrypted Streams' },
  { id: 'term', icon: FiTerminal, title: 'Glowing Terminal' },
  { id: 'nodes', icon: FiMap, title: 'Network Nodes' },
  { id: 'lock', icon: FiLock, title: 'Lock Icon' },
  { id: 'bug', icon: FaBug, title: 'Bug Bounty' },
  { id: 'data', icon: FiDatabase, title: 'Data Vault' }
]

export default function FloatingModules(){
  const count = modules.length
  const radius = 360 // px distance from center — keep modules clear of profile (420px)

  return (
    <div className="pointer-events-none">
      {modules.map((mod, i) => {
        const Icon = mod.icon
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2
        const x = Math.round(Math.cos(angle) * radius)
        const y = Math.round(Math.sin(angle) * radius)
        const delay = (i % 4) * 0.6

        return (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6 + (i % 3), repeat: Infinity, delay }}
            className="absolute z-0"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="glass px-3 py-2 rounded-2xl border border-white/8 backdrop-blur-sm shadow-md w-44 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black/50 text-cyan-300"><Icon size={18} /></div>
              <div className="text-sm text-gray-200 font-medium whitespace-nowrap">{mod.title}</div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
