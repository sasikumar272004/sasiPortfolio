import React, { useRef, useEffect } from "react";
import SpotlightCard from "./UI/SpotLightCard";
import Carousel from "./UI/Carousel";
import Carousel1 from "./UI/Carousel1";
import PixelTransition from "./UI/PixelTransition";
import i2 from "../assets/i2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = gsap.utils.toArray(".animate-on-scroll");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // when element enters viewport
            end: "top 30%",   // when element is higher in viewport
            scrub: true,      // animate with scroll
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="bg-white h-fit relative flex flex-wrap py-25 lg:flex-nowrap overflow-hidden px-4"
    >
      {/* LEFT MAIN GRID */}
      <div className="grid grid-cols-2 gap-4 px-4 py-10 w-full lg:w-1/2">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between h-full">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-6xl scale-y-[1.1] text-[#bebcbc] leading-tight">
              WHAT I <br /> ACTUALLY <br />{" "}
              <span className="text-[#505050]">DO..!!</span>
            </h1>
          </div>

          <div className="flex items-end mt-6 animate-on-scroll">
            <div className="relative z-10 w-[180px] md:w-[250px] h-[180px] md:h-[250px] opacity-50">
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
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex items-center justify-center h-[30%] animate-on-scroll">
            <div className="flex items-center justify-center w-full py-7 rounded-2xl border-2 border-b-gray-600 text-gray-700 shadow-md">
              <h1 className="text-2xl font-semibold text-end tracking-wide">
                Creativity <br />{" "}
                <span className="text-[#bfbfbf] font-extralight text-3xl">
                  & Code
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center h-[40%] animate-on-scroll">
            <SpotlightCard
              spotlightColor="#57564F"
              className="w-full h-full rounded-2xl bg-gradient-to-b from-[#f2f2f2] via-[#e0e0e0] to-[#ffffff] shadow-2xl overflow-hidden relative p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="space-y-3">
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
      <div className="grid grid-cols-2 grid-rows-5 gap-3 w-full lg:w-1/2 pt-10 mt-10 lg:mt-0 max-h-[700px]">
        {/* Left Top */}
        <div className="animate-on-scroll flex items-center justify-center rounded-2xl row-span-3">
          <PixelTransition
            firstContent={
              <img src={i2} alt="Pixel Content" className="w-full h-full object-cover" />
            }
            secondContent={
              <div className="w-full h-full grid place-items-center bg-[#111]">
                <p className="text-white font-black text-3xl">Meow!</p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
          />
        </div>

        {/* Right Top Row 1 */}
        <div className="animate-on-scroll flex items-center justify-center rounded-2xl shadow-md border border-black text-[#525252] px-4">
          <h2 className="text-3xl font-semibold text-center">
            DEVELOP <br /> <span className="text-[#afafaf]">DEPLOY</span>
          </h2>
        </div>

        {/* Right Top Row 2 */}
        <div className="animate-on-scroll flex items-center justify-center rounded-2xl row-span-3 text-end px-4">
          <Carousel1 />
        </div>

        {/* Middle empty */}
        <div className="animate-on-scroll rounded-2xl row-span-1 flex items-center justify-center px-4"></div>

        {/* Bottom */}
        <div className="animate-on-scroll rounded-2xl col-span-2 flex items-center justify-center p-4">
          <h2 className="text-[#c4c4c4] text-lg md:text-3xl font-extralight text-end">
            From sleek UI/UX to robust full-stack builds,{" "}
            <span className="text-[#585858]">
              I create digital products that look and perform impeccably.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
