/* eslint-disable react/no-unknown-property */
import  { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random'

const StarBackground = (props) => {
  const ref = useRef()

  // Generate positions with a fallback to avoid NaN values
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(100), { radius: 1.2 })
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
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => (
  <div className='w-full h-auto fixed inset-0 -z-10'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
)

export default StarsCanvas
