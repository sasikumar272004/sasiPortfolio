import React from 'react'
import Ballpit from './UI/BallPit'
import ScrollVelocity from './UI/ScrollVelocity'

const Third = () => {
  return (
    <div>
      <div
        id='page5'
        className='h-[100vh] relative z-50 overflow-hidden page5 bg-[#000000]'
        style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className='fixed h-[100vh] w-full bottom-0'>

          <div
            className='h-[100vh] rounded-2xl bg-[#fff]'
            style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}
          >

            {/* Scroll Text */}
            <ScrollVelocity
              texts={['React Bits', 'Scroll Down']}
              velocity={50}
              className="custom-scroll-text absolute top-0 left-0 text-black text-2xl font-bold"
            />

            {/* Ballpit Animation */}
            <Ballpit
              count={120}
              gravity={0.0}
              friction={1}
              wallBounce={.5}
              followCursor={true}
              colors={['#5409DA', '#0118D8', '#001BB7', '#fff']}
            />

            {/* Centered Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-6xl px-6 text-center text-zinc-900">
  
  {/* Top Tag */}
  <span className="inline-block mb-6 px-5 py-[0.55rem] text-xs md:text-sm font-medium uppercase tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-sm">
    💻 Coded 500,000+ Lines
  </span>

  {/* Heading */}
  <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-700 to-zinc-500 tracking-tight">
    Building the future with <span className="text-purple-700">creativity</span> and <span className="text-indigo-600">code</span>.
  </h2>

  {/* Buttons */}
  <div className="flex justify-center flex-wrap gap-6 mb-8">
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-2.5 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-full shadow-md hover:scale-[1.05] hover:brightness-110 transition duration-300 ease-in-out"
    >
      🚀 View GitHub
    </a>

    <a
      href="/path-to-resume.pdf"
      download
      className="inline-flex items-center justify-center px-6 py-2.5 text-sm md:text-base font-semibold text-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out hover:scale-[1.05]"
    >
      📄 Download Resume
    </a>
  </div>

  {/* Bottom Tag */}
  <span className="inline-block mt-4 px-5 py-[0.55rem] text-xs md:text-sm font-medium tracking-wide text-white bg-gradient-to-r from-purple-700 to-pink-300 rounded-full shadow-sm">
    🛠️ Built 20+ Real-World Projects
  </span>
</div>





          </div>
        </div>
      </div>
    </div>
  )
}

export default Third
