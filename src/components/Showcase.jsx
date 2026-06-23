export default function Showcase() {
  return (
    <section className="relative" style={{ overflow: 'hidden', minHeight: 'clamp(360px, 50vh, 560px)', display: 'flex', alignItems: 'center' }}>
      {/* Photo (img honors EXIF orientation, unlike background-image) */}
      <img src="/images/pilafoto.jpeg" alt="Pořez kulatiny na pile"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          imageOrientation: 'from-image',
        }}/>

      {/* Dark overlay for legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,9,3,0.82) 0%, rgba(20,9,3,0.55) 45%, rgba(20,9,3,0.3) 100%)' }}/>

      <div className="relative px-8 md:px-16 w-full" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
            <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#C8943A' }}>Přímo na pile</span>
          </div>
          <h2 className="text-display leading-none mb-5" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)', color: '#F5EDD8', maxWidth: '720px' }}>
            POŘEZ KULATINY<br/>OD KMENE PO ŘEZIVO
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(245,237,216,0.8)', maxWidth: '460px' }}>
            Každý kmen zpracujeme &nbsp;přímo na naší pile v&nbsp;Zalíbeném.
          </p>
        </div>
      </div>
    </section>
  )
}
