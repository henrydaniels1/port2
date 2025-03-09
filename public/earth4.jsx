/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import './planet.css'
import { useEffect } from 'react'

const EarthModel = () => {
  const { scene, animations } = useGLTF('./huawei/scene.gltf')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play() // Play the first animation if it exists
    }
  }, [actions])

  return <primitive object={scene} scale={18.48} position={[0, -3.6, 0]} />
}

const EarthCanvas = () => {
  return (
    <Canvas
      style={{ width: '13rem', height: '15rem', aspectRatio: 1 }}
      className='cursor-pointer bg-gray-200'
      frameloop='demand'
      camera={{ position: [-4, 3, 6], fov: 80, near: 0.01, far: 200 }}>
      {/* Orbit Controls */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />

      {/* Ambient and Directional Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />

      {/* Model */}
      <EarthModel />
    </Canvas>
  )
}

export default EarthCanvas
