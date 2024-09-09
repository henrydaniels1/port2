import Homepage from "./Homepage"
import Projects from './Project';
// import Skills from './Skills';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
// import Parallax from "./Parallax";


export default function Landing1() {
  return (
    <div className="space-y-20">
      <Homepage />
      <AboutUs />
      {/* <Parallax/> */}
       <Projects />
      <Contact />
      {/* <Skills /> */ }
      <Footer/>
    </div>
  )
}
