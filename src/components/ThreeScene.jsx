import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Mesh } from 'three'

function CyberSphere(){
  return (
    <mesh rotation={[0.8,0.2,0]} castShadow>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshStandardMaterial emissive={'#00f5ff'} metalness={0.6} roughness={0.2} envMapIntensity={1} />
    </mesh>
  )
}

export default function ThreeScene(){
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0,0,6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight color={'#00f5ff'} position={[5,5,5]} intensity={1} />
        <pointLight color={'#39ff14'} position={[-5,-5,5]} intensity={0.8} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <CyberSphere />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}
