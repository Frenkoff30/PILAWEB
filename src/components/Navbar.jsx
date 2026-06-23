import { useState, useEffect } from 'react'

const sections = [['O nás','#o-nas'],['Služby','#služby'],['Spolupráce','#jak-to-funguje'],['Fotografie','/fotogalerie.html'],['Reference','/reference.html'],['Kontakt','#kontakt']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['o-nas','služby','jak-to-funguje','kontakt']
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
    }, { rootMargin: '-40% 0px -50% 0px' })
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(240,230,204,0.96)' : 'rgba(240,230,204,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(160,100,30,0.2)' : '1px solid rgba(160,100,30,0.1)',
      }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-2 flex items-center justify-between gap-6">

        <a href="#" className="flex items-center cursor-pointer shrink-0">
          <img src="/images/logo-good.png" alt="Pila Zalíbené" style={{ height: '80px', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(26,12,4,0.15))', marginTop: '-8px', marginBottom: '-8px' }}/>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {sections.map(([label, href]) => {
            const isActive = active === href
            return (
              <a key={label} href={href}
                className="text-[11px] font-semibold tracking-[2px] uppercase transition-all duration-200 cursor-pointer px-4 py-2 rounded-full"
                style={{
                  color: isActive ? '#F5EDD8' : 'rgba(26,12,4,0.55)',
                  background: isActive ? '#2A1208' : 'transparent',
                  border: isActive ? '1px solid rgba(200,148,58,0.3)' : '1px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(42,18,8,0.08)'
                    e.currentTarget.style.color = '#1A0C04'
                    e.currentTarget.style.borderColor = 'rgba(200,148,58,0.15)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(26,12,4,0.55)'
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}>
                {label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a href="https://www.instagram.com/pila_zalibene" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 cursor-pointer"
            style={{ border: '1px solid rgba(26,12,4,0.15)', color: 'rgba(26,12,4,0.45)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(200,148,58,0.6)'; e.currentTarget.style.color='#C8943A' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(26,12,4,0.15)'; e.currentTarget.style.color='rgba(26,12,4,0.45)' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="tel:775929300"
            className="text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
            style={{ background: '#C8943A', color: '#FFFFFF', boxShadow: '0 2px 16px rgba(200,148,58,0.35)' }}
            onMouseEnter={e => { e.currentTarget.style.background='#A67830'; e.currentTarget.style.transform='translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background='#C8943A'; e.currentTarget.style.transform='translateY(0)' }}>
            775 929 300
          </a>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div style={{ position:'absolute', bottom:0, left:0, height:'2px', background:'linear-gradient(to right,#C8943A,#E5B050)', width:`${progress}%`, transition:'width 0.1s linear', borderRadius:'0 2px 2px 0' }}/>
    </nav>
  )
}
