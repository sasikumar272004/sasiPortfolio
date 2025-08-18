import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShow(currentScrollY < lastScrollY.current || currentScrollY < 10);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'Projects', id: '#project' },
    { name: 'About', id: '#about' },
    { name: 'Contact', id: '#contact' },
  ];

  // Smooth scroll using GSAP
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      gsap.to(window, {
        duration: 1,             // 1 second smooth scroll
        scrollTo: { y: element, offsetY: 70 }, // offset for navbar
        ease: 'power2.inOut',    // smooth easing
      });
    }
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-[linear] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
      }`}
    >
      <nav className="px-6 sm:px-10 md:px-14 lg:px-16 py-2 sm:py-3 lg:py-4 rounded-full bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-3xl border border-gray-700/50 shadow-[0_0_100px_rgba(0,0,0,0.2)] hover:shadow-[0_0_160px_rgba(0,0,0,0.3)] transition-all duration-700 flex gap-6 sm:gap-10 md:gap-12 lg:gap-16 items-center overflow-x-auto whitespace-nowrap">
        <ul className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-14 text-sm sm:text-base md:text-[17px] lg:text-[18px] font-medium font-[Playfair Display] tracking-wide text-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="group relative cursor-pointer transition-all duration-500 hover:text-yellow-300"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="inline-block relative px-1 sm:px-2">
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-300 rounded-full transition-all duration-500 ease-out group-hover:w-full group-hover:left-0" />
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-300/20 blur-sm rounded-full transition-all duration-700 ease-out group-hover:w-full group-hover:left-0" />
              </span>
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 blur-xl bg-yellow-300/20 pointer-events-none" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
