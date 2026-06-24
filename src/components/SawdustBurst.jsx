import { useEffect, useRef } from 'react'

// Bursts a puff of sawdust at the click point of any call-to-action.
// Targets: tel: links, form submit buttons, and anything with [data-burst].
export default function SawdustBurst() {
  const layerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const layer = layerRef.current
    if (!layer) return

    const onClick = (e) => {
      const cta = e.target.closest?.('a[href^="tel:"], button[type="submit"], [data-burst]')
      if (!cta) return
      burst(e.clientX, e.clientY, layer)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <div ref={layerRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }} />
}

function burst(x, y, layer) {
  const count = 24
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    const size = 2 + Math.random() * 5
    const square = Math.random() > 0.5
    el.style.cssText = `position:fixed;left:0;top:0;width:${size}px;height:${size}px;border-radius:${square ? '1px' : '50%'};background:rgba(${square ? '90,48,12' : '190,128,44'},${0.6 + Math.random() * 0.35});pointer-events:none;will-change:transform,opacity;`
    layer.appendChild(el)

    const angle = Math.random() * Math.PI * 2
    const speed = 3 + Math.random() * 9
    let vx = Math.cos(angle) * speed
    let vy = Math.sin(angle) * speed - 3 // slight upward bias
    let px = x, py = y, life = 0
    const maxLife = 32 + Math.random() * 30
    let rot = Math.random() * 360
    const rs = (Math.random() - 0.5) * 32

    const tick = () => {
      life++
      vy += 0.35   // gravity
      vx *= 0.97   // drag
      px += vx
      py += vy
      rot += rs
      el.style.transform = `translate(${px}px,${py}px) rotate(${rot}deg)`
      el.style.opacity = Math.max(0, 1 - life / maxLife)
      if (life < maxLife) requestAnimationFrame(tick)
      else el.remove()
    }
    requestAnimationFrame(tick)
  }
}
