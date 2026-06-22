const steps = [
  { num: '01', title: 'ZAVOLEJTE', desc: 'Tel nebo DM na Instagramu. Probereme co potřebujete a domluvíme detaily.' },
  { num: '02', title: 'PŘIVEZETE', desc: 'Dovezete kulatinu na pilu v Zalíbeném. Prohlédneme a domluvíme pořez.' },
  { num: '03', title: 'PŘEVEZMETE', desc: 'Zpracujeme rychle a pečlivě. Odvezete hotové řezivo přesně jak jste chtěli.' },
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

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ num, title, desc }) => (
            <div key={num}
              className="rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(200,148,58,0.15)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.65)' }}
            >
              <div className="text-display leading-none mb-6"
                style={{ fontSize: '5.5rem', color: 'rgba(200,148,58,0.2)' }}>
                {num}
              </div>
              <h3 className="text-display text-3xl mb-3" style={{ color: '#1A0C04' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.82)' }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
