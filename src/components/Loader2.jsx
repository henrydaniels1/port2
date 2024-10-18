import '../style/Loader.css';
import ExampleComponent from '../example/Scroll'
// import logo from '../assets/logo33.png'



export default function Loader() {
    return (
      <div className=" bg-[#111727] flex justify-center items-center h-screen">
         <ExampleComponent/>
        <div className="loader-5 "></div>  
        {/* <img src={logo} className='h-20 w-20'></img> */}
       
      
</div>
  );
}