import { useState } from 'react';
import { motion } from 'framer-motion';
import a13 from '../assets/logo1.png'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 w-[97%]  lg:w-[95%] mx-auto py-4 bg-transparent z-30 flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className=""><img src={a13} className='w-16 h-16'></img></div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-gray-400 text-3xl focus:outline-none relative z-40"
        >
          {isOpen ? (
            <span className="inline-block text-3xl">&#x2715;</span> // Times icon
          ) : (
            <span className="inline-block text-3xl">&#9776;</span> // Bars icon
          )}
        </button>
      </div>

      {/* Menu Links */}
      <motion.div 
        className={`fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:bg-transparent md:translate-x-0 md:flex md:flex-row md:items-center md:justify-end`}
      >
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:items-center md:space-x-4">
          {/* <a
            href="#about"
            className="text-2xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            About
          </a> */}
          <a
            href="#projects"
            className="text-xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          {/* <a
            href="#skills"
            className="text-xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            Skills
          </a> */}
          <a
            href="#contact"
            className="text-xl text-white hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
