const steps = [
  {
    title: 'ZAVOLEJTE NÁM',
    desc: 'Ozvěte se telefonicky nebo přes Instagram. Probereme vaše požadavky, domluvíme rozměry i termín.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>,
    color: '#C8943A',
  },
  {
    title: 'PŘIVEZETE DŘEVO',
    desc: 'Dovezete kulatinu k nám na pilu. Společně materiál prohlédneme a potvrdíme způsob pořezu.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
    color: '#4A7C2F',
  },
  {
    title: 'ODVEZETE ŘEZIVO',
    desc: 'Zpracujeme rychle a pečlivě. Odvezete si hotové řezivo přesně podle vašich představ.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
    color: '#A67830',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Jak to funguje</span>
        </div>
        <h2 className="text-display leading-none mb-20" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#1A0C04' }}>
          PRŮBĚH<br/>SPOLUPRÁCE
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[17%] right-[17%] h-px" style={{ background: 'linear-gradient(to right, rgba(200,148,58,0.3), rgba(74,124,47,0.3), rgba(166,120,48,0.3))' }}/>

          {steps.map(({ title, desc, icon, color }) => (
            <div key={title}
              className="rounded-3xl p-8 group transition-all duration-300 hover:-translate-y-2 relative"
              style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(200,148,58,0.15)', boxShadow: '0 4px 24px rgba(26,12,4,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.45)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,12,4,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.15)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,12,4,0.04)' }}>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                {icon}
              </div>

              <h3 className="text-display text-2xl mb-3" style={{ color: '#1A0C04' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.82)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
