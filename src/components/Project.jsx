/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // author: "Andrea Felsted",
    date: "18 Aug 2024",
    title: "CRIPTIFY",
    description: "A Symmetric Encryption and Decryption Tool Website",
    alt: "Sailboat UI",
    link: "https://criptifyyy.vercel.app/" // Add the link here
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // author: "John Doe",
    date: "18 Aug 2024",
    title: "Bricks and Steels",
    description: "A Portfolio Website for an Architect",
    alt: "React Hooks",
    link: "https://brickss-sigma.vercel.app/" // Add the link here
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // author: "John Doe",
    date: "18 Aug 2024",
    title: "Bricks and Steels",
    description: "A Portfolio Website for an Architect",
    alt: "React Hooks",
    link: "https://brickss-sigma.vercel.app/" // Add the link here
  },
  
  // Add more card data here as needed
];

const Card = ({ imageUrl, author, date, title, description, alt, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow transition-all duration-1000 ease-out transform hover:shadow-lg hover:scale-105">
        <div>
          <img 
            src={imageUrl} 
            className="w-full object-cover" 
            alt={alt} 
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
        <div className="absolute inset-x-0 bottom-0 z-20 p-4">
          <p className="mb-1 text-sm text-white text-opacity-80">
            {author} • <time>{date}</time>
          </p>
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <p className="mt-1 text-white text-opacity-80">
            {description}
          </p>
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
        threshold: 0.2,
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
    <div ref={ sectionRef } className="py-16 space-y-16  w-[97%] lg:w-[95%] mx-auto">
      <div> <p className='text-4xl font-bold text-center'>MY PROJECTS</p></div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
        {data.map((item, index) => (
          <Card 
            key={index}
            imageUrl={item.imageUrl}
            author={item.author}
            date={item.date}
            title={item.title}
            description={item.description}
            alt={item.alt}
            link={item.link} // Pass the link to the Card component
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
