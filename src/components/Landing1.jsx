import Homepage from "./Homepage"
import Projects from './Project';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
import '../App.css'
import ExampleComponent from '../example/Scroll'
import WordCloudChart from './Word'
import CarouselIndicatorsInside from './Slider'
// import  Earth from './Earth.jsx'
// import Award from './Award'

export default function Landing1() {
  return (
    <div className="space-y-20 stylish-regular overflow-hidden">
      <Homepage />

    
      <ExampleComponent />
    
      <AboutUs />
      {/* < Earth/> */}
      <WordCloudChart/>
     
      <Projects />
      <CarouselIndicatorsInside/>
      {/* <Award/> */}
      <Contact />
     
      <Footer/>
    </div>
  )
}







