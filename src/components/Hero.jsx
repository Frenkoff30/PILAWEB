export default function Hero() {
  return (
    <section className="relative flex items-center" style={{ paddingTop: '120px', paddingBottom: '80px', zIndex: 1 }}>

      <div style={{
        position: 'absolute', top: '80px', left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,148,58,0.3) 30%, rgba(200,148,58,0.3) 70%, transparent)',
      }}/>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* LEFT */}
          <div style={{ zIndex: 2 }}>
            <h1 className="text-display mb-8" style={{ lineHeight: '0.88', fontSize: 'clamp(4rem,9.5vw,8.5rem)' }}>
              <span className="block hero-line-1" style={{ color: '#1A0C04' }}>Z LESA</span>
              <span className="block hero-line-2" style={{ color: '#1A0C04' }}>ROVNOU</span>
              <span className="block hero-line-3" style={{ color: '#C8943A' }}>K VÁM.</span>
            </h1>

            <p className="hero-sub mb-10 leading-relaxed" style={{ color: 'rgba(26,12,4,0.78)', fontSize: '1.25rem', maxWidth: '400px', fontWeight: 500 }}>
              Rodinná pila v&nbsp;Zalíbeném u&nbsp;Hlinska.<br/>
              Kulatina, řezivo, piliny i&nbsp;štěpka.
            </p>

            <div className="hero-cta flex flex-wrap gap-3">
              <a href="tel:775929300"
                className="inline-flex items-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                style={{ background: '#C8943A', color: '#fff', boxShadow: '0 4px 24px rgba(200,148,58,0.45)' }}
                onMouseEnter={e => { e.currentTarget.style.background='#A67830'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(200,148,58,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.background='#C8943A'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 24px rgba(200,148,58,0.45)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                775 929 300
              </a>
              <a href="https://www.instagram.com/pila_zalibene" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                style={{ border: '1px solid rgba(26,12,4,0.15)', color: '#1A0C04', background: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#C8943A'; e.currentTarget.style.color='#C8943A'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(26,12,4,0.15)'; e.currentTarget.style.color='#1A0C04'; e.currentTarget.style.transform='translateY(0)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* CENTER — logo */}
          <div className="hidden lg:flex flex-col items-center justify-center hero-right" style={{ zIndex: 2, minWidth: '240px' }}>
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute', inset: '-40px',
                background: 'radial-gradient(circle, rgba(200,148,58,0.18) 0%, rgba(200,148,58,0.04) 55%, transparent 70%)',
                borderRadius: '50%',
                animation: 'blobPulse 4s ease-in-out infinite',
              }}/>
              <div style={{ position:'absolute', inset:'-18px', border:'1px solid rgba(200,148,58,0.2)', borderRadius:'50%' }}/>
              <div style={{ position:'absolute', inset:'-10px', border:'1px dashed rgba(200,148,58,0.1)', borderRadius:'50%' }}/>
              <img src="/images/logo good.png" alt="Pila Zalíbené"
                style={{ width:'clamp(200px,24vw,320px)', height:'auto', position:'relative', filter:'drop-shadow(0 8px 32px rgba(26,12,4,0.2))' }}/>
            </div>
          </div>

          {/* RIGHT — info cards */}
          <div className="hidden lg:flex flex-col gap-2 hero-right" style={{ zIndex: 2 }}>
            {[
              { icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, label:'Adresa', value:'Zalíbené 20, Hlinsko', href:'https://maps.google.com/?q=Zalibene+20+Hlinsko' },
              { icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17 8C8 10 5.9 16.17 3.82 19.24L5.71 21l1-1 1 1 1-1 1 1 1-1 1 1 1.06-1.06C14 18 18 13 19 8l-2 .5z"/></svg>, label:'Pořez kulatiny', value:'Na míru dle vašich rozměrů', href:'#služby' },
              { icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>, label:'Piliny & Štěpka', value:'Suché i čerstvé, na topení', href:'#služby' },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer group transition-all duration-200"
                style={{ background:'rgba(255,255,255,0.55)', border:'1px solid rgba(200,148,58,0.12)', backdropFilter:'blur(8px)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(200,148,58,0.4)'; e.currentTarget.style.background='rgba(255,255,255,0.88)'; e.currentTarget.style.transform='translateX(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(200,148,58,0.12)'; e.currentTarget.style.background='rgba(255,255,255,0.55)'; e.currentTarget.style.transform='translateX(0)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:'linear-gradient(135deg,rgba(200,148,58,0.18),rgba(200,148,58,0.06))', color:'#C8943A' }}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] uppercase tracking-[3px] font-semibold mb-0.5" style={{ color:'rgba(26,12,4,0.38)' }}>{label}</div>
                  <div className="text-sm font-semibold truncate" style={{ color:'#1A0C04' }}>{value}</div>
                </div>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color:'#C8943A' }}><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
              </a>
            ))}

            <a href="#kontakt"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-bold text-sm"
              style={{ background:'#4A7C2F', color:'#fff', boxShadow:'0 4px 20px rgba(74,124,47,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background='#395F24'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(74,124,47,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background='#4A7C2F'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(74,124,47,0.35)' }}>
              Kontaktovat
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
            </a>
          </div>

        </div>
      </div>

      <div style={{
        position:'absolute', bottom:0, left:0, right:0, height:'1px',
        background:'linear-gradient(to right, transparent, rgba(200,148,58,0.25) 30%, rgba(200,148,58,0.25) 70%, transparent)',
      }}/>
    </section>
  )
}
