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
import Loader from './components/Loader2.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
            <div>
       
        <Routes>
           <Route path="/" element={<Landing1 />} />
        </Routes>
      </div>
      ) }
    
    </Router>
  );
}

export default App;


