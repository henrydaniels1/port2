import Homepage from "./Homepage"
import Projects from './Project';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
import '../App.css'
import ExampleComponent from '../example/Scroll'
// import {WordCloudChart} from './Word.jsx'
import WordCloudChart from './Word'
// import Award from './Award'
import CarouselIndicatorsInside from './Slider'


export default function Landing1() {
  return (
    <div className="space-y-20 stylish-regular overflow-hidden">
      <Homepage />

    
      <ExampleComponent/>
      <AboutUs />
      <WordCloudChart/>
     
      <Projects />
      <CarouselIndicatorsInside/>
      {/* <Award/> */}
      <Contact />
     
      <Footer/>
    </div>
  )
}







