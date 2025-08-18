import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GridMotion = ({ items = [], gradientColor = "#0000" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="w-full h-full overflow-hidden">
      <section
        className="w-full h-[150vh] overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>

        <div className="absolute z-[2] rotate-[-15deg] flex flex-col gap-4">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-4"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              style={{ willChange: "transform" }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div
                    key={itemIndex}
                    className="relative"
                    style={{ width: "350px", height: "250px" }}
                  >
                    <a
                      href="https://github.com/sasikumar272004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem] cursor-pointer hover:scale-105 transition-transform">
                        {content && (content.includes("/assets/") ? (
                          <img
                            src={content}
                            alt={`grid-item-${itemIndex}`}
                            className="w-full h-full object-cover absolute top-0 left-0"
                          />
                        ) : (
                          <div className="p-4 text-center z-[1]">{content}</div>
                        ))}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;
