import '../style/Loader.css';
import ExampleComponent from './Scroll'
// import logo from '../assets/logo33.png'



export default function Loader() {
    return (
      <div className=" bg-[#111727] flex justify-center items-center h-screen">
         <ExampleComponent/>
        <div className="loader reveal2 "></div>  
        {/* <img src={logo} className='h-20 w-20'></img> */}
       
      
</div>
  );
}




// import { useEffect, useState } from 'react';
// import '../style/Loader.css';
// import ExampleComponent from '../example/Scroll';
// import logo from '../assets/logo222.png';

// export default function Loader() {
//   const [isScaled, setIsScaled] = useState(false);

//   useEffect(() => {
//     // Set the scale-up class after 1 second
//     const timer = setTimeout(() => {
//       setIsScaled(true);
//     }, 500);
    
//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="loader-container overflow-hidden">
//       <ExampleComponent />
//       <img src={logo} className={`loader-img ${isScaled ? 'scale-up' : ''}`} alt="Logo" />
//     </div>
//   );
// }

