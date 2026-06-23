const steps = [
  {
    title: 'DOMLUVÍME SE',
    desc: 'Zavolejte nám nebo napište na Instagram. Společně domluvíme rozměry, množství i termín zpracování.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>,
    color: '#C8943A',
  },
  {
    title: 'POŘEŽEME',
    desc: 'Vaši kulatinu zpracujeme přímo na naší pile. Prkna, trámy, latě i další profily přesně podle zadání.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17 8C8 10 5.9 16.17 3.82 19.24L5.71 21l1-1 1 1 1-1 1 1 1-1 1 1 1.06-1.06C14 18 18 13 19 8l-2 .5z"/></svg>,
    color: '#4A7C2F',
  },
  {
    title: 'ODVEZETE SI',
    desc: 'Hotové řezivo si vyzvednete přímo u nás. Vše pečlivě naskládané a připravené k naložení.',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
    color: '#A67830',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Jak to funguje</span>
        </div>
        <h2 className="text-display text-wood leading-none mb-20" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
          PRŮBĚH<br/>SPOLUPRÁCE
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon, color }) => (
            <div key={title} data-tilt className="card-organic overflow-hidden flex flex-col">
              <div style={{ height: '3px', background: color }}/>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${color}15`, color }}>
                  {icon}
                </div>
                <h3 className="text-display text-xl mb-3" style={{ color: '#1A0C04' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1A0C04' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
