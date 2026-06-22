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
    <div className="overflow-hidden py-6" style={{
      borderTop: '1px solid rgba(200,148,58,0.1)',
      borderBottom: '1px solid rgba(200,148,58,0.1)',
    }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 px-10 text-display whitespace-nowrap"
            style={{
              fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
              letterSpacing: '0.15em',
              color: i % 2 === 0 ? 'rgba(200,148,58,0.7)' : 'rgba(26,12,4,0.25)',
            }}>
            {item}
            <span style={{ color: 'rgba(200,148,58,0.25)', fontSize: '0.6em' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
