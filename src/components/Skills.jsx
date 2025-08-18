import React from 'react'
import SpotlightCard from './UI/SpotLightCard'
import Carousel from './UI/Carousel'
import Carousel1 from './UI/Carousel1'
import PixelTransition from './UI/PixelTransition'
import i2 from '../assets/i2.png'


const Skills = () => {
  return (
    <div id='about' className="bg-[#fff] h-fit relative flex flex-wrap py-5 lg:flex-nowrap overflow-hidden px-4">

      {/* LEFT MAIN GRID */}
      <div
        className="grid grid-cols-2 gap-1 px-8 py-10 relative flex-shrink-0
                   w-full lg:w-[50%] max-w-full"
        style={{ height: "700px" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between h-full">
          {/* Top - Heading */}
          <div className="flex items-start">
            <h1 className="text-4xl md:text-6xl scale-y-[1.1] text-[#bebcbc] leading-tight">
              WHAT I <br /> ACTUALLY <br /> <span className="text-[#505050]">DO..!!</span>
            </h1>
          </div>

          {/* Bottom - Carousel */}
          <div className="flex items-end">
            <div className="relative z-10 w-[180px] md:w-[250px] h-[180px] md:h-[250px] opacity-[.5]">
              <Carousel
                baseWidth={300}
                autoplay
                autoplayDelay={3000}
                pauseOnHover
                loop
                round={false}
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
       {/* RIGHT COLUMN */}
<div className="flex flex-col w-full h-full gap-6">
  {/* Row 1 - Creativity & Code */}
  <div className="flex items-center justify-center h-[30%]">
    <div className="flex items-center justify-center w-full py-7 rounded-2xl  border-2 border-b-gray-600 text-gray-700 shadow-md">
      <h1 className="text-2xl font-semibold text-end tracking-wide">Creativity <br></br> <span className='text-[#bfbfbf] font-extralight text-3xl'>& Code</span></h1>
    </div>
  </div>

  {/* Row 2 - Spotlight Card */}
  <div className="flex items-center justify-center h-[40%]">
    <SpotlightCard
      spotlightColor="rgba(180, 180, 255, 1)"
      className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#f2f2f2] via-[#e0e0e0] to-[#ffffff] shadow-[#bcbcbc] shadow-2xl overflow-hidden relative p-8 flex flex-col justify-center items-center text-center"
    >
      <div className="relative z-10 space-y-3">
        <h2 className="text-2xl font-light tracking-widest text-gray-500 uppercase">
          Define
        </h2>
        <h2 className="text-3xl font-bold tracking-wider text-gray-800 uppercase">
          Design
        </h2>
        <h2 className="text-2xl font-extralight tracking-widest text-gray-400 uppercase">
          Deliver
        </h2>
      </div>
    </SpotlightCard>
  </div>
</div>


        
      </div>

      {/* RIGHT GRID */}
      <div className="grid grid-cols-2 grid-rows-5 gap-3 w-full lg:w-[50%] pt-10 max-h-[700px] mt-10 lg:mt-0">

        {/* Left Top */}
        <div className="bg-transparent rounded-2xl row-span-3 px-1  flex items-center justify-center">

<PixelTransition
  firstContent={
    <img
      src={i2}
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>
        </div>

        {/* Right Top Row 1 */}
        <div className="bg-transparent text-[#525252] rounded-2xl px-4 shadow-md border-1 border-black flex items-center justify-center">
          <h2 className=" text-3xl font-semibold">DEVELOP <br></br> <span className='text-[#afafaf]'>DEPLOY</span> </h2>
        </div>

        {/* Right Top Row 2 */}
        <div className="bg-transparent rounded-2xl text-end px-4 row-span-3  flex items-center justify-center">
          <Carousel1
              />
        </div>

        {/* Middle */}
        <div className="rounded-2xl row-span-1 px-4 flex items-center justify-center"></div>

        {/* Bottom */}
        <div className=" rounded-2xl col-span-2 p-4 flex items-center justify-center">
          <h2 className="text-[#c4c4c4] text-lg md:text-3xl font-extralight text-end">
            From sleek UI/UX to robust full-stack builds, <span className='text-[#585858]'>I create digital products that look and perform impeccably.</span>
          </h2>
        </div>

      </div>
    </div>
  )
}

export default Skills
