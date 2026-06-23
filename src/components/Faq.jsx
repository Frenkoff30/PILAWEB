import { useState } from 'react'

const items = [
  {
    q: 'Kolik stojí pořez kulatiny?',
    a: 'Cena záleží na objemu a rozměrech. Zavolejte a dostanete cenovou nabídku předem, bez závazků.',
  },
  {
    q: 'Jaké je minimální množství pro zakázku?',
    a: 'Nemáme stanovený minimální objem. Zpracujeme i menší zakázky pro jednotlivce.',
  },
  {
    q: 'Jak mám připravit kulatinu k pořezu?',
    a: 'Stačí ji přivézt odkorněnou nebo v kůře. Poradíme, co bude pro váš záměr nejlepší.',
  },
  {
    q: 'Můžu se přijet podívat bez objednávky?',
    a: 'Doporučujeme předem zavolat, ať víme že jedete. Ale rádi vám pilu ukážeme kdykoliv jsme na místě.',
  },
  {
    q: 'Děláte i palivové dřevo?',
    a: 'Palivové dřevo přímo nenabízíme, ale máme piliny na topení — suché i čerstvé, vhodné do kotlů na biomasu.',
  },
  {
    q: 'Vystavujete faktury?',
    a: 'Ano, na veškeré zboží a služby vystavíme doklad.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-pad" style={{ background: 'rgba(160,100,20,0.07)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#A07020' }}>Časté dotazy</span>
        </div>
        <h2 className="text-display text-wood leading-none mb-14" style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}>
          FAQ
        </h2>

        <div className="space-y-3">
          {items.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="card-organic" style={{ background: 'rgba(255,255,255,0.55)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
                  style={{ background: 'none', border: 'none', font: 'inherit' }}>
                  <span className="text-sm font-semibold" style={{ color: '#1A0C04' }}>{q}</span>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current"
                    style={{
                      color: '#C8943A',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-7 pb-5 text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.7)' }}>
                    {a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
