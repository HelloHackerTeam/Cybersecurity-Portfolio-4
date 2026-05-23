import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function NodeGroup(){
  const group = useRef()
  useFrame(()=>{
    if(group.current) group.current.rotation.y += 0.003
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.8, 40, 40]} />
        <meshStandardMaterial color="#00f5ff" transparent opacity={0.08} />
      </mesh>
      {Array.from({ length: 14 }).map((_, index) => {
        const angle = (index / 14) * Math.PI * 2
        const radius = 2.6
        return (
          <mesh key={index} position={[Math.cos(angle) * radius, Math.sin(angle) * 0.8, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={index % 2 === 0 ? '#00f5ff' : '#39ff14'} emissive={index % 2 === 0 ? '#00f5ff' : '#39ff14'} metalness={0.6} />
          </mesh>
        )
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.02, 16, 120]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export default function HeroGlobe(){
  return (
    <div className="h-[480px] sm:h-[520px] lg:h-[580px] w-full relative overflow-hidden rounded-[32px] border border-white/10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight color="#00f5ff" position={[4, 4, 4]} intensity={1.2} />
        <pointLight color="#39ff14" position={[-4, -4, 4]} intensity={0.8} />
        <NodeGroup />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.25} enablePan={false} />
      </Canvas>
    </div>
  )
}
