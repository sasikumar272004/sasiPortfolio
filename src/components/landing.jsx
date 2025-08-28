import React from 'react';
import Navbar from './navbar';
import '../App.css';
import ImageTrail from './UI/ImageTrail';

import Threads from './UI/Threads';
import I1 from '../assets/i1.png';
import I2 from '../assets/i2.png';
import I3 from '../assets/i3.png';
import I4 from '../assets/i4.png';
import I5 from '../assets/i5.png';






const Landing = () => {
  return (
<div id='home' className="relative px-6 text-white h-screen z-20 bg-black transition-all duration-500 ease-in-out">
      
     

      
<div className='z-40' style={{ height: '100vh', position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    key={6}
    items={[
      I1,
      I2,
      I3, 
      I4,
      I5,
       I1,
      I2,
      I3, 
      
      // ...
    ]}
    variant={6}
  />
</div>


      

      {/* HI I'M - Top Left */}
      <h1 className="absolute ss top-30 left-10 text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-mono text-amber-400 tracking-widest font-italiana">
  HELLO<br />I'M
</h1>


      {/* SASI KUMAR - Bottom Right */}
      <div
        className="absolute bottom-30 mt font-extrabold right-10 font-extralight scale-y-[1.4] text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold font-sans text-transparent bg-clip-text tracking-tight text-end"
        
      >
        SASI <br></br> KUMAR
      </div>
      <div className=' absolute top-[45%]' style={{ width: '100%', height:'100vh' }}>

</div>
      
      



    </div>
  );
};

export default Landing;
