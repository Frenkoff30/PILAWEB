export default function CtaBanner() {
  return (
    <div className="relative" style={{ background: '#1C0E05', overflow: 'hidden' }}>

      {/* SVG wave top — cream notch coming down into dark */}
      <div style={{ position: 'absolute', top: '-1px', left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 50 1440 20V60H0Z" fill="#F0E6CC"/>
        </svg>
      </div>

      {/* Subtle glow */}
      <div style={{ position:'absolute', bottom:'0', left:'30%', width:'40vw', height:'30vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(200,148,58,0.06) 0%, transparent 60%)', pointerEvents:'none' }}/>

      <div className="relative px-8 md:px-16" style={{ zIndex: 1, paddingTop: 'clamp(90px,11vw,130px)', paddingBottom: 'clamp(50px,7vw,80px)' }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">

          <a href="/fotogalerie.html" data-tilt
            className="flex-1 px-6 py-5 flex items-center gap-4 cursor-pointer group"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,148,58,0.2)', borderRadius: '20px', transition: 'border-color 0.3s ease, background 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(200,148,58,0.15)', color: '#C8943A', border: '1px solid rgba(200,148,58,0.25)' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </div>
            <div className="flex-1">
              <div className="text-display text-lg" style={{ color: '#F5EDD8' }}>FOTOGALERIE</div>
              <p className="text-[11px]" style={{ color: 'rgba(245,237,216,0.5)' }}>Naše práce a zázemí pily</p>
            </div>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#C8943A' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </a>

          <a href="/reference.html" data-tilt
            className="flex-1 px-6 py-5 flex items-center gap-4 cursor-pointer group"
            style={{ background: 'rgba(74,124,47,0.12)', border: '1px solid rgba(74,124,47,0.25)', borderRadius: '20px', transition: 'border-color 0.3s ease, background 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,124,47,0.55)'; e.currentTarget.style.background = 'rgba(74,124,47,0.18)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,124,47,0.25)'; e.currentTarget.style.background = 'rgba(74,124,47,0.12)' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(74,124,47,0.18)', color: '#6B9B4A', border: '1px solid rgba(74,124,47,0.3)' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div className="flex-1">
              <div className="text-display text-lg" style={{ color: '#F5EDD8' }}>REFERENCE</div>
              <p className="text-[11px]" style={{ color: 'rgba(245,237,216,0.5)' }}>Co říkají naši zákazníci</p>
            </div>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#6B9B4A' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </a>

        </div>
      </div>
    </div>
  )
}
