import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    const particles = []
    let mouseX = 0, mouseY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (Math.random() > 0.45) spawnParticle(mouseX, mouseY)
    }

    function spawnParticle(x, y) {
      const el = document.createElement('div')
      const size = 2 + Math.random() * 3.5
      const isSquare = Math.random() > 0.5
      const vx = (Math.random() - 0.5) * 2.5
      const vy = -1.5 - Math.random() * 2.5
      let opacity = 0.55 + Math.random() * 0.3
      let posX = x + (Math.random() - 0.5) * 10
      let posY = y + (Math.random() - 0.5) * 6
      let life = 0
      const maxLife = 35 + Math.random() * 25

      el.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: ${isSquare ? '2px' : '50%'};
        background: rgba(${isSquare ? '80,42,10' : '180,110,25'}, ${opacity});
        pointer-events: none;
        z-index: 9999;
        left: ${posX}px;
        top: ${posY}px;
        transform: translate(-50%,-50%) rotate(${Math.random()*180}deg);
      `
      document.body.appendChild(el)

      const drift = (Math.random() - 0.5) * 0.4
      let vxCur = vx, vyCur = vy

      function tick() {
        life++
        posX += vxCur
        posY += vyCur
        vxCur += drift * 0.05
        vyCur += 0.08
        opacity -= 0.018
        if (life >= maxLife || opacity <= 0) {
          el.remove()
          return
        }
        el.style.left = posX + 'px'
        el.style.top = posY + 'px'
        el.style.opacity = opacity
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      particles.push(el)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      particles.forEach(p => p.remove())
    }
  }, [])

  return null
}
