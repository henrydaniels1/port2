
// import SimpleParallax from "simple-parallax-js";

import { useEffect, useRef, useState } from 'react';
import Pic1 from '../assets/a4.jpg'
// import Pic2 from '../assets/bb2.jpg'
// import Pic3 from '../assets/c.jpg'
import '../style/Button.css'
import '../style/Nav.css'
import Earth from './Earth'
import Earth2 from './ReactLogo'
import '../style/Font.css'



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
      id='aboutme'
      ref={sectionRef}
      className=' pt-0  rounded-lg md:px-0 lg:px-0 bg-[#f5f5f5] '>
      <div className='grid mx-auto md:w-[95%] w-[95%] gap-10 md:grid-cols-2 py-16 '>
        <div
          className={`flex flex-col justify-center transition-all  space-y-6 duration-1000 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-20'
          } md:pr-8 xl:pr-0 lg:max-w-lg`}>
          <div className='reveal2 flex items-center space-x-4 mb-4  rounded-full bg-teal-accent-400 z-20'>
            <svg className='text-teal-900 w-7 h-7 z-20' viewBox='0 0 24 24'>
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='8,5 8,1 16,1 16,5'
                strokeLinejoin='round'
              />
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='9,15 1,15 1,5 23,5 23,15 15,15'
                strokeLinejoin='round'
              />
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='22,18 22,23 2,23 2,18'
                strokeLinejoin='round'
              />
              <rect
                x='9'
                y='13'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                width='6'
                height='4'
                strokeLinejoin='round'
              />
            </svg>
            <p className=' font-semibold  tracking-wider z-20  text-teal-900 lg:text-4xl md:text-4xl text-3xl '>
              About Me
            </p>
          </div>

          <div className='max-w-xl mb-6'>
            <p className='reveal3 text-base text-gray-700 z-50 md:text-lg text-justify nav-font'>
              I am a web developer with 5 years of experience specializing in
              JavaScript, React, Web3, and Three.js. What sets me apart is my
              ability to merge technical expertise with creativity, crafting
              visually stunning, highly interactive, and performance-optimized
              web experiences.<br></br> I don’t just build websites, I create digital
              experiences that enhance user engagement and drive business
              growth. With a strong commitment to innovation and a keen eye for
              detail, I continuously refine my skills to stay ahead of industry
              trends, ensuring every project I work on delivers both aesthetic
              excellence and functional efficiency.
            </p>
            {/* <BoxRevealDemo/> */}
          </div>

          <div className='reveal2'>
            <a
              style={{ '--clr': '#000' }}
              className='btn-3 px-4 py-2 rounded-2xl'
              href='#'>
              <p className='md:text-xl sm:text-lg nav-font'> learn more</p>
              <span className='button__icon-wrapper p-2 '>
                <svg
                  width='10'
                  className='button__icon-svg'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 15'>
                  <path
                    fill='currentColor'
                    d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'></path>
                </svg>

                <svg
                  className='button__icon-svg button__icon-svg--copy'
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  fill='none'
                  viewBox='0 0 14 15'>
                  <path
                    fill='currentColor'
                    d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div
          className={` flex items-center  justify-between transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          } `}>
          <div className='flex flex-col gap-6 items-end'>
            <div className='lg:pl-6 relative'>
              <div className='lg:w-64 lg:h-64  h-[10rem] w-[10rem] transform transition-transform duration-500 hover:scale-105 '>
                <div className='absolute bg-black opacity-40 h-full w-full  rounded-xl'></div>
                <img
                  className='object-cover object-right rounded-xl shadow-md  h-full w-full '
                  src={Pic1}
                  alt='Decorative image 1'
                />
              </div>
            </div>
            {/* 1st earth */}
            <div className='transform  flex justify-end  items-end transition-transform duration-500 hover:scale-105 h-28 w-28 lg:h-28 md:w-32 xl:h-40 xl:w-40'>
              <Earth2 className='' />
            </div>
          </div>
          {/* 2nd earth */}
          <div className='rounded-xl transform  transition-transform duration-500 hover:scale-105 '>
            <Earth className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  )
};
