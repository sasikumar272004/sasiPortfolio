import React from 'react';
import TextCursor from './UI/TextCursor';
import ScrollReveal from './UI/ScrollReveal';
import LightRays from './UI/LightRays';


const Second = () => {
  return (
    <div className="relative h-screen w-full z-0 bg-black text-white overflow-hidden">
      
      {/* LightRays positioned absolutely to sit behind content */}
      

      {/* Content centered */}
      <div className="relative z-0 flex items-center justify-center h-full px-6 text-center">
       <ScrollReveal 
  baseOpacity={0.05}
  enableBlur={false}
  baseRotation={1}
  blurStrength={30}
>
 I'm a web developer driven by creativity and precision.
I don’t just build websites; I design experiences that speak and feel.
Because the web isn’t just a space — it’s an emotion, and I bring it to life.

</ScrollReveal>
 
      </div>
      
    </div>
  );
};

export default Second;
