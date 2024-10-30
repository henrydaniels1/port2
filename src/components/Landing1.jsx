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


export default function Landing1() {
  return (
    <div className='relative space-y-20 stylish-regular overflow-hidden '>
      <Homepage />
      <ExampleComponent />

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







