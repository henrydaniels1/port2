import Homepage from "./Homepage"
import Projects from './Project';
// import Skills from './Skills';
import Contact from './Contact';
import {Footer} from './Footer'


export default function Landing1() {
  return (
    <div className="space-y-16">
      <Homepage />
       <Projects />
      <Contact />
      {/* <Skills /> */ }
      <Footer/>
    </div>
  )
}
