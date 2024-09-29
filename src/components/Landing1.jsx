import Homepage from "./Homepage"
import Projects from './Project';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
import '../App.css'
import ExampleComponent from '../example/Scroll'


export default function Landing1() {
  return (
    <div className="space-y-20 stylish-regular overflow-hidden">
      <Homepage />

    
      <ExampleComponent/>
      <AboutUs />
     
       <Projects />
      <Contact />
     
      <Footer/>
    </div>
  )
}







