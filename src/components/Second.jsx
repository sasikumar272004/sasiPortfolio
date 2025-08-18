import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './UI/ScrollReveal';
import Hyperspeed from './UI/Hyperspeed';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const zoomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        zoomRef.current,
        { scale: 0.65,
          borderRadius: '100px' },
          
         
        
        {
          scale: 1,
          borderRadius: '0px',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: zoomRef.current,
            start: 'top 65%',
            end: '+=60%',
            scrub: true,
            anticipatePin: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full pt-50 text-white bg-black overflow-x-hidden">
      <div className=" flex items-center justify-center text-center px-6">
        <div className="rounded-[2rem] w-fit px-6  mx-auto">
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur={false}
            baseRotation={1}
            blurStrength={30}
          >
            I DON'T JUST BUILD WEBSITES; I DESIGN EXPERIENCES THAT SPEAK.
          </ScrollReveal>
        </div>
      </div>
      {/* Zoom Section (Fullscreen + Parallax) */}
      <div
        ref={zoomRef}
        className="w-screen h-[100vh] bg-[#fcfcfc] overflow-hidden flex items-center justify-center text-5xl font-bold"
      >

  

<div className="absolute gs top-10 right-10 font-mono text-[#333] opacity-80 text-end">
  <span className="block text-sm "></span>

</div>
<div className='absolute  text-center m:text-2xl md:text-4xl lg:text-5xl xl:text-5xl gs  text-gray-950'>
  DESIGNED TO DOMINATE  
• LIT TO EXPRESS  <br></br>
  BUILT TO GLOW

</div>




<div className="absolute bottom-6  right-10 text-xs text-[#e3dcdc] italic">
  <span className=" ">double tap</span>
</div>
 <div className="pointer-events-none absolute  bottom-0 w-full h-[200px] z-10" 
       style={{ 
         background: 'linear-gradient(to bottom, transparent ,  rgba(255,255,255,1))' 
       }} 
  />




        <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
     distortion: 'turbulentDistortion',
    length: 500,
    roadWidth: 25,
    islandWidth: 2,
    lanesPerRoad: 5,
    fov: 100,
    fovSpeedUp: 160,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 200,
    lightPairsPerRoadWay: 200,
    shoulderLinesWidthPercentage: 2,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.1, 400 * 0.2],
    carLightsRadius: [0.15, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 0],
  colors: {
  roadColor: 0xfafafa,         // Extremely light road (almost white)
  islandColor: 0xdddddd,       // Soft mid-light grey
  background: 0xffffff,        // Pure white background
  shoulderLines: 0xcccccc,     // Soft grey for lane edges
  brokenLines: 0xdddddd,       // Just visible broken lines

  // Shinier, sleek-looking greys for car bodies
 leftCars: [0xD856BF, 0x6750A2, 0xC247AC], 
 rightCars: [0xdadafa, 0xBEBAE3, 0x8F97E4], 

  sticks: 0xbbbbbb,            // Subtle stick poles
}




      // Deep reddish-purple neon glow


  }}
/>
      </div>

      
    </div>
  );
};

export default Second;
 