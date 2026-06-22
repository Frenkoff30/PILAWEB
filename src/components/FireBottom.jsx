import { useEffect, useRef } from 'react'

export default function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const count = 28
    const particles = []
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      const size = 2 + Math.random() * 3.2
      const left = Math.random() * 100
      const duration = 20 + Math.random() * 24
      const delay = -(Math.random() * duration)
      const drift = (Math.random() - 0.5) * 130
      const isSquare = Math.random() > 0.5
      el.style.cssText = `
        position: fixed;
        bottom: -10px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: ${isSquare ? '2px' : '50%'};
        background: rgba(${isSquare ? '70,35,8' : '140,80,15'}, ${0.14 + Math.random() * 0.18});
        pointer-events: none;
        --drift: ${drift}px;
        animation: sawdust ${duration}s ${delay}s linear infinite;
        z-index: 3;
      `
      container.appendChild(el)
      particles.push(el)
    }
    return () => particles.forEach(p => p.remove())
  }, [])

  return (
    <div ref={containerRef} aria-hidden="true" style={{
      position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden',
    }} />
  )
}
