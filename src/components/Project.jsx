import { useEffect, useRef, useState } from 'react';
import a11 from '../assets/a11.png';
import a12 from '../assets/a12.png';
import b1 from '../assets/vid3.mp4';
// import ExampleComponent from '../example/Scroll';

// Data for projects
const data = [
  {
    imageUrl: a11,
    date: 'Completed',
    title: 'CRIPTIFY',
    description: 'A Symmetric Encryption and Decryption Tool Website',
    alt: 'Criptify',
    link: 'https://criptifyyy.vercel.app/',
  },
  {
    imageUrl: a12,
    date: 'In Progress',
    title: 'Bricks and Steels',
    description: 'A Portfolio Website for an Architect',
    alt: 'Bricks and steels',
    link: 'https://brickss-sigma.vercel.app/',
  },
];

// Card component
// eslint-disable-next-line react/prop-types
const Card = ({ imageUrl, date, title, description, alt, link, parallaxOffset }) => {
  // Determine if the project is completed or in progress
  const isCompleted = date === 'Completed';
  const isInProgress = date === 'In Progress';

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-2xl border-[1.5px] transition-transform duration-700 ease-out transform hover:shadow-xl hover:rotate-4 hover:scale-105 hover:translate-y-2"
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
            {/* Conditionally render "Completed" or "In Progress" with styles and icons */}
            <p className="mb-1 text-sm text-white text-opacity-80 flex items-center space-x-2">
              {isCompleted && (
                <>
                  {/* Icon for Completed */}
                  <span className="bg-green-500 text-white p-1 rounded-full">
                    {/* ✅ Replace with your preferred icon */}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">Completed</span>
                </>
              )}
              {isInProgress && (
                <>
                  {/* Icon for In Progress */}
                  <span className="bg-yellow-500 text-white p-1 rounded-full">
                    {/* ⏳ Replace with your preferred icon */}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg">In Progress</span>
                </>
              )}
            </p>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-1 text-white text-opacity-80">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

// Project component
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
  
      <div className="reveal2">
        <p className="md:text-4xl text-2xl font-bold text-teal-900 text-center">Latest Work</p>
      </div>

      <div className="h-full shadow-2xl">
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
