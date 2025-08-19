import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const SKILL_PAGES = [
  {
    title: "Backend & Languages",
    skills: [
      { name: "Java", level: 60 },
      { name: "Node.js", level: 85 },
      { name: "express", level: 90 },
     
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 60 },
    ],
  },
  {
    title: "Fullstack & Tools",
    skills: [
      { name: "MERN Stack", level: 85 },
      { name: "REST APIs", level: 75 },
      { name: "Docker", level: 55 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel1({
  items = SKILL_PAGES,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
   <div
  ref={containerRef}
  className="relative overflow-hidden p-4 rounded-[24px] border border-[#333] h-[350px] w-[350px] bg-transparent"
>
  <motion.div
    className="flex h-full"
    drag="x"
    {...dragProps}
    style={{
      width: itemWidth,
      gap: `${GAP}px`,
      x,
    }}
    onDragEnd={handleDragEnd}
    animate={{ x: -(currentIndex * trackItemOffset) }}
    transition={effectiveTransition}
    onAnimationComplete={handleAnimationComplete}
  >
    {carouselItems.map((page, index) => (
      <motion.div
        key={index}
        className="relative shrink-0 flex flex-col items-start justify-start 
                   bg-[#9c9b9b] border border-[#2a2a2a] 
                   rounded-[16px] p-6 overflow-hidden cursor-grab active:cursor-grabbing 
                   h-full shadow-md shadow-black/40"
        style={{ width: itemWidth }}
        transition={effectiveTransition}
      >
        <h2 className="text-[#fff] font-semibold text-lg tracking-wide mb-6">
          {page.title}
        </h2>
        <div className="flex flex-col gap-5 w-full">
          {page.skills.map((skill, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between mb-2 text-xs text-gray-100 font-medium tracking-wide">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-[#222] rounded-full h-[6px] overflow-hidden">
                <div
                  className="h-[6px] rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Indicators */}
  <div className="flex w-full justify-center mt-4">
    <div className="flex w-[120px] justify-between px-4">
      {items.map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-200 ${
            currentIndex % items.length === index
              ? "bg-gradient-to-r from-gray-100 to-gray-400 shadow-sm shadow-gray-500"
              : "bg-gray-600"
          }`}
          animate={{
            scale: currentIndex % items.length === index ? 1.3 : 1,
          }}
          onClick={() => setCurrentIndex(index)}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      ))}
    </div>
  </div>
</div>

  );
}