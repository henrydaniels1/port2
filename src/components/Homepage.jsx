import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from './Nav';
import Btn1 from '../icons/Btn1';
import '../style/Loader.css';
// import a1 from '../assets/bb2.jpg';
import a2 from '../assets/a4.jpg';
import Typewriter from 'typewriter-effect';





export default function Homepage() {
  const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, 250]); 
  const y2 = useTransform(scrollY, [0, 500], [0, 150]); // Increased range for more effect
//   const scale1 = useTransform(scrollY, [0, 500], [1, 1.01]); 
  const scale2 = useTransform(scrollY, [0, 500], [1, 1.5]); // Scale effect for the second layer

  return (
    <div className=''>
      {/* Landing Section */}
      <div className=" main-loader relative bg-[#111727] flex flex-col justify-center items-center text-white text-center overflow-hidden">

        {/* Parallax Background Layers */}
        {/* <motion.div 
          className="absolute h-auto bg-cover max-w-full inset-0 bg-center opacity-50"
          style={{ 
            y: y1, 
            scale: scale1,
            backgroundImage: `url(${a1})`
          }}
        >
        
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </motion.div> */}
        
       <motion.div 
  className="absolute inset-0 w-full h-[100vh] bg-cover bg-center"
  style={{ 
    y: y2, 
    scale: scale2,
    backgroundImage: `url(${a2})`,
    backgroundSize: 'cover', // Ensures the image covers the whole div without distortion
    backgroundPosition: 'center', // Centers the image
  }}
>



          {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </motion.div>

        {/* Floating Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <motion.h1 
          className="lg:text-6xl text-4xl font-bold mb-4 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ['Ezenwa Henry-Daniel'],
              autoStart: true,
              loop: true,
              cursor: '_',
              delay: 100,
              deleteSpeed: 50,
              pauseFor: 1000
            }}
          />
        
        </motion.h1>
        
        <motion.p 
          className="text-2xl mb-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Developer | Foreign Exchange Trader
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div 
          className="relative z-10 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
                  transition={ { duration: 0.8, delay: 1.2 } }
                   style={{ 
            y: y2, 
            scale: scale2,
            
          }}
        >
          {/* <a href="#projects" className="text-white bg-purple-700 py-2 px-6 rounded-full font-semibold text-lg hover:bg-gray-300 hover:text-purple-900 transition">
            View My Works
          </a> */} <a href="#projects"><Btn1/></a>
        </motion.div>
       
      </div>

     
     
    </div>
  );
}
