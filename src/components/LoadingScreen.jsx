import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    setTimeout(() => setPhase(1), 100)
    setTimeout(() => setPhase(2), 1200)
    setTimeout(() => setPhase(3), 1800)
  }, [])

  if (phase === 3) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#1A0C04',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px',
      opacity: phase === 2 ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: phase >= 2 ? 'none' : 'all',
    }}>
      <img src="/images/logo good.png" alt=""
        style={{
          width: '120px', height: 'auto',
          filter: 'brightness(0) invert(1)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}/>
      <div style={{
        width: '60px', height: '2px', borderRadius: '1px',
        background: '#C8943A',
        opacity: phase >= 1 ? 0.6 : 0,
        transform: phase >= 1 ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s',
      }}/>
    </div>
  )
}
