import { useEffect, useRef } from 'react'

export default function SawDivider() {
  const bladeRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bladeRef.current) {
        bladeRef.current.style.transform = `rotate(${window.scrollY * 0.8}deg)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative flex items-center justify-center py-6" style={{ overflow: 'visible' }}>
      {/* Left line */}
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,148,58,0.3))' }}/>

      {/* Saw blade */}
      <div className="mx-4 shrink-0" style={{ width: '56px', height: '56px' }}>
        <svg ref={bladeRef} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', willChange: 'transform' }}>
          {/* Teeth */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2
            const inner = 34
            const outer = 46
            const aOff = (0.5 / 24) * Math.PI * 2
            return (
              <path key={i}
                d={`M${50 + Math.cos(a) * inner},${50 + Math.sin(a) * inner} L${50 + Math.cos(a - aOff) * outer},${50 + Math.sin(a - aOff) * outer} L${50 + Math.cos(a + aOff) * outer},${50 + Math.sin(a + aOff) * outer} Z`}
                fill="rgba(160,90,20,0.55)"/>
            )
          })}
          {/* Blade body */}
          <circle cx="50" cy="50" r="34" fill="rgba(200,148,58,0.18)" stroke="rgba(160,90,20,0.4)" strokeWidth="1.5"/>
          {/* Inner rings */}
          <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(160,90,20,0.2)" strokeWidth="0.8"/>
          <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(160,90,20,0.15)" strokeWidth="0.6"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="6" fill="rgba(120,65,15,0.35)" stroke="rgba(160,90,20,0.5)" strokeWidth="1"/>
          <circle cx="50" cy="50" r="2.5" fill="rgba(200,148,58,0.6)"/>
        </svg>
      </div>

      {/* Right line */}
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,148,58,0.3))' }}/>
    </div>
  )
}
