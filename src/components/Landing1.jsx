import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from './Nav';
import Projects from './Project';
import Skills from './Skills';
import Contact from './Contact';
import a1 from '../assets/a10.jpg';
import a2 from '../assets/a4.jpg';
import Typewriter from 'typewriter-effect';

export default function LandingPage1() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 250]); // Increased range for more effect
  const y2 = useTransform(scrollY, [0, 500], [0, 100]); // Increased range for more effect
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.01]); // Scale effect for the first layer
  const scale2 = useTransform(scrollY, [0, 500], [1, 1.1]); // Scale effect for the second layer

  return (
    <div>
      {/* Landing Section */}
      <div className="relative bg-blue-900 min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
        {/* Parallax Background Layers */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ 
            y: y1, 
            scale: scale1,
            backgroundImage: `url(${a1})`
          }}
        />
        <motion.div 
          className="absolute h-auto max-w-full inset-0 bg-cover bg-center opacity-1"
          style={{ 
            y: y2, 
            scale: scale2,
            backgroundImage: `url(${a2})`
          }}
        />

        {/* Floating Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <motion.h1 
          className="lg:text-6xl text-4xl font-bold mb-4 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
                  transition={ { duration: 1 } }
                  
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
        
        {/* Social Icons Section
        <motion.div
          className="flex space-x-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </motion.div> */}

        {/* Call-to-Action Button */}
        <motion.div 
          className="relative z-10 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
                  transition={ { duration: 0.8, delay: 1.5 } }
                   style={{ 
            y: y1, 
            scale: scale1,
           
          }}
        >
          <a href="#projects" className="bg-white text-blue-900 py-2 px-6 rounded-full font-semibold text-lg hover:bg-gray-300 transition">
            View My Works
          </a>
        </motion.div>
      </div>

      {/* Sections as Separate Components */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
