// import  { useState, useEffect } from 'react';
// import Landing1 from './components/Landing1.jsx';
// import './App.css';
// import Loader from './components/Loader1.jsx'; // Correct import path
// // PrimeFlex for layout utilities (optional)



// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a data fetching process
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Landing1 />
//       )}
//     </>
//   );
// }

// export default App;


import  { useState, useEffect } from 'react';
import Landing1 from './components/Landing1.jsx';
import './App.css';
import Loader from './components/Loader1.jsx';
import FxHome from './components/FxComponents/FxHome.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutFx from './components/FxComponents/AboutFx.jsx';
import GettingS from './components/FxComponents/GettingS.jsx';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
          // <Landing1 />
            <div>
       
        <Routes>
          
           <Route path="/" element={<Landing1 />} />
          <Route path="/fx" element={<FxHome />} />
          <Route path="/aboutfx" element={<AboutFx />} />
          <Route path="/getfx" element={<GettingS />} />
         
          
        </Routes>
      </div>
      ) }
    
    </Router>
  );
}

export default App;


