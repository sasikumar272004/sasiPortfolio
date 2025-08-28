import React, { useEffect } from 'react';
import Landing from './components/landing';
import './App.css'; 
import './index.css';
import Navbar from './components/navbar';
import Second from './components/Second';
import SplashCursor from './components/UI/SplashCursor';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Skills from './components/Skills';

// ✅ Import GA
import ReactGA from "react-ga4";

const App = () => {
  useEffect(() => {
    // ✅ Initialize Google Analytics
    ReactGA.initialize("G-XRPLCRK4GV");

    // ✅ Send pageview on first load
    ReactGA.send("pageview");
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        <Landing />
        <Second />
        <Skills />
        <Fourth />
        <Third />
      </div>
    </div>
  );
};

export default App;
