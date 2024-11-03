/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import './planet.css'

const EarthCanvas = () => {
  const earth = useGLTF('./reactlogo/scene.gltf')

  return (
    <Canvas
      style={{ width: '8rem', height: '8rem', }} // Adjust height here
      className='cursor-pointer'
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
      <primitive object={earth.scene} scale={2.3} position={[0, 0, 0]} />
    </Canvas>
  )
}

export default EarthCanvas
