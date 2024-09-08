
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

import gm from '../assets/gmail.png';
import ad from '../assets/location.png';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgpyrqj");

  if (state.succeeded) {
    return <p className="text-center text-lg font-bold text-green-600">Thanks for Contacting!</p>;
  }

  return (
    <section id="contact" className="dark:text-gray-800 h-full w-[97%] lg:w-[95%] mx-auto flex flex-col lg:flex-row justify-between shadow-2xl border-[1.5px]">
      
      {/* Left Green Section */}
      <div className="bg-gradient-to-br w-full lg:w-[50%] lg:py-8 lg:px-8 py-4 px-2 flex flex-col justify-center text-black">
        <div className="mb-8">
          <p className="text-4xl font-bold mb-8 text-teal-900">Contact Us</p>
          <p className="text-lg font-medium">We&apos;d love to hear from you! Reach out to us at:</p>
        </div>
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
           <div className="w-8 h-8"><img src={ad} alt="" className="w-full h-full" /></div>
            <address>No.23 Oke Avenue, Ibadan.</address>
          </div>
          <div className="flex items-center space-x-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='w-8 h-8'>
<path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
</svg>
            <p>08085833176</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8"><img src={gm} alt="" className="w-full h-full scale-90" /></div>
            <p>henrydanielchibuzor@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className='w-full lg:w-[50%]'>
        <form onSubmit={handleSubmit} className="container w-full lg:px-6 px-2 py-10 mx-auto space-y-10   dark:bg-gray-50">
          
          <div>
            <label htmlFor="name" className="block mb-1 ml-1 font-medium">Name</label>
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
            <label htmlFor="email" className="block mb-1 ml-1 font-medium">Email Address</label>
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
            <label htmlFor="message" className="block mb-1 ml-1 font-medium">Message</label>
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
