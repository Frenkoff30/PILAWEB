export default function About() {
  return (
    <section id="o-nas" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px" style={{ background: '#4A7C2F' }}/>
              <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#4A7C2F' }}>O nás</span>
            </div>
            <h2 className="text-display leading-none mb-8" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#1A0C04' }}>
              RODINNÁ<br/>PILA<br/>ZALÍBENÉ
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(26,12,4,0.85)' }}>
              Jsme rodinná pila v Zalíbeném u Hlinska. Pořezáváme kulatinu na míru pro jednotlivce i firmy — prkna, trámy, latě i sámované řezivo přesně dle vašich požadavků.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(26,12,4,0.72)' }}>
              Zakládáme si na férovém jednání, rychlém zpracování a maximální výtěžnosti z každého metru kubického. Nabízíme také piliny suché i čerstvé a štěpku na topení.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: 'Prkna', sub: 'Různé profily', desc: 'Prkna na míru od tenkých po silné fošny.' },
              { val: 'Trámy', sub: 'Stavební řezivo', desc: 'Trámy a hranoly pro stavby i rekonstrukce.' },
              { val: 'Latě', sub: 'Drobné řezivo', desc: 'Latě, lišty a drobné profily dle potřeby.' },
              { val: 'Piliny', sub: '& Štěpka', desc: 'Suché i čerstvé pro kotle na biomasu.' },
            ].map(({ val, sub, desc }) => (
              <div key={val} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(200,148,58,0.18)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.85)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.6)' }}>
                <div className="text-display text-2xl mb-1" style={{ color: '#C8943A' }}>{val}</div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(26,12,4,0.62)' }}>{sub}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(26,12,4,0.75)' }}>{desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
