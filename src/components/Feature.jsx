import Slideshow from './Slideshow'

export default function Feature() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Photo left */}
          <div className="flex items-center justify-center lg:order-1 order-2">
            <div style={{
              position: 'relative', width: '100%', maxWidth: '460px',
              borderRadius: '24px', overflow: 'hidden',
              border: '1px solid rgba(200,148,58,0.2)',
              boxShadow: '0 24px 70px rgba(26,12,4,0.18)',
            }}>
              <Slideshow
                images={['/images/pilafoto2.jpeg', '/images/pilafoto4.jpeg']}
                alt="Naskládané řezivo na pile Zalíbené" aspect="4 / 5" />
            </div>
          </div>

          {/* Text right */}
          <div className="lg:order-2 order-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
              <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Výtěžnost</span>
            </div>
            <h2 className="text-display text-wood leading-none mb-8" style={{ fontSize: 'clamp(2.6rem,6vw,5rem)' }}>
              Z KAŽDÉHO<br/>KMENE MAXIMUM
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(26,12,4,0.82)', fontSize: '1.15rem' }}>
              Kulatinu pořezáváme tak, aby z&nbsp;ní bylo co nejvíc kvalitního řeziva. Žádné zbytečné ztráty, jen poctivá práce a&nbsp;materiál připravený k&nbsp;odvozu.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(26,12,4,0.6)', fontSize: '1.15rem' }}>
              Prkna, trámy i&nbsp;latě skládáme úhledně a&nbsp;přehledně, abyste si je mohli rovnou naložit.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
