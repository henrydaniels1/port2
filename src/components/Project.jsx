// /* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from 'react';
// import a11 from '../assets/a11.png';
// import a12 from '../assets/a12.png';
// import b1 from '../assets/vid3.mp4'

// const data = [
//   {
//     imageUrl: a11,
//     date: "18 Aug 2024",
//     title: "CRIPTIFY",
//     description: "A Symmetric Encryption and Decryption Tool Website",
//     alt: "Sailboat UI",
//     link: "https://criptifyyy.vercel.app/",
//   },
//   {
//     imageUrl: a12,
//     date: "18 Aug 2024",
//     title: "Bricks and Steels",
//     description: "A Portfolio Website for an Architect",
//     alt: "React Hooks",
//     link: "https://brickss-sigma.vercel.app/",
//   },
//   {
//     imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     date: "18 Aug 2024",
//     title: "Bricks and Steels",
//     description: "A Portfolio Website for an Architect",
//     alt: "React Hooks",
//     link: "https://brickss-sigma.vercel.app/",
//   },
// ];

// const Card = ({ imageUrl, author, date, title, description, alt, link, parallaxOffset }) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer">
//       <div
//         className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-700 ease-out transform hover:shadow-xl hover:rotate-4 hover:scale-105 hover:translate-y-2"
//       >
//         <div
//           className="transform transition-transform duration-700 ease-out"
//           style={{
//             transform: `rotate(${parallaxOffset * 2}deg) translateY(${parallaxOffset * 5}px) scale(${1 + parallaxOffset / 20})`,
//           }}
//         >
//           <div className="w-full h-64">
//             <img src={imageUrl} className="w-full h-full object-cover" alt={alt} />
//           </div>
//           <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
//           <div className="absolute inset-x-0 bottom-0 z-20 p-4">
//             <p className="mb-1 text-sm text-white text-opacity-80">
//               {author} • <time>{date}</time>
//             </p>
//             <h3 className="text-xl font-medium text-white">{title}</h3>
//             <p className="mt-1 text-white text-opacity-80">{description}</p>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// };


// const Project = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const currentSectionRef = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (currentSectionRef) {
//       observer.observe(currentSectionRef);
//     }

//     return () => {
//       if (currentSectionRef) {
//         observer.unobserve(currentSectionRef);
//       }
//     };
//   }, []);

//   return (
//     <div className='w-[97%]  lg:w-[95%] mx-auto '>
      
//   <div className="py-16">
//     <p className="text-4xl font-bold text-center ">Latest Work</p>
//   </div>
  
//       <div className="h-screen w-full">
//         <video src={ b1 } autoPlay loop muted className='' />
//       </div>
 
  
//   <div ref={sectionRef} className="py-16 space-y-16 w-full mx-0">
//     <div id="projects"
//       className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 ease-out transform ${
//         isVisible
//           ? 'opacity-100 translate-y-0 scale-100 rotate-0 blur-0'
//           : 'opacity-0 translate-y-12 scale-90 rotate-3 blur-sm'
//       }`}
//     >
//       {data.map((item, index) => (
//         <Card
//           key={index}
//           imageUrl={item.imageUrl}
//           author={item.author}
//           date={item.date}
//           title={item.title}
//           description={item.description}
//           alt={item.alt}
//           link={item.link}
//           parallaxOffset={index * 0.09} // Different parallax offset for each card
//         />
//       ))}
//     </div>
//   </div>
// </div>

//   );
// };

// export default Project;

/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import a11 from '../assets/a11.png';
import a12 from '../assets/a12.png';
import a122 from '../assets/a122.png';
import b1 from '../assets/vid3.mp4';

const data = [
  {
    imageUrl: a11,
    date: "18 Aug 2024",
    title: "CRIPTIFY",
    description: "A Symmetric Encryption and Decryption Tool Website",
    alt: "Sailboat UI",
    link: "https://criptifyyy.vercel.app/",
  },
  {
    imageUrl: a12,
    date: "18 Aug 2024",
    title: "Bricks and Steels",
    description: "A Portfolio Website for an Architect",
    alt: "React Hooks",
    link: "https://brickss-sigma.vercel.app/",
  },
  {
    imageUrl: a122,
    date: "18 Aug 2024",
    title: "Bricks and Steels",
    description: "A Portfolio Website for an Architect",
    alt: "React Hooks",
    link: "https://brickss-sigma.vercel.app/",
  },
 
];

const Card = ({ imageUrl, author, date, title, description, alt, link, parallaxOffset }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-2xl border transition-transform duration-700 ease-out transform hover:shadow-xl hover:rotate-4 hover:scale-105 hover:translate-y-2"
      >
        <div
          className="transform transition-transform duration-700 ease-out"
          style={{
            transform: `rotate(${parallaxOffset * 2}deg) translateY(${parallaxOffset * 5}px) scale(${1 + parallaxOffset / 20})`,
          }}
        >
          <div className="w-full h-64">
            <img src={imageUrl} className="w-full h-full object-cover" alt={alt} />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="mb-1 text-sm text-white text-opacity-80">
              {author} • <time>{date}</time>
            </p>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-1 text-white text-opacity-80">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
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
    <div className="w-[97%] lg:w-[95%] mx-auto space-y-16">
      <div className="">
        <p className="text-4xl font-bold text-center">Latest Work</p>
      </div>

      <div className="h-full">
        <video src={b1} autoPlay loop muted className="w-full" />
      </div>

      <div ref={sectionRef} className="w-full mx-0">
        <div
          id="projects"
          className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100 rotate-0 blur-0'
              : 'opacity-0 translate-y-12 scale-90 rotate-3 blur-sm'
          }`}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              author={item.author}
              date={item.date}
              title={item.title}
              description={item.description}
              alt={item.alt}
              link={item.link}
              parallaxOffset={index * 0.09} // Different parallax offset for each card
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
