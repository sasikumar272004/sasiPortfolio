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

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
      }`}
    >
      <nav
        className="px-8 sm:px-12 md:px-16 py-3 rounded-full border backdrop-blur-[16px] flex gap-8 sm:gap-12 items-center overflow-x-auto whitespace-nowrap shadow-md transition-all duration-700
          bg-white/10 dark:bg-black/40 border-white/20 dark:border-black/40"
      >
        <ul className="flex gap-8 sm:gap-12 text-base sm:text-lg md:text-xl font-light font-[Playfair Display] tracking-wide text-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer group"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="inline-block relative px-2 py-1">
                {item.name}
                {/* Primary underline */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] rounded-full transition-all duration-500 ease-out bg-white group-hover:w-full group-hover:left-0" />
                {/* Soft glow */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] rounded-full transition-all duration-700 ease-out blur-sm bg-white/40 group-hover:w-full group-hover:left-0" />
              </span>
              {/* Hover halo */}
              <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl pointer-events-none bg-white/20" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
