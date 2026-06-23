import Slideshow from './Slideshow'

export default function About() {
  return (
    <section id="o-nas" className="relative" style={{ background: '#1C0E05', overflow: 'hidden' }}>

      {/* SVG wave top */}
      <div style={{ position: 'absolute', top: '-1px', left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 50 1440 20V60H0Z" fill="#F0E6CC"/>
        </svg>
      </div>

      {/* SVG wave bottom */}
      <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0 0V40C240 60 480 20 720 30C960 40 1200 10 1440 40V0H0Z" fill="#F0E6CC"/>
        </svg>
      </div>

      {/* Subtle glow */}
      <div style={{ position:'absolute', top:'20%', right:'-5%', width:'40vw', height:'40vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(200,148,58,0.07) 0%, transparent 60%)', pointerEvents:'none' }}/>

      <div className="section-pad relative" style={{ zIndex: 1, paddingTop: 'clamp(120px,14vw,180px)', paddingBottom: 'clamp(120px,14vw,180px)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px" style={{ background: '#4A7C2F' }}/>
                <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#6B9B4A' }}>O nás</span>
              </div>
              <h2 className="text-display leading-none mb-10" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#F5EDD8' }}>
                PILA<br/>ZALÍBENÉ
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(245,237,216,0.85)', fontSize: '1.15rem' }}>
                Jsme pila v&nbsp;Zalíbeném u&nbsp;Hlinska. Řežeme kulatinu na zakázku pro jednotlivce i&nbsp;firmy. Prkna, trámy, latě i&nbsp;sámované řezivo přesně podle vašich rozměrů.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(245,237,216,0.6)', fontSize: '1.15rem' }}>
                Zakládáme si na poctivém přístupu, rychlém zpracování a&nbsp;co největší výtěžnosti z&nbsp;každého kmene. Nabízíme také piliny suché i&nbsp;čerstvé na topení.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div style={{
                position: 'relative', width: '100%', maxWidth: '440px',
                borderRadius: '24px', overflow: 'hidden',
                border: '1px solid rgba(200,148,58,0.25)',
                boxShadow: '0 24px 70px rgba(0,0,0,0.45)',
              }}>
                <Slideshow
                  images={['/images/piladum.jpeg', '/images/pilafoto3.jpeg', '/images/pilafoto5.jpeg']}
                  alt="Areál pily Zalíbené" aspect="4 / 5" />
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to top, rgba(18,8,2,0.92) 0%, rgba(18,8,2,0.5) 25%, transparent 55%)' }}/>
                <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                  <div className="inline-flex items-center mb-2 px-3 py-1 rounded-full" style={{ background: 'rgba(200,148,58,0.18)', border: '1px solid rgba(200,148,58,0.35)' }}>
                    <span className="text-[10px] tracking-[3px] uppercase font-bold" style={{ color: '#E5B860' }}>Náš areál</span>
                  </div>
                  <div className="text-display text-3xl" style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>ZALÍBENÉ U HLINSKA</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
