export default function GdprModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(26,12,4,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl"
        style={{ background: '#FAF4E8', border: '1px solid rgba(200,148,58,0.2)', boxShadow: '0 24px 80px rgba(26,12,4,0.25)' }}>

        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-8 py-5 rounded-t-2xl"
          style={{ background: '#FAF4E8', borderBottom: '1px solid rgba(200,148,58,0.15)' }}>
          <div>
            <p className="text-[10px] tracking-[4px] uppercase font-semibold mb-1" style={{ color: '#A07020' }}>Pila Zalíbené</p>
            <h2 className="text-display text-2xl" style={{ color: '#1A0C04' }}>OCHRANA OSOBNÍCH ÚDAJŮ</h2>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{ background: 'rgba(26,12,4,0.07)', color: '#1A0C04' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,148,58,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,12,4,0.07)'}>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6 text-sm leading-relaxed" style={{ color: 'rgba(26,12,4,0.75)' }}>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>1. Správce osobních údajů</h3>
            <p>Správcem osobních údajů je:</p>
            <p className="mt-2 pl-4" style={{ borderLeft: '2px solid rgba(200,148,58,0.3)' }}>
              <strong style={{ color: '#1A0C04' }}>Pila Zalíbené</strong><br/>
              Zalíbené 20, 539 01 Hlinsko<br/>
              Tel.: 775 929 300<br/>
              Instagram: @pila_zalibene
            </p>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>2. Jaké údaje zpracováváme</h3>
            <p>Prostřednictvím kontaktního formuláře zpracováváme pouze údaje, které nám sami poskytnete:</p>
            <ul className="mt-2 space-y-1 pl-4">
              {['Jméno a příjmení', 'Telefonní číslo', 'Text vaší zprávy / poptávky'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C8943A' }}/>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>3. Účel zpracování</h3>
            <p>Vaše osobní údaje zpracováváme výhradně za účelem <strong style={{ color: '#1A0C04' }}>odpovědi na vaši poptávku</strong> a případného uzavření smlouvy o pořezu dřeva nebo dodávce jiného zboží a služeb.</p>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>4. Právní základ</h3>
            <p>Zpracování probíhá na základě vašeho <strong style={{ color: '#1A0C04' }}>svobodného souhlasu</strong> (čl. 6 odst. 1 písm. a) GDPR), který udělujete odesláním formuláře.</p>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>5. Předávání třetím stranám</h3>
            <p>Vaše údaje <strong style={{ color: '#1A0C04' }}>nepředáváme žádným třetím stranám</strong>, nejsou prodávány ani využívány pro marketingové účely. Přijatý e-mail je uložen pouze ve schránce správce.</p>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>6. Doba uchovávání</h3>
            <p>Údaje uchováváme po dobu nezbytně nutnou pro vyřízení poptávky, nejdéle <strong style={{ color: '#1A0C04' }}>1 rok</strong> od přijetí zprávy.</p>
          </section>

          <section>
            <h3 className="font-bold text-base mb-2" style={{ color: '#1A0C04' }}>7. Vaše práva</h3>
            <p>Máte právo na přístup ke svým údajům, jejich opravu nebo výmaz, odvolání souhlasu a podání stížnosti u Úřadu pro ochranu osobních údajů (uoou.cz). Žádost zašlete na tel. nebo Instagram výše.</p>
          </section>

          <div className="pt-2 pb-1 text-xs" style={{ color: 'rgba(26,12,4,0.4)', borderTop: '1px solid rgba(200,148,58,0.15)' }}>
            Platné od 1. 1. 2025 · Pila Zalíbené
          </div>

        </div>

        {/* Footer button */}
        <div className="sticky bottom-0 px-8 py-4 rounded-b-2xl" style={{ background: '#FAF4E8', borderTop: '1px solid rgba(200,148,58,0.12)' }}>
          <button onClick={onClose}
            className="w-full font-bold text-sm py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            style={{ background: '#C8943A', color: '#fff', boxShadow: '0 4px 16px rgba(200,148,58,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#A67830'}
            onMouseLeave={e => e.currentTarget.style.background = '#C8943A'}>
            Rozumím a zavřít
          </button>
        </div>

      </div>
    </div>
  )
}
