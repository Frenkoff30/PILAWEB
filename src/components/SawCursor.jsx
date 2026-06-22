import { useEffect, useRef } from 'react'

// Saw blade cursor that throws sawdust as it moves
export default function SawCursor() {
  const bladeRef = useRef(null)
  const sparkLayer = useRef(null)

  useEffect(() => {
    // Only on devices with a fine pointer (desktop mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const blade = bladeRef.current
    const layer = sparkLayer.current
    if (!blade || !layer) return

    const styleTag = document.createElement('style')
    styleTag.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(styleTag)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let posX = mouseX
    let posY = mouseY
    let lastX = mouseX
    let lastY = mouseY
    let rotation = 0
    let downForce = false
    let curScale = 1

    const particles = []

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onDown = () => { downForce = true }
    const onUp = () => { downForce = false }

    // Detect hover over interactive elements -> tint blade
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, input, textarea, label, [role="button"]')
      blade.dataset.active = interactive ? '1' : '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })

    function spawnDust(x, y, speed, dirX, dirY) {
      const el = document.createElement('div')
      const size = 1.5 + Math.random() * 3.5
      const isSquare = Math.random() > 0.45
      el.style.cssText = `
        position:fixed; left:0; top:0; width:${size}px; height:${size}px;
        border-radius:${isSquare ? '1px' : '50%'};
        background: rgba(${isSquare ? '90,48,12' : '180,120,40'}, ${0.55 + Math.random() * 0.35});
        pointer-events:none; will-change:transform,opacity; z-index:9998;
      `
      layer.appendChild(el)

      // shoot mostly opposite to motion + downward gravity
      const spread = (Math.random() - 0.5) * 2.4
      let vx = -dirX * speed * (0.12 + Math.random() * 0.18) + spread
      let vy = -dirY * speed * (0.12 + Math.random() * 0.18) + (Math.random() * 0.5)
      let px = x + (Math.random() - 0.5) * 10
      let py = y + (Math.random() - 0.5) * 10
      let life = 0
      const maxLife = 28 + Math.random() * 26
      let rot = Math.random() * 360
      const rotSpeed = (Math.random() - 0.5) * 24
      let opacity = 0.9

      const tick = () => {
        life++
        vy += 0.16          // gravity
        vx *= 0.97          // air drag
        px += vx
        py += vy
        rot += rotSpeed
        opacity = Math.max(0, 0.9 * (1 - life / maxLife))
        el.style.transform = `translate(${px}px,${py}px) rotate(${rot}deg)`
        el.style.opacity = opacity
        if (life >= maxLife) { el.remove(); return }
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      particles.push(el)
    }

    let raf
    const loop = () => {
      // Smooth follow
      posX += (mouseX - posX) * 0.35
      posY += (mouseY - posY) * 0.35

      const dx = posX - lastX
      const dy = posY - lastY
      const speed = Math.hypot(dx, dy)

      // Spin faster with movement, base idle spin
      rotation += 2 + speed * 1.4
      const targetScale = blade.dataset.active === '1' ? 1.35 : 1
      curScale += (targetScale - curScale) * 0.2
      blade.style.transform = `translate(${posX}px,${posY}px) translate(-50%,-50%) rotate(${rotation}deg) scale(${curScale})`

      // Spawn dust proportional to speed
      if (speed > 1.5) {
        const dirX = dx / (speed || 1)
        const dirY = dy / (speed || 1)
        const count = Math.min(Math.floor(speed / 3) + (downForce ? 3 : 0), 6)
        for (let i = 0; i < count; i++) spawnDust(posX, posY, speed, dirX, dirY)
      }

      lastX = posX
      lastY = posY
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      styleTag.remove()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <>
      <div ref={sparkLayer} aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 9998, pointerEvents: 'none' }} />
      <div ref={bladeRef} data-active="0" aria-hidden="true"
        style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999, pointerEvents: 'none', willChange: 'transform' }}>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
          {/* Teeth */}
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
          {/* mounting holes */}
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i / 5) * Math.PI * 2
            return <circle key={i} cx={50 + Math.cos(a) * 20} cy={50 + Math.sin(a) * 20} r="2.5" fill="#C8943A" opacity="0.5"/>
          })}
          <circle cx="50" cy="50" r="7" fill="#C8943A"/>
          <circle cx="50" cy="50" r="3" fill="#1A0C04"/>
        </svg>
      </div>
    </>
  )
}
