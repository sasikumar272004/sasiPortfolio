import React from 'react';
import Landing from './components/landing';
import './App.css'; 
import './index.css';
import Navbar from './components/navbar';
import Second from './components/Second';
import SplashCursor from './components/UI/SplashCursor';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar is fixed, visible across all pages */}
      <Navbar />

      {/* Each section should start below the fixed navbar */}
      <div >
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
