import React from "react";
import GridMotion from "./UI/GridMotion";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.png";
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";
import s14 from "../assets/s14.png";
import s15 from "../assets/s15.png";
import s16 from "../assets/s16.png";
import s17 from "../assets/s17.png";
import s18 from "../assets/s18.png";
import s19 from "../assets/s19.png";
import s20 from "../assets/s20.png";
import s21 from "../assets/s21.png";
import s22 from "../assets/s22.png";
import s23 from "../assets/s23.png";

const items = [
  s5, s5, s2, s19, s3,
  s6, s7, s8, s9, s4,
  s11, s18, s13, s14, s15,
  s10, s17, s21, s16, s8,s22,s23,s1,s12,s20,s14,s22
];

const Fourth = () => {
  return (
    <div id="project" className="h-fit  z-[2000] flex flex-col justify-end overflow-hidden bg-[#fcfcfc]">
      <div className="h-[150vh] w-full relative overflow-hidden">
        <h1 className="absolute top-0 left-0 text-7xl lg:text-7xl md:text-5xl sm:text-2xl pt-7 gss">MY WORK </h1>
        <GridMotion items={items} />
      </div>
     
    </div>
  );
};

export default Fourth;
