import { useState } from 'react'
import { motion } from 'framer-motion'
import a13 from '../assets/logo7.png'
import '../style/Nav.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className='fixed top-0 w-[97%] lg:w-[95%] mx-auto py-4 bg-transparent z-30 flex justify-between items-center'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className='flex h-10 w-10 relative '>
        <img
          src={a13}
          className=' w-full h-full rounded-full'
          alt='Logo'
        />
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='text-white text-3xl focus:outline-none relative z-40'>
          {isOpen ? (
            <span className='inline-block text-3xl'>&#x2715;</span> // Times icon
          ) : (
            <span className='inline-block text-3xl'>&#9776;</span> // Bars icon
          )}
        </button>
      </div>

      {/* Menu Links */}
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:bg-transparent md:translate-x-0 md:flex md:flex-row md:items-center md:justify-end`}
        style={{ backdropFilter: 'blur(10px)' }}>
        <div className='w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-6'>
          {['About Me', 'Projects', 'Contact'].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase().replace(' ', '')}`}
              className='nav-link text-xl text-white font-semibold mb-8 md:mb-0 transition-transform duration-300'
              onClick={toggleMenu}>
              {text}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
