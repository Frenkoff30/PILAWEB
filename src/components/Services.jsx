import SawBladeIcon from './SawBladeIcon'

// Bind single-letter Czech prepositions/conjunctions to the next word (no orphan at line end).
const NBSP = ' '
const bind = (t) => t.replace(/(^|\s)([ksvzouaiKSVZOUAI])\s/g, (_, pre, w) => pre + w + NBSP)

const services = [
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3 6h18v3.2H3zM3 10.4h18v3.2H3zM3 14.8h18V18H3z"/></svg>,
    title: 'PRODEJ ŘEZIVA',
    desc: 'Nabízíme vlastní řezivo skladem i na zakázku. Prkna, trámy, latě a fošny z kvalitního dřeva, připravené k okamžitému odběru.',
    accent: '#C8943A',
  },
  {
    icon: <SawBladeIcon className="w-6 h-6" />,
    title: 'POŘEZ NA MÍRU',
    desc: 'Pořežeme přesně podle vašich rozměrů s maximální výtěžností. Férová cena domluvená předem, termín podle vašich potřeb.',
    accent: '#4A7C2F',
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>,
    title: 'PILINY NA TOPENÍ',
    desc: 'Suché i čerstvé piliny vhodné do kotlů na biomasu i na mulčování zahrady. Odeberete přesně takové množství, jaké potřebujete.',
    accent: '#A67830',
  },
]

const products = [
  { name: 'PRKNA', sub: 'Řezivo', desc: 'Od tenkých prken po silné fošny v různých profilech.' },
  { name: 'TRÁMY', sub: 'Stavební řezivo', desc: 'Hranoly a trámy pro novostavby i rekonstrukce.' },
  { name: 'LATĚ', sub: 'Drobné řezivo', desc: 'Střešní latě a drobné profily podle vašich rozměrů.' },
  { name: 'PILINY', sub: 'Palivo i mulč', desc: 'Suché i čerstvé, ideální do kotlů na biomasu.' },
]

export default function Services() {
  return (
    <section id="služby" className="section-pad" style={{ background: 'rgba(160,100,20,0.07)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
            <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Co nabízíme</span>
          </div>
          <h2 className="text-display text-wood leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            NAŠE SLUŽBY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {services.map(({ icon, title, desc, accent }) => (
            <div key={title} data-tilt className="card-organic group relative overflow-hidden flex flex-col">
              {/* Gradient accent bar */}
              <div style={{ height: '4px', background: `linear-gradient(90deg, ${accent} 0%, ${accent}88 100%)` }}/>

              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                  style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}0a)`, color: accent, border: `1px solid ${accent}26` }}>
                  {icon}
                </div>

                <h3 className="text-display text-2xl mb-3 leading-tight" style={{ color: '#1A0C04' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.7)' }}>{bind(desc)}</p>
              </div>

              {/* Hover underline */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: accent }}/>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px" style={{ background: '#C8943A' }}/>
            <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Sortiment</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(({ name, sub, desc }) => (
            <div key={name} data-tilt className="card-organic group relative overflow-hidden p-6">
              <div className="text-display text-2xl mb-1" style={{ color: '#C8943A' }}>{name}</div>
              <div className="text-[10px] font-semibold uppercase tracking-[2px] mb-3" style={{ color: 'rgba(26,12,4,0.45)' }}>{sub}</div>
              <div className="text-xs leading-relaxed" style={{ color: 'rgba(26,12,4,0.7)' }}>{bind(desc)}</div>
              {/* Hover underline */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-400"
                style={{ background: '#C8943A' }}/>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
