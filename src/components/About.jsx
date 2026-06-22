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
              PILA<br/>ZALÍBENÉ
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(26,12,4,0.85)', fontSize: '1.2rem' }}>
              Jsme rodinná pila v&nbsp;Zalíbeném u&nbsp;Hlinska. Pořezáváme kulatinu na míru pro jednotlivce i&nbsp;firmy. Prkna, trámy, latě i&nbsp;sámované řezivo přesně dle vašich požadavků.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(26,12,4,0.72)', fontSize: '1.2rem' }}>
              Zakládáme si na férovém jednání, rychlém zpracování a&nbsp;maximální výtěžnosti z&nbsp;každého metru kubického. Nabízíme také piliny suché i&nbsp;čerstvé a&nbsp;štěpku na topení.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src="/images/logo good.png" alt="Pila Zalíbené"
              style={{
                width: 'clamp(260px,30vw,420px)',
                height: 'auto',
                filter: 'brightness(0)',
                opacity: 0.85,
              }}/>
          </div>

        </div>
      </div>
    </section>
  )
}
