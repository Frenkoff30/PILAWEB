const services = [
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17 8C8 10 5.9 16.17 3.82 19.24L5.71 21l1-1 1 1 1-1 1 1 1-1 1 1 1.06-1.06C14 18 18 13 19 8l-2 .5z"/></svg>,
    title: 'POŘEZ NA MÍRU',
    desc: 'Zpracujeme vaši kulatinu přesně dle potřeby. Maximální výtěžnost z každého metru kubického.',
    points: ['Prkna, trámy, latě', 'Maximální výtěžnost z m³', 'Různé profily řeziva'],
    accent: '#C8943A',
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>,
    title: 'RYCHLÉ ZPRACOVÁNÍ',
    desc: 'Přivezete kulatinu, my ji zpracujeme. Férové jednání a nezávazné cenové nabídky.',
    points: ['Osobní přístup', 'Nezávazná cenová nabídka', 'Zpracování dle domluvy'],
    accent: '#4A7C2F',
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>,
    title: 'PILINY & ŠTĚPKA',
    desc: 'Piliny suché i čerstvé a štěpka na topení. Ideální pro kotle na biomasu nebo mulčování.',
    points: ['Piliny suché i čerstvé', 'Štěpka na topení', 'Vhodné pro biomasu'],
    accent: '#A67830',
  },
]

const products = [
  { name: 'Prkna', sub: 'Různé profily', desc: 'Na míru od tenkých po silné fošny.' },
  { name: 'Trámy', sub: 'Stavební řezivo', desc: 'Hranoly pro stavby i rekonstrukce.' },
  { name: 'Latě', sub: 'Drobné řezivo', desc: 'Lišty a drobné profily dle potřeby.' },
  { name: 'Piliny', sub: '& Štěpka', desc: 'Suché i čerstvé pro kotle na biomasu.' },
]

export default function Services() {
  return (
    <section id="služby" className="py-32 px-8 md:px-16" style={{ background: 'rgba(160,100,20,0.09)', borderTop: '1px solid rgba(200,148,58,0.12)', borderBottom: '1px solid rgba(200,148,58,0.12)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
            <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Co nabízíme</span>
          </div>
          <h2 className="text-display leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#1A0C04' }}>
            NAŠE SLUŽBY
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map(({ icon, title, desc, points, accent }) => (
            <div key={title}
              className="rounded-3xl overflow-hidden flex flex-col group cursor-default transition-all duration-300 hover:-translate-y-2"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(200,148,58,0.15)', boxShadow: '0 4px 24px rgba(26,12,4,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.45)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,12,4,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.15)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,12,4,0.04)' }}>
              <div style={{ height: '4px', background: accent }}/>
              <div className="p-8 flex flex-col flex-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>
                  {icon}
                </div>
                <h3 className="text-display text-2xl mb-3 leading-tight" style={{ color: '#1A0C04' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: 'rgba(26,12,4,0.78)' }}>{desc}</p>
                <ul className="space-y-2.5 pt-5" style={{ borderTop: '1px solid rgba(26,12,4,0.07)' }}>
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(26,12,4,0.82)' }}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" style={{ color: accent }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: '#C8943A' }}/>
            <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Sortiment</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(({ name, sub, desc }) => (
            <div key={name} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(200,148,58,0.18)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.85)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.6)' }}>
              <div className="text-display text-2xl mb-1" style={{ color: '#C8943A' }}>{name}</div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(26,12,4,0.55)' }}>{sub}</div>
              <div className="text-xs leading-relaxed" style={{ color: 'rgba(26,12,4,0.72)' }}>{desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
