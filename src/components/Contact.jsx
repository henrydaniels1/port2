import { useEffect, useRef } from 'react';
import gm from '../assets/gmail.png';
import ad from '../assets/location.png';
import { useForm, ValidationError } from '@formspree/react';
import anime from 'animejs';
import Phone from '../icons/phone.jsx'
// import Github from '../icons/Github.jsx';
import Facebook from '../icons/Facebook.jsx';
import Twitter from '../icons/Twitter.jsx';
// import Ig from '../icons/ig.jsx';

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgpyrqj");

  const contactSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger anime.js animation when section is visible
            anime({
              targets: '.animate-contact',
              opacity: [0, 1],
              translateY: [-20, 0],
              easing: 'easeOutQuad',
              duration: 1000,
              delay: anime.stagger(200, { start: 300 }), // Delay for staggered effect
            });
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  if (state.succeeded) {
    return <p className="text-center text-lg font-bold text-green-600">Thanks for Contacting!</p>;
  }

  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="animate-contact dark:text-gray-800 h-full w-[97%] lg:w-[95%] mx-auto flex flex-col lg:flex-row justify-between shadow-2xl opacity-0"
    >
      {/* Left Green Section */}
      <div className="bg-gradient-to-br w-full lg:w-[50%] lg:py-8 lg:px-8 py-4 px-2 flex flex-col justify-center text-black">
        <div className="mb-8">
          <p className="text-4xl font-bold mb-8 text-teal-900">Contact Us</p>
          <p className="text-lg font-medium">We&apos;d love to hear from you! Reach out to us at:</p>
        </div>
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img src={ad} alt="" className="w-full h-full" />
            </div>
            <address>No.23 Oke Avenue, Ibadan.</address>
          </div>
          <div className="flex items-center space-x-2">
           
            <Phone/>
            <p>08085833176</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img src={gm} alt="" className="w-full h-full scale-90" />
            </div>
            <p>henrydanielchibuzor@gmail.com</p>
          </div>

          <div>

<div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* twitter */}
           

            {/* ig */}
            {/* <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
            <Ig/>
            </a> */}

            {/* github */}
            {/* <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
              <Github/>
            </a> */}

            {/* facebook */}
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
            <Facebook/>
              </a>

               <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
              <Twitter/>
            </a>
            
            </div>
            </div>

        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-[50%]">
        <form
          onSubmit={handleSubmit}
          className="container w-full lg:px-6 px-2 py-10 mx-auto space-y-10 dark:bg-gray-50"
        >
          <div>
            <label htmlFor="name" className="block mb-1 ml-1 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="block w-full p-3 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 ml-1 font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="block w-full p-3 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 ml-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message..."
              required
              className="block w-full p-3 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-600 text-sm mt-1"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-4 py-3 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}






// export default function Contact() {
//   return (
//     <section id="contact" className="p-6 dark:text-gray-800">
//       {/* Uncomment the form below if you want to use the local form handling */}
//       {/*
//       <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
//         <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
//         <div>
//           <label htmlFor="name" className="block mb-1 ml-1">Name</label>
//           <input id="name" type="text" placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1 ml-1">Email</label>
//           <input id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
//         </div>
//         <div>
//           <label htmlFor="message" className="block mb-1 ml-1">Message</label>
//           <textarea id="message" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
//         </div>
//         <div>
//           <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
//         </div>
//       </form>
//       */}

//       {/* Form using external form handling service */}
//       <form action="https://getform.io/f/broljlla" method="POST" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
//         <div>
//           <label htmlFor="name" className="block mb-1 ml-1">Name</label>
//           <input
//             id="name"
//             type="text"
//             name="name"
//             placeholder="Your name"
//             required
//             className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1 ml-1">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             placeholder="Your email"
//             required
//             className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block mb-1 ml-1">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Message..."
//             className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
//           ></textarea>
//         </div>

       
//         <div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }