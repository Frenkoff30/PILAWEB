import { useEffect, useRef, useState } from 'react'

export default function RingCounter() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let frame = 0
        const total = 60
        const tick = () => {
          frame++
          setProgress(Math.min(frame / total, 1))
          if (frame < total) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      }
    }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const rings = 12
  const visibleRings = Math.floor(progress * rings)

  return (
    <div ref={ref} className="flex items-center gap-10 py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">

        {/* Animated ring SVG */}
        <div style={{ width: '180px', height: '180px', shrink: 0 }}>
          <svg viewBox="0 0 200 200" fill="none" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="rc" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5C2E0A" stopOpacity="0.45"/>
                <stop offset="100%" stopColor="#3A1A06" stopOpacity="0.0"/>
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#rc)" opacity={progress}/>
            {Array.from({ length: rings }).map((_, i) => {
              const r = 90 - i * 6.5
              const visible = i < visibleRings
              return (
                <circle key={i} cx={100 + (i % 2 ? 1 : -0.5)} cy={100 + (i % 3 === 0 ? 0.8 : -0.4)} r={r}
                  stroke={i < 2 ? '#2A1005' : '#5A2A0A'}
                  strokeWidth={i < 2 ? 2 : 1}
                  opacity={visible ? (0.4 + i * 0.04) : 0}
                  style={{ transition: `opacity 0.4s ease ${i * 0.06}s` }}/>
              )
            })}
            <circle cx="100" cy="100" r="10" fill="rgba(120,55,15,0.6)"
              opacity={progress} style={{ transition: 'opacity 0.5s ease 0.6s' }}/>
            <circle cx="100" cy="100" r="4" fill="rgba(200,148,58,0.8)"
              opacity={progress} style={{ transition: 'opacity 0.5s ease 0.7s' }}/>
          </svg>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-12">
          {[
            { value: '30+', label: 'Let zkušeností' },
            { value: '1000+', label: 'm³ ročně' },
            { value: '100%', label: 'Na míru' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-display" style={{
                fontSize: 'clamp(2.5rem,5vw,3.5rem)',
                color: '#C8943A',
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}>
                {value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[3px] mt-1" style={{ color: 'rgba(26,12,4,0.55)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
