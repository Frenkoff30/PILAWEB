import { useEffect, useRef, useState } from 'react'
import SawBladeIcon from './SawBladeIcon'

// Bind single-letter Czech prepositions/conjunctions to the next word (no orphan at line end).
const bind = (t) => t.replace(/(^|\s)([ksvzouaiKSVZOUAI])\s/g, (_, pre, w) => pre + w + String.fromCharCode(160))

const steps = [
  {
    title: 'OZVĚTE SE NÁM',
    desc: 'Zavolejte nebo nám napište na Instagram. Poradíme s výběrem řeziva, rozměry i profily a navrhneme řešení přesně pro vás.',
    icon: <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>,
    color: '#C8943A',
  },
  {
    title: 'DOMLUVÍME ZAKÁZKU',
    desc: 'Společně upřesníme množství, profily a termín. Cenovou nabídku dostanete předem a nezávazně.',
    icon: <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>,
    color: '#6B4A24',
  },
  {
    title: 'POŘEŽEME A PŘIPRAVÍME',
    desc: 'Řezivo dodáme z vlastních zásob, nebo pořežeme na míru podle zadání. Vždy s maximální výtěžností a poctivou prací.',
    icon: <SawBladeIcon className="w-full h-full" />,
    color: '#4A7C2F',
  },
  {
    title: 'ODVEZETE SI',
    desc: 'Hotové řezivo přehledně naskládáme a připravíme k naložení. Přijedete, naložíte a bez zbytečného čekání odvezete.',
    icon: <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
    color: '#A67830',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [revealed, setRevealed] = useState([false, false, false, false])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight

      const timelineStart = rect.top + rect.height * 0.18
      const timelineEnd = rect.top + rect.height * 0.85
      const scrollPos = vh * 0.6

      if (scrollPos < timelineStart) {
        setLineHeight(0)
      } else if (scrollPos > timelineEnd) {
        setLineHeight(100)
      } else {
        setLineHeight(((scrollPos - timelineStart) / (timelineEnd - timelineStart)) * 100)
      }

      const cards = section.querySelectorAll('[data-step]')
      setRevealed(prev => {
        const next = [...prev]
        let changed = false
        cards.forEach((card, idx) => {
          const cr = card.getBoundingClientRect()
          if (cr.top < vh * 0.75 && !next[idx]) {
            next[idx] = true
            changed = true
          }
        })
        return changed ? next : prev
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="jak-to-funguje" className="section-pad" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Jak to funguje</span>
        </div>
        <h2 className="text-display text-wood leading-none mb-20" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
          PRŮBĚH<br/>SPOLUPRÁCE
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0"
            style={{ width: '2px', background: 'rgba(200,148,58,0.15)', transform: 'translateX(-50%)' }}>
            {/* Animated fill */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: `${lineHeight}%`,
              background: 'linear-gradient(to bottom, #C8943A, #6B4A24, #4A7C2F, #A67830)',
              borderRadius: '0 0 2px 2px',
              transition: 'height 0.15s linear',
            }}/>
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-28 relative">
            {steps.map(({ title, desc, icon, color }, idx) => {
              const isRight = idx % 2 === 1
              const isRevealed = revealed[idx]

              return (
                <div key={title} data-step className="relative flex items-start">

                  {/* Numbered dot on the line */}
                  <div
                    className="absolute left-6 md:left-1/2 z-10"
                    style={{ transform: 'translate(-50%, 4px)' }}>
                    <div style={{
                      width: '54px', height: '54px', borderRadius: '50%',
                      background: isRevealed ? color : 'rgba(200,148,58,0.1)',
                      border: `2px solid ${isRevealed ? color : 'rgba(200,148,58,0.25)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                      boxShadow: isRevealed ? `0 6px 24px ${color}45` : 'none',
                    }}>
                      <span className="text-display" style={{
                        fontSize: '1.7rem', lineHeight: 1,
                        color: isRevealed ? '#fff' : 'rgba(200,148,58,0.45)',
                        transition: 'color 0.5s ease',
                      }}>
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Decorative watermark icon in the empty gap (desktop only) */}
                  <div
                    className="hidden md:flex absolute top-0 h-full items-center justify-center pointer-events-none"
                    style={{
                      width: 'calc(50% - 56px)',
                      [isRight ? 'left' : 'right']: 0,
                    }}>
                    <div className="step-float" style={{
                      color,
                      width: '116px', height: '116px',
                      opacity: isRevealed ? 0.14 : 0.04,
                      transition: 'opacity 0.7s ease',
                      animationDelay: `${idx * 0.9}s`,
                      filter: `drop-shadow(0 8px 24px ${color}30)`,
                    }}>
                      {icon}
                    </div>
                  </div>

                  {/* Card — mobile: right of dot; desktop: alternating, text always left-aligned */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-56px)] ${isRight ? 'md:ml-auto md:pl-14' : 'md:mr-auto md:pr-14'}`}
                    style={{
                      opacity: isRevealed ? 1 : 0,
                      transform: isRevealed
                        ? 'translateX(0)'
                        : `translateX(${isRight ? '30px' : '-30px'})`,
                      transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                    }}>
                    <div className="card-organic p-8" data-tilt>
                      <div style={{ width: '40px', height: '3px', background: color, borderRadius: '2px', marginBottom: '20px' }}/>
                      <h3 className="text-display text-2xl mb-3 leading-tight" style={{ color: '#1A0C04' }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.75)' }}>{bind(desc)}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
