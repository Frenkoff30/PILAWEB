import { useEffect, useRef, useState } from 'react'

export default function Statement() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.max(0, Math.min(1, 1 - rect.top / (vh * 0.7)))
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="relative overflow-hidden" style={{
      background: '#1A0C04',
      padding: 'clamp(60px,12vw,140px) 24px',
    }}>
      {/* Subtle wood grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(88deg, transparent 0px, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px),
          repeating-linear-gradient(91deg, transparent 0px, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)
        `,
      }}/>

      {/* Amber glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,148,58,0.08) 0%, transparent 60%)',
      }}/>

      {/* Animated ring behind text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%,-50%) scale(${0.6 + progress * 0.5})`,
        opacity: progress * 0.15,
        transition: 'none',
      }}>
        <svg viewBox="0 0 400 400" fill="none" style={{ width: 'clamp(300px,50vw,600px)', height: 'auto' }}>
          {[180,155,130,108,88,70,54,40,28,18,10].map((r, i) => (
            <circle key={r} cx="200" cy="200" r={r}
              stroke="rgba(200,148,58,0.5)" strokeWidth={i < 2 ? 1.5 : 0.8}
              opacity={0.3 + i * 0.04}/>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center" style={{ zIndex: 1 }}>

        {/* Main words */}
        <div className="text-display" style={{
          fontSize: 'clamp(3rem,10vw,8rem)',
          lineHeight: '0.92',
          color: '#F5EDD8',
        }}>
          <span className="block" style={{
            opacity: Math.min(1, progress * 2.5),
            transform: `translateY(${(1 - Math.min(1, progress * 2.5)) * 30}px)`,
            transition: 'none',
          }}>KVALITNÍ DŘEVO</span>
          <span className="block" style={{
            color: '#C8943A',
            opacity: Math.min(1, Math.max(0, (progress - 0.2) * 2.5)),
            transform: `translateY(${(1 - Math.min(1, Math.max(0, (progress - 0.2) * 2.5))) * 30}px)`,
            transition: 'none',
          }}>POCTIVÁ PRÁCE</span>
        </div>

        {/* Divider line */}
        <div style={{
          width: `${Math.min(progress * 200, 100)}%`,
          maxWidth: '200px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, #C8943A, transparent)',
          margin: '32px auto',
          opacity: Math.min(1, progress * 2),
        }}/>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem,2.5vw,1.3rem)',
          color: 'rgba(245,237,216,0.55)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.7,
          opacity: Math.min(1, Math.max(0, (progress - 0.35) * 3)),
          transform: `translateY(${(1 - Math.min(1, Math.max(0, (progress - 0.35) * 3))) * 20}px)`,
        }}>
          Každý kus zpracováváme s&nbsp;péčí a&nbsp;respektem ke&nbsp;dřevu. Od&nbsp;roku 1990.
        </p>

      </div>
    </div>
  )
}
