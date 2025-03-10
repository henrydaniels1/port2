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
import '../style/Nav.css'
import Component from './Collaborate'
// import Huawei from "./Huawei";
// import Wrap from './2d/Wrap'
// import Earth from './Earth'


export default function Landing1() {
  return (
    <div className='relative space-y-20 stylish-regular overflow-hidden nav-font'>
      <Homepage />
      <ExampleComponent />

      <StarsCanvas className='z-50 absolute' />

      {/* <Wrap/> */}
      {/* <Earth/> */ }
      {/* <Huawei/> */}
      <AboutUs />
      <WordCloudChart />
      <Projects />
      <CarouselIndicatorsInside />
      <Component/>
      <Contact />
      <Footer />
    </div>
  )
}







