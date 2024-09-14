
import SimpleParallax from "simple-parallax-js";

import { useEffect, useRef, useState } from 'react';
import Pic1 from '../assets/a4.jpg'
import Pic2 from '../assets/bb2.jpg'
import Pic3 from '../assets/c.jpg'
import '../style/Button.css'

// import { BoxRevealDemo } from "./BoxReveal";

export const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div
      id="About"
      ref={sectionRef}
      className=" pt-0 mx-auto md:w-[95%] w-[97%] md:px-0 lg:px-0"
    >

      <div className="grid gap-10 md:grid-cols-2 ">

        <div
          className={`flex flex-col justify-center transition-all space-y-6 duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          } md:pr-8 xl:pr-0 lg:max-w-lg`}
        >
         
          <div
            className="reveal2 flex items-center space-x-4 mb-4 rounded-full bg-teal-accent-400"
          >
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
                      </svg>
                     <p className='font-semibold tracking-wider text-teal-900 lg:text-4xl md:text-4xl text-2xl '>About Me</p>
          </div>
          <div className="max-w-xl mb-6">
          
            <p className="reveal3 text-base text-gray-700 md:text-lg text-justify">
              I am an experienced web developer with 4 years of expertise in JavaScript, React, and Three.js.
              I create responsive, visually appealing websites that enhance business performance.
              Driven by a commitment to innovation and quality, I continuously refine my skills and stay ahead of industry trends.
            </p>
            {/* <BoxRevealDemo/> */}
          </div>

          <div className="reveal2">
            <a style={ { "--clr": "#000" } } className="btn-3 px-4 py-2 rounded-2xl" href="#">
              <p className="md:text-xl sm:text-lg">  learn more</p>
              <span className="button__icon-wrapper p-2 ">
                
      <svg
        width="10"
        className="button__icon-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 15"
      >
        <path
          fill="currentColor"
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        ></path>
      </svg>

      <svg
        className="button__icon-svg button__icon-svg--copy"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        fill="none"
        viewBox="0 0 14 15"
      >
        <path
          fill="currentColor"
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        ></path>
      </svg>
                
              </span>
            </a>
          </div>

        </div>

        
        <div
          className={`flex items-center lg:justify-end justify-start transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-12'
          } - lg:pl-8`}
        >
           
          <div className="flex flex-col items-end">

            <div className=" mb-6 ">
              <SimpleParallax orientation="right" >
                <img
              className="object-cover rounded-lg shadow-lg h-48 w-40 md:w-48  xl:h-56 xl:w-56"
              src={Pic1}
                  alt="" />
              </SimpleParallax>
            </div>
            
        
            <img
              className="object-cover w-28 h-28 md:w-32 md:h-32 rounded shadow-lg  xl:h-40  xl:w-40"
              src={Pic2}
            />

          </div>
          <div className="pl-6 md:pl-3"><SimpleParallax orientation="left">
            <img
              className="object-cover w-40 h-52 rounded-lg shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={Pic3}
              alt=""
            /></SimpleParallax>
          </div>
        </div>
      </div>
    </div>
  );
};
