
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



import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgpyrqj");

  if (state.succeeded) {
    return <p className="text-center text-lg font-bold text-green-600">Thanks for joining!</p>;
  }

  return (
    <section id="contact" className=" dark:text-gray-800 h-full w-[97%] lg:w-[95%] mx-auto">
      <form onSubmit={handleSubmit} className="container w-full max-w-xl px-4 py-10 mx-auto space-y-10 rounded-md shadow dark:bg-gray-50">
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">Name</label>
          <input 
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 ml-1">Email Address</label>
          <input 
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 ml-1">Message</label>
          <textarea 
            id="message"
            name="message"
            placeholder="Message..."
            required
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
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
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
