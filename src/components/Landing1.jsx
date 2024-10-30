import Homepage from "./Homepage"
import Projects from './Project';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
import '../App.css'
import ExampleComponent from '../example/Scroll'
import WordCloudChart from './Word'
import CarouselIndicatorsInside from './Slider'
import StarsCanvas from './Back2'


// import { EarthModel } from './2d/Earth'
// import ErrorBoundary from './3d/ErrorHandling'
// import { Canvas } from '@react-three/fiber'
// import {Environment, OrbitControls} from '@react-three/drei'
// import  Earth from '../example/Earth.jsx'

export default function Landing1() {
  return (
    <div className='relative space-y-20 stylish-regular overflow-hidden '>
      <Homepage />
      <ExampleComponent />

      {/* < Earth/> */}
      {/*   
    <ErrorBoundary>  <Canvas>
        <ambientLight />
        <OrbitControls />
   
          
       <EarthModel />
        <Environment></Environment>
      </Canvas></ErrorBoundary> */}

      <StarsCanvas className='z-50 absolute' />

      <AboutUs />
      <WordCloudChart />
      <Projects />
      <CarouselIndicatorsInside />
      <Contact />
      <Footer />
    </div>
  )
}







