import  { useState, useEffect } from 'react';
import Landing1 from './components/Landing1.jsx';
import './App.css';
import Loader from './components/LOader.jsx'; // Correct import path

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Landing1 />
      )}
    </>
  );
}

export default App;
