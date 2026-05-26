import React, { useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt, FaTools, FaMobileAlt, FaWindows, FaCode, FaUserShield, FaAndroid } from 'react-icons/fa'

const categories = [
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    icon: FaShieldAlt,
    terminal: 'sudo ./vapt-suite --scan target.local',
    skills: [
      { name: 'VAPT', level: 92 },
      { name: 'Penetration Testing', level: 88 },
      { name: 'Web App Security', level: 90 },
      { name: 'Network Security', level: 84 },
      { name: 'Mobile App Security', level: 78 },
      { name: 'Active Directory Security', level: 82 },
      { name: 'SOC Operations', level: 86 },
      { name: 'OWASP Top 10', level: 94 },
      { name: 'OSINT & Digital Forensics', level: 80 }
    ]
  },
  {
    id: 'tools',
    label: 'Web & Network Security Tools',
    icon: FaTools,
    terminal: 'nmap -A -sV --script vuln 10.10.10.5',
    skills: [
      { name: 'Nmap', level: 95 },
      { name: 'Burp Suite', level: 90 },
      { name: 'Wireshark', level: 88 },
      { name: 'Metasploit', level: 82 },
      { name: 'Nessus', level: 78 },
      { name: 'OpenVAS', level: 76 },
      { name: 'Nikto', level: 84 },
      { name: 'Gobuster', level: 88 },
      { name: 'SQLMap', level: 91 },
      { name: 'Hydra', level: 75 },
      { name: 'Aircrack-ng', level: 70 },
      { name: 'Netcat', level: 92 }
    ]
  },
  {
    id: 'mobile-pen',
    label: 'Mobile Penetration Testing',
    icon: FaMobileAlt,
    terminal: 'mobilescan --app ./target.apk',
    skills: [
      { name: 'Android Security Testing', level: 86 },
      { name: 'Mobile App Pen Test', level: 84 },
      { name: 'APK Analysis', level: 82 },
      { name: 'Static & Dynamic Testing', level: 80 },
      { name: 'API Security Testing', level: 78 }
    ]
  },
  {
    id: 'mobile-tools',
    label: 'Mobile Security Tools',
    icon: FaAndroid,
    terminal: 'frida -U -f com.target.app --no-pause',
    skills: [
      { name: 'MobSF', level: 88 },
      { name: 'Frida', level: 82 },
      { name: 'JADX', level: 80 },
      { name: 'APKTool', level: 84 },
      { name: 'ADB', level: 90 },
      { name: 'Objection', level: 78 },
      { name: 'Genymotion', level: 73 }
    ]
  },
  {
    id: 'ad-windows',
    label: 'Active Directory & Windows Security',
    icon: FaWindows,
    terminal: 'bloodhound-python -u admin -p Passw0rd',
    skills: [
      { name: 'AD Enumeration', level: 91 },
      { name: 'Privilege Escalation', level: 86 },
      { name: 'Windows Assessment', level: 84 },
      { name: 'Kerberos Attacks', level: 75 },
      { name: 'SMB Enumeration', level: 88 }
    ]
  },
  {
    id: 'ad-tools',
    label: 'AD Security Tools',
    icon: FaUserShield,
    terminal: 'crackmapexec smb 10.10.10.10 -u users.txt -p pass.txt',
    skills: [
      { name: 'BloodHound', level: 92 },
      { name: 'CrackMapExec', level: 89 },
      { name: 'Impacket', level: 85 },
      { name: 'Mimikatz', level: 80 },
      { name: 'Responder', level: 86 },
      { name: 'Evil-WinRM', level: 82 }
    ]
  },
  {
    id: 'programming',
    label: 'Programming Languages',
    icon: FaCode,
    terminal: 'python3 exploit.py --target 10.10.10.5',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Bash', level: 88 },
      { name: 'JavaScript', level: 84 },
      { name: 'HTML', level: 75 },
      { name: 'CSS', level: 72 },
      { name: 'GitHub', level: 56 }
    ]
  }
]

export default function Skills(){
  const [active, setActive] = useState('cybersecurity')
  const points = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    x: (Math.random() - 0.5) * 4,
    y: (Math.random() - 0.5) * 4,
    z: (Math.random() - 0.5) * 4,
    color: i % 2 === 0 ? '#ff0038' : '#ffffff'
  })), [])

  return (
    <section id="skills" className="relative py-28 px-6 sm:px-10 lg:px-14">
      <div className="glass border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,56,0.14),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_18%)]" />
        <div className="relative px-6 py-14 lg:px-14 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-orbitron text-neon">Skills</h2>
              <p className="mt-4 text-gray-300 max-w-3xl">Interactive skill categories with animated glow, badges, terminal prompts, and detailed subskill views for your cybersecurity expertise.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center text-sm text-white/80 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map(category => (
                <div key={category.id} className="glass p-4 rounded-3xl border border-white/10 hover:border-red-500/40 transition">
                  <category.icon className="mx-auto text-red-400 text-2xl" />
                  <div className="mt-3 font-semibold text-white">{category.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  whileHover={{ y: -3 }}
                  className={`group relative text-left overflow-hidden rounded-[32px] border p-5 transition w-full ${active === category.id ? 'border-red-500 bg-[#120105]/80 shadow-[0_0_30px_rgba(255,0,56,0.22)]' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 min-w-[3rem] items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                      <category.icon className="text-xl" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-semibold text-white">{category.label}</div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">{category.skills.length} subskills</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.slice(0, 4).map(skill => (
                      <span key={skill.name} className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] text-gray-300">{skill.name}</span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="glass p-6 rounded-[32px] border border-white/10 shadow-neon bg-[#060306]/90 relative z-10">
              <AnimatePresence mode="wait">
                {categories.filter(category => category.id === active).map(category => (
                  <motion.div key={category.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-orbitron text-white">{category.label}</h3>
                        <p className="mt-2 text-gray-300 max-w-xl">Detailed tools, glowing skill chips, and real command prompts that show your advanced mastery.</p>
                      </div>
                      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-300">Active</div>
                    </div>

                    <div className="mt-8 space-y-5">
                      <div className="space-y-3">
                        {category.skills.map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm text-gray-300">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <motion.div className="h-full rounded-full bg-gradient-to-r from-red-500 via-fuchsia-500 to-red-300" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 0.7, delay: index * 0.05 }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[28px] border border-red-500/20 bg-[#0d0408]/90 p-5 text-sm text-gray-200">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-red-300 mb-3">terminal</div>
                        <div className="font-mono text-[0.95rem] leading-6 text-gray-100">{category.terminal}</div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {category.skills.map(skill => (
                          <span key={skill.name} className="glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-200 bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,0,56,0.12)]">{skill.name}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillSphere({ points }){
  const ref = React.useRef()
  useFrame(() => {
    if(ref.current) ref.current.rotation.y += 0.002
  })

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshStandardMaterial color="#ff0038" transparent opacity={0.08} />
      </mesh>
      {points.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={point.color} emissive={point.color} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.7, 0.008, 16, 120]} />
        <meshBasicMaterial color="#ff0038" transparent opacity={0.14} />
      </mesh>
    </group>
  )
}
