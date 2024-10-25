// import { motion } from "framer-motion";

// // Modernized BoxReveal component with refined animations
// const BoxReveal = ({ children, boxColor = "#5046e6", duration = 0.5 }) => {
//   return (
//     <motion.div
//       initial={{ clipPath: "inset(100% 0 0 0)" }}
//       animate={{ clipPath: "inset(0% 0 0 0)" }}
//       transition={{ duration, ease: "easeInOut" }}
//       style={{
//         backgroundColor: boxColor,
//         padding: "1.5rem",
//         borderRadius: "12px",
//         overflow: "hidden",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Modernized BoxRevealDemo with better UI and accessibility
// export function BoxRevealDemo() {
//   return (
//     <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center pt-8 space-y-6">
//       {/* Dynamic heading with modernized style */}
//       <BoxReveal boxColor={"#5046e6"} duration={0.6}>
//         <p className="text-[3.5rem] font-bold text-gray-900 tracking-tight leading-tight">
//           Magic UI<span className="text-[#5046e6]">.</span>
//         </p>
//       </BoxReveal>

//       {/* Subheading with dynamic color and spacing */}
//       <BoxReveal boxColor={"#f4f4f5"} duration={0.6}>
//         <h2 className="mt-2 text-[1.2rem] text-gray-700 leading-relaxed">
//           UI library for{" "}
//           <span className="text-[#5046e6] font-semibold">Design Engineers</span>
//         </h2>
//       </BoxReveal>

//       {/* Description with improved readability */}
//       <BoxReveal boxColor={"#e0e7ff"} duration={0.7}>
//         <div className="mt-3 text-center text-gray-600">
//           <p>
//             ➝ 20+ free and open-source animated components built with
//             <span className="font-semibold text-[#5046e6]"> React</span>,
//             <span className="font-semibold text-[#5046e6]"> Typescript</span>,
//             <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
//             and
//             <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
//             <br />
//             ➝ 100% customizable and open-source. <br />
//           </p>
//         </div>
//       </BoxReveal>

//       {/* Explore Button with hover effects */}
//       <BoxReveal boxColor={"#e0e7ff"} duration={0.8}>
//         <button
//           className="mt-4 bg-[#5046e6] text-white py-2 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3f38c1] hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3f38c1]"
//         >
//           Explore
//         </button>
//       </BoxReveal>
//     </div>
//   );
// }


import PropTypes from "prop-types";
import { motion } from "framer-motion";

// BoxReveal component with PropTypes validation
const BoxReveal = ({ children, boxColor = "#5046e6", duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration, ease: "easeInOut" }}
      style={{
        backgroundColor: boxColor,
        padding: "1.5rem",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

// PropTypes validation for the BoxReveal component
BoxReveal.propTypes = {
  children: PropTypes.node.isRequired,  // Validate children are valid React nodes
  boxColor: PropTypes.string,           // Validate boxColor as a string
  duration: PropTypes.number,           // Validate duration as a number
};

// Default props
BoxReveal.defaultProps = {
  boxColor: "#5046e6",
  duration: 0.5,
};

// Usage of the BoxRevealDemo component
export function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center pt-8 space-y-6">
      <BoxReveal boxColor={"#5046e6"} duration={0.6}>
        <p className="text-[3.5rem] font-bold text-gray-900 tracking-tight leading-tight">
          Magic UI<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
          {/* Other BoxReveal components */ }
           {/* Subheading with dynamic color and spacing */}
    <BoxReveal boxColor={"#f4f4f5"} duration={0.6}>
        <h2 className=" text-[1.2rem] text-gray-700 leading-relaxed">
          UI library for{" "}
          <span className="text-[#5046e6] font-semibold">Design Engineers</span>
         </h2>       </BoxReveal>
      {/* Description with improved readability */}
    <BoxReveal boxColor={"#e0e7ff"} duration={0.7}>
        <div className=" text-center text-gray-600">
         <p>
            ➝ 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
             <span className="font-semibold text-[#5046e6]"> Typescript</span>,
             <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
             and
             <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
             <br />
             ➝ 100% customizable and open-source. <br />
           </p>
         </div>
       </BoxReveal>

       {/* Explore Button with hover effects */}
       <BoxReveal boxColor={"#e0e7ff"} duration={0.8}>
        <button
          className=" bg-[#5046e6] text-white py-2 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3f38c1] hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3f38c1]"      >
         Explore
        </button>
      </BoxReveal>
    </div>
  );
}
