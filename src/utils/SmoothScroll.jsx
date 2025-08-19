// src/utils/SmoothScroll.jsx
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 10,     // smooth duration
      lerp: 0.05,        // smooth inertia (lower = smoother, slower)
      smoothWheel: true, // enable smooth wheel scroll
      smoothTouch: false // keep touch scroll normal
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // cleanup
    }
  }, [])

  return <>{children}</>
}
