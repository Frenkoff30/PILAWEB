export default function CtaBanner() {
  return (
    <div className="py-8 px-8 md:px-16">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">

        <a href="/fotogalerie.html"
          className="card-organic flex-1 px-5 py-4 flex items-center gap-4 cursor-pointer group"
          style={{ background: 'rgba(255,255,255,0.6)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(200,148,58,0.1)', color: '#C8943A' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </div>
          <div className="flex-1">
            <div className="text-display text-lg" style={{ color: '#1A0C04' }}>FOTOGALERIE</div>
            <p className="text-[11px]" style={{ color: 'rgba(26,12,4,0.5)' }}>Naše práce a zázemí pily</p>
          </div>
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#C8943A' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </a>

        <a href="/reference.html"
          className="card-organic flex-1 px-5 py-4 flex items-center gap-4 cursor-pointer group"
          style={{ background: 'rgba(74,124,47,0.06)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(74,124,47,0.1)', color: '#4A7C2F' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <div className="flex-1">
            <div className="text-display text-lg" style={{ color: '#1A0C04' }}>REFERENCE</div>
            <p className="text-[11px]" style={{ color: 'rgba(26,12,4,0.5)' }}>Co říkají naši zákazníci</p>
          </div>
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#4A7C2F' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </a>

      </div>
    </div>
  )
}
