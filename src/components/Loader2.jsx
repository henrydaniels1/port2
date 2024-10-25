import '../style/Loader.css';
import ExampleComponent from '../example/Scroll'

export default function Loader() {
    return (
      <div className=" bg-[#111727] flex justify-center items-center h-screen">
         <ExampleComponent/>
        <div className="loader-5 "></div>  

</div>
  );
}