const items = [
  'Pořez na míru',
  'Rychlé zpracování',
  'Piliny & Štěpka',
  'Férové jednání',
  'Maximální výtěžnost',
  'Kvalitní řezivo',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-5" style={{
      borderTop: '1px solid rgba(200,148,58,0.15)',
      borderBottom: '1px solid rgba(200,148,58,0.15)',
      background: 'rgba(200,148,58,0.06)',
    }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8 text-display text-2xl tracking-widest whitespace-nowrap"
            style={{ color: i % 2 === 0 ? '#C8943A' : 'rgba(26,12,4,0.45)' }}>
            {item}
            <span style={{ color: 'rgba(200,148,58,0.5)', fontSize: '1rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
