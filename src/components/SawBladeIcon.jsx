// Circular saw blade icon — fits the sawmill theme. Uses currentColor.
const TEETH = 12

export default function SawBladeIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Teeth */}
      {Array.from({ length: TEETH }).map((_, i) => {
        const a = (i / TEETH) * Math.PI * 2
        const aOff = (0.5 / TEETH) * Math.PI * 2
        const inner = 8.6, outer = 11.4
        const p = (ang, r) => `${(12 + Math.cos(ang) * r).toFixed(2)},${(12 + Math.sin(ang) * r).toFixed(2)}`
        return <path key={i} d={`M${p(a, inner)} L${p(a - aOff, outer)} L${p(a + aOff, outer)} Z`} />
      })}
      {/* Blade rim (open center shows the background) */}
      <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      {/* Mounting holes */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2
        return <circle key={'h' + i} cx={(12 + Math.cos(a) * 4.7).toFixed(2)} cy={(12 + Math.sin(a) * 4.7).toFixed(2)} r="0.85" />
      })}
      {/* Arbor */}
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
