const services = [
  {
    num: '01',
    title: 'POŘEZ DŘEVA NA MÍRU',
    desc: 'Zpracujeme vaši kulatinu přesně dle potřeby. Maximální výtěžnost z každého m³ — prkna, trámy, latě.',
    points: ['Pořez kulatiny na míru', 'Maximální výtěžnost z m³', 'Různé profily řeziva'],
    tag: 'Hlavní služba',
  },
  {
    num: '02',
    title: 'RYCHLÉ ZPRACOVÁNÍ',
    desc: 'Přivezete, my zpracujeme. Férové jednání, nezávazné cenové nabídky dle domluvy a poptávky.',
    points: ['Férové a osobní jednání', 'Nezávazná cenová nabídka', 'Zpracování dle poptávky'],
    tag: 'Rychle',
  },
  {
    num: '03',
    title: 'PILINY & ŠTĚPKA',
    desc: 'Piliny suché i čerstvé a štěpka na topení. Ideální pro kotle na biomasu nebo mulčování.',
    points: ['Piliny suché / čerstvé', 'Štěpka na topení', 'Vhodné pro biomasu'],
    tag: 'Vedlejší produkt',
  },
]

export default function Services() {
  return (
    <section id="služby" className="py-32 px-8 md:px-16" style={{ background: 'rgba(160,100,20,0.09)', borderTop: '1px solid rgba(200,148,58,0.12)', borderBottom: '1px solid rgba(200,148,58,0.12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
              <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Co nabízíme</span>
            </div>
            <h2 className="text-display leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#1A0C04' }}>
              NAŠE SLUŽBY
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map(({ num, title, desc, points, tag }) => (
            <div key={num}
              className="rounded-2xl p-8 flex flex-col group cursor-default transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(200,148,58,0.15)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.65)' }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-display leading-none" style={{ fontSize: '4.5rem', color: 'rgba(200,148,58,0.22)' }}>
                  {num}
                </span>
                <span className="text-[10px] tracking-widest uppercase mt-2 px-3 py-1 rounded-full"
                  style={{ color: 'rgba(26,12,4,0.4)', border: '1px solid rgba(200,148,58,0.2)' }}>
                  {tag}
                </span>
              </div>
              <h3 className="text-display text-2xl mb-4 leading-tight" style={{ color: '#1A0C04' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: 'rgba(26,12,4,0.82)' }}>{desc}</p>
              <ul className="space-y-2 pt-5" style={{ borderTop: '1px solid rgba(26,12,4,0.08)' }}>
                {points.map(p => (
                  <li key={p} className="flex items-center gap-3 text-xs" style={{ color: 'rgba(26,12,4,0.78)' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C8943A' }}/>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
