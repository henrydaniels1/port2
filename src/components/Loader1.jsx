import '../style/Loader.css';
import ExampleComponent from '../example/Scroll'



export default function Loader() {
    return ( 
      <div className=" bg-gray-900 flex justify-center items-center h-screen">
         <ExampleComponent/>
       <div className="loader reveal2 "></div> 
       
      
</div>
  );
}
