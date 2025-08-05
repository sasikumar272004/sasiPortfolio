import React from 'react';
import Landing from './components/landing';
import './App.css'; 
import './index.css'// Ensure you import your CSS file
import Navbar from './components/navbar'; // Import Navbar if needed
import Second from './components/Second';
import SplashCursor from './components/UI/SplashCursor'; // Import SplashCursor if needed
import Third from './components/Third'; // Import Third component if needed
const App = () => {
  return (
    <div className="overflow-hidden ">
      <Landing />
      <Second/>
      <Third />
      
      {/* Add Navbar if needed */}
      {/* <Navbar /> */}
    </div>
  );
};

export default App;