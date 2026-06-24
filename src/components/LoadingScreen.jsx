import { useState, useEffect, useRef } from 'react'

// Wood-grain texture for the two cream panels
const grain = `
  repeating-linear-gradient(91deg,
    transparent 0px, transparent 7px,
    rgba(120,60,15,0.05) 7px, rgba(120,60,15,0.05) 8px),
  repeating-linear-gradient(89deg,
    transparent 0px, transparent 22px,
    rgba(90,45,10,0.04) 22px, rgba(90,45,10,0.04) 23px)
`

function Blade() {
  return (
    <svg width="76" height="76" viewBox="0 0 100 100" className="loader-spin"
      style={{ display: 'block', filter: 'drop-shadow(0 4px 18px rgba(200,148,58,0.55))' }}>
      {Array.from({ length: 20 }).map((_, i) => {
        const a = (i / 20) * Math.PI * 2
        const aOff = (0.5 / 20) * Math.PI * 2
        const inner = 36, outer = 48
        return (
          <path key={i}
            d={`M${50 + Math.cos(a) * inner},${50 + Math.sin(a) * inner} L${50 + Math.cos(a - aOff) * outer},${50 + Math.sin(a - aOff) * outer} L${50 + Math.cos(a + aOff) * outer},${50 + Math.sin(a + aOff) * outer} Z`}
            fill="#C8943A"/>
        )
      })}
      <circle cx="50" cy="50" r="36" fill="#1A0C04"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#C8943A" strokeWidth="2"/>
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2
        return <circle key={i} cx={50 + Math.cos(a) * 20} cy={50 + Math.sin(a) * 20} r="2.5" fill="#C8943A" opacity="0.5"/>
      })}
      <circle cx="50" cy="50" r="7" fill="#C8943A"/>
      <circle cx="50" cy="50" r="3" fill="#1A0C04"/>
    </svg>
  )
}

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0)
  const sparkRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      const t = setTimeout(() => setPhase(4), 500)
      setPhase(1)
      return () => clearTimeout(t)
    }
    const timers = [
      setTimeout(() => setPhase(1), 100),   // logo in
      setTimeout(() => setPhase(2), 1050),  // saw cuts down
      setTimeout(() => setPhase(3), 1900),  // halves split apart
      setTimeout(() => setPhase(4), 2650),  // unmount
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  // Sawdust flying off the blade during the cut
  useEffect(() => {
    if (phase !== 2) return
    const layer = sparkRef.current
    if (!layer) return
    const cx = window.innerWidth / 2
    const start = performance.now()
    const dur = 850
    const particles = []
    let raf

    const spawn = (x, y) => {
      const el = document.createElement('div')
      const size = 2 + Math.random() * 4.5
      const square = Math.random() > 0.5
      el.style.cssText = `position:fixed;left:0;top:0;width:${size}px;height:${size}px;border-radius:${square ? '1px' : '50%'};background:rgba(${square ? '90,48,12' : '190,128,44'},${0.6 + Math.random() * 0.35});pointer-events:none;will-change:transform,opacity;`
      layer.appendChild(el)
      let vx = (Math.random() - 0.5) * 11
      let vy = -2 - Math.random() * 5
      let px = x, py = y, life = 0
      const maxLife = 30 + Math.random() * 26
      let rot = Math.random() * 360
      const rs = (Math.random() - 0.5) * 30
      const tick = () => {
        life++; vy += 0.34; vx *= 0.98; px += vx; py += vy; rot += rs
        el.style.transform = `translate(${px}px,${py}px) rotate(${rot}deg)`
        el.style.opacity = Math.max(0, 1 - life / maxLife)
        if (life < maxLife) requestAnimationFrame(tick); else el.remove()
      }
      requestAnimationFrame(tick)
      particles.push(el)
    }

    const loop = (now) => {
      const t = Math.min((now - start) / dur, 1)
      const y = t * window.innerHeight
      for (let i = 0; i < 4; i++) spawn(cx + (Math.random() - 0.5) * 18, y)
      if (t < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); particles.forEach(p => p.remove()) }
  }, [phase])

  if (phase === 4) return null

  const cutting = phase >= 2
  const split = phase >= 3
  const panelTransition = 'transform 0.75s cubic-bezier(0.76,0,0.24,1)'

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: split ? 'none' : 'all', overflow: 'hidden' }}>

      {/* LEFT panel */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '50.2%', height: '100%',
        background: '#F0E6CC', backgroundImage: grain,
        transform: split ? 'translateX(-101%)' : 'translateX(0)',
        transition: panelTransition,
        boxShadow: split ? '8px 0 40px rgba(0,0,0,0.2)' : 'none',
        zIndex: 1,
      }}/>

      {/* RIGHT panel */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50.2%', height: '100%',
        background: '#F0E6CC', backgroundImage: grain,
        transform: split ? 'translateX(101%)' : 'translateX(0)',
        transition: panelTransition,
        boxShadow: split ? '-8px 0 40px rgba(0,0,0,0.2)' : 'none',
        zIndex: 1,
      }}/>

      {/* Kerf (cut line) growing down the seam */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, width: '3px', height: '100%',
        transformOrigin: 'top',
        transform: `translateX(-50%) scaleY(${cutting ? 1 : 0})`,
        transition: 'transform 0.85s linear',
        background: 'linear-gradient(to bottom, rgba(60,30,8,0.55), rgba(120,60,15,0.25))',
        opacity: split ? 0 : 1,
        zIndex: 2,
      }}/>

      {/* Logo (centered, fades as the cut begins) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '22px',
        opacity: phase >= 2 ? 0 : (phase >= 1 ? 1 : 0),
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.82)',
        transition: 'opacity 0.45s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: 'none',
      }}>
        <img src="/images/logo-good.png" alt="" style={{ width: '150px', height: 'auto' }}/>
        <div style={{ width: '60px', height: '2px', borderRadius: '1px', background: '#C8943A', opacity: 0.6 }}/>
      </div>

      {/* Saw blade slicing top → bottom */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, zIndex: 5,
        transform: cutting ? 'translate(-50%, calc(100vh + 60px))' : 'translate(-50%, -70px)',
        transition: cutting ? 'transform 0.85s linear' : 'none',
        opacity: cutting ? 1 : 0,
      }}>
        <Blade />
      </div>

      {/* Sawdust layer */}
      <div ref={sparkRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10000 }}/>
    </div>
  )
}
