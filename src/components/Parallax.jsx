
import SimpleParallax from "simple-parallax-js";
import a11 from '../assets/a11.png'

export default function Parallax() {
  return (
    <div>
      <SimpleParallax>
    <img src={a11} alt="image" />
  </SimpleParallax>
    </div>
  )
}
