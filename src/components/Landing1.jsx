import Homepage from "./Homepage"
import Projects from './Project';
// import Skills from './Skills';
import Contact from './Contact';
import { Footer } from './Footer'
import {AboutUs} from './AboutUs'


export default function Landing1() {
  return (
    <div className="space-y-20">
      <Homepage />
      <AboutUs/>
       <Projects />
      <Contact />
      {/* <Skills /> */ }
      <Footer/>
    </div>
  )
}
