// import '../style/Loader.css';
// import ExampleComponent from '../example/Scroll'

// export default function Loader() {
//     return (
//       <div className=" bg-[#111727] flex justify-center items-center h-screen">
//          <ExampleComponent/>
//         <div className="loader-5 "></div>

// </div>
//   );
// }

import '../style/Loader.css'
import ExampleComponent from '../example/Scroll'
import a13 from '../assets/logo8.png'

export default function Loader() {
  return (
    <div className='bg-[#111727] flex justify-center items-center h-screen'>
      <ExampleComponent />
      <div className='loader-image'>
        <img src={a13} className='' alt='Loading...' />
      </div>
    </div>
  )
}
