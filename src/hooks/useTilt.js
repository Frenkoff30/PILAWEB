import { useEffect } from 'react'

// Adds 3D tilt-follow-mouse to every [data-tilt] element
export function useTilt() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const els = Array.from(document.querySelectorAll('[data-tilt]'))
    const cleanups = []

    els.forEach((el) => {
      el.style.transformStyle = 'preserve-3d'
      el.style.transition = 'transform 0.25s cubic-bezier(0.16,1,0.3,1)'

      let raf
      const MAX = 9 // degrees

      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width  // 0..1
        const py = (e.clientY - r.top) / r.height
        const rotY = (px - 0.5) * MAX * 2
        const rotX = (0.5 - py) * MAX * 2
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transition = 'transform 0.08s linear'
          el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`
          // light sheen follows cursor
          el.style.setProperty('--mx', `${px * 100}%`)
          el.style.setProperty('--my', `${py * 100}%`)
        })
      }
      const onLeave = () => {
        cancelAnimationFrame(raf)
        el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach(fn => fn())
  }, [])
}
