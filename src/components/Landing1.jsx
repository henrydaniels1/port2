import Homepage from "./Homepage"
import Projects from './Project';
import Contact from './Contact';
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'
// import Skills from './Skills';
import ExampleComponent from '../example/Scroll'
// import Parallax from "./Parallax";
// import ThreepipeViewer from "../example/Imageslider";


export default function Landing1() {
  return (
    <div className="space-y-20 overflow-hidden">
      <Homepage />
    {/* <ThreepipeViewer/> */}
      <ExampleComponent/>
      <AboutUs />
      {/* <Parallax/> */}
       <Projects />
      <Contact />
      {/* <Skills /> */ }
      <Footer/>
    </div>
  )
}
