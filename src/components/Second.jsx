import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './UI/ScrollReveal';
import Hyperspeed from './UI/Hyperspeed';
import { motion } from "framer-motion";
import Threads from './UI/Threads';




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

  const paths = [
  // original 4
  "M0,1030 C300,280 600,680 1000,230 S1600,680 2000,80",
  "M0,930 C400,200 800,750 1200,230 S1800,750 2000,70",

  // extra 4 (more dramatic / curvier)
  "M0,1150 C200,100 900,1000 1400,150 S1900,900 2000,90",
  "M0,980 C350,120 850,900 1300,200 S1750,950 2000,60",
];
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

 <div className=' absolute top-[45%]' style={{ width: '100%', height:'100vh' }}>
  <Threads
    amplitude={1.3}
    distance={0.4}
    enableMouseInteraction={true}
  />
</div>

<motion.svg
      viewBox="0 0 2000 600"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-[70vh]"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={'#cddf85'} // unique gradient for each
          strokeWidth={.25 + (i % 1)} // alternate thickness
          fill="none"
          strokeDasharray="104 2 10 50"
          initial={{ strokeDashoffset: 2000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 9 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            filter: `drop-shadow(0px 0px ${
              5 + i * 1.2
            }px rgba(${80 + i * 20},${100 + i * 15},255,0.6))`,
          }}
        />
      ))}

      {/* 8 Gradient definitions */}
      <defs>
        <linearGradient id="grad0" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ffd93d" />
        </linearGradient>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a11cb" />
          <stop offset="100%" stopColor="#2575fc" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#43cea2" />
          <stop offset="100%" stopColor="#185a9d" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff512f" />
          <stop offset="100%" stopColor="#dd2476" />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1f4037" />
          <stop offset="100%" stopColor="#99f2c8" />
        </linearGradient>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f7971e" />
          <stop offset="100%" stopColor="#ffd200" />
        </linearGradient>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4568dc" />
          <stop offset="100%" stopColor="#b06ab3" />
        </linearGradient>
        <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
      </defs>
    </motion.svg>


</div>

      
    </div>
  );
};

export default Second;
 