/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 earth.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload, useGLTF } from '@react-three/drei'
import * as random from 'maath/random'

// Star background component
const StarBackground = (props) => {
  const ref = useRef()

  // Generate positions with a fallback to avoid NaN values
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 })
    return positions.every((pos) => !isNaN(pos))
      ? positions
      : new Float32Array([0, 0, 0])
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 11
      ref.current.rotation.y -= delta / 25
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#fff'
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Model component for loading the GLTF
export function EarthModel(props) {
  const { nodes, materials } = useGLTF('./earth.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={1.128}
      />
    </group>
  )
}

useGLTF.preload('./earth.gltf')

// Main canvas component
const Earth = () => (
  <div className='w-full h-auto fixed inset-0 -z-10'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
)

export default EarthModel
