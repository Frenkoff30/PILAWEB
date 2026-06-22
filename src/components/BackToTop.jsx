import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Zpět nahoru"
      className="fixed cursor-pointer"
      style={{
        bottom: '28px', right: '28px', zIndex: 40,
        width: '48px', height: '48px', borderRadius: '50%',
        background: '#1A0C04', color: '#F5EDD8',
        border: '1px solid rgba(200,148,58,0.3)',
        boxShadow: '0 4px 20px rgba(26,12,4,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#C8943A'; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#1A0C04'; e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(20px)' }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
    </button>
  )
}
