import { useState } from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import a13 from '../assets/logo1.png';
import '../style/Nav.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 w-[97%] lg:w-[95%] mx-auto py-4 bg-transparent z-30 flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex h-12 w-12 relative">
        {/* absolute right-2  */}
        <img src={a13} className="absolute right-2 w-full h-full" alt="Logo" />
      </div>

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
        className={` fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:bg-transparent md:translate-x-0 md:flex md:flex-row md:items-center md:justify-end`}
        style={{ backdropFilter: 'blur(10px)' }} // This adds the backdrop blur effect
      >
        <div className=" w-full  md:w-auto flex flex-col md:flex-row items-center md:items-center md:space-x-4">
          <a
            href="#About"
            className="hvr-underline-from-center text-xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            About Me
          </a>

          <a
            href="#projects"
            className="hvr-underline-from-center text-xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hvr-underline-from-center text-xl text-white mb-8 md:mb-0 hover:text-gray-300 transition-transform duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>

          
          {/* <Link to="/fx">
            <div className="hvr-underline-from-center text-xl text-white hover:text-gray-300 transition-transform duration-300">
              Fx page
            </div>
          </Link> */}
         
        </div>
      </motion.div>
    </motion.nav>
  );
}


// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import a13 from '../assets/logo1.png';
// import '../style/Nav.css';

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     // Adjust the value here to match when the white background starts
//     if (scrollPosition > 100) {
//       setIsOnWhiteBackground(true);
//     } else {
//       setIsOnWhiteBackground(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <motion.nav
//       className="fixed top-0 w-[97%] lg:w-[95%] mx-auto py-4 bg-transparent z-30 flex justify-between items-center"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="flex h-12 w-12 relative">
//         <img src={a13} className="absolute right-2 w-full h-full" alt="Logo" />
//       </div>

//       {/* Hamburger Icon */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-gray-400 text-3xl focus:outline-none relative z-40"
//         >
//           {isOpen ? (
//             <span className="inline-block text-3xl">&#x2715;</span> // Times icon
//           ) : (
//             <span className="inline-block text-3xl">&#9776;</span> // Bars icon
//           )}
//         </button>
//       </div>

//       {/* Menu Links */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } md:static md:bg-transparent md:translate-x-0 md:flex md:flex-row md:items-center md:justify-end`}
//         style={{ backdropFilter: 'blur(10px)' }} // This adds the backdrop blur effect
//       >
//         <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-4">
//           <a
//             href="#About"
//             className={`hvr-underline-from-center text-xl mb-8 md:mb-0 transition-transform duration-300 ${
//               isOnWhiteBackground ? 'text-black' : 'text-white'
//             } hover:scale-105`}
//             onClick={toggleMenu}
//           >
//             About Me
//           </a>

//           <a
//             href="#projects"
//             className={`hvr-underline-from-center text-xl mb-8 md:mb-0 transition-transform duration-300 ${
//               isOnWhiteBackground ? 'text-black' : 'text-white'
//             } hover:scale-105`}
//             onClick={toggleMenu}
//           >
//             Projects
//           </a>

//           <a
//             href="#contact"
//             className={`hvr-underline-from-center text-xl mb-8 md:mb-0 transition-transform duration-300 ${
//               isOnWhiteBackground ? 'text-black' : 'text-white'
//             } hover:scale-105`}
//             onClick={toggleMenu}
//           >
//             Contact
//           </a>

//           <Link to="/fx">
//             <div
//               className={`hvr-underline-from-center text-xl transition-transform duration-300 ${
//                 isOnWhiteBackground ? 'text-black' : 'text-white'
//               } hover:scale-105`}
//             >
//               Fx page
//             </div>
//           </Link>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// }
