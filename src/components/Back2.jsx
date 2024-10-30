/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random'

const StarBackground = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => {
    let positions = null
    try {
      // Generate positions with fallback to avoid NaN values
      positions = random.inSphere(new Float32Array(150), { radius: 1.2 })

      // Check if all positions are valid numbers
      if (!positions.every((pos) => !isNaN(pos))) {
        console.warn('Some positions contain NaN values')
        // Fallback to an empty array if some positions are invalid
        return new Float32Array([0, 0, 0])
      }
    } catch (error) {
      console.error('Error generating sphere positions:', error)
      return new Float32Array([0, 0, 0])
    }

    return positions
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
