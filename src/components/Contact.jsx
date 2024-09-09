import { useEffect, useRef } from 'react';
import gm from '../assets/gmail.png';
import ad from '../assets/location.png';
import { useForm, ValidationError } from '@formspree/react';
import anime from 'animejs';
import Phone from '../icons/phone.jsx'

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

<div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {/* twitter */}
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            {/* ig */}
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            {/* facebook */}
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-violet-600"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            
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