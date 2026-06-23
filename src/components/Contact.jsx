import { useState } from 'react'
import GdprModal from './GdprModal'

const contacts = [
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>,
    label: 'Telefon', value: '775 929 300', href: 'tel:775929300',
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
    label: 'Adresa', value: 'Zalíbené 20, 539 01 Hlinsko', href: 'https://maps.google.com/?q=Zalibene+20+Hlinsko',
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    label: 'Instagram', value: '@pila_zalibene', href: 'https://www.instagram.com/pila_zalibene',
  },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '12px',
  padding: '14px 18px',
  color: '#F5EDD8',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '', gdpr: false })
  const [gdprOpen, setGdprOpen] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Poptávka od ${form.name}`)
    const body = encodeURIComponent(`Jméno: ${form.name}\nTelefon: ${form.phone}\n\nZpráva:\n${form.message}`)
    window.location.href = `mailto:pilazalibene@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
    {gdprOpen && <GdprModal onClose={() => setGdprOpen(false)} />}
    <section id="kontakt" className="py-32 px-8 md:px-16" style={{ background: '#1C0E05', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle warm glow top-right */}
      <div style={{ position:'absolute', top:'-10%', right:'-5%', width:'50vw', height:'50vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(200,148,58,0.08) 0%, transparent 60%)', pointerEvents:'none' }}/>
      {/* Green glow bottom-left */}
      <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:'35vw', height:'35vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(74,124,47,0.07) 0%, transparent 65%)', pointerEvents:'none' }}/>

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px" style={{ background: '#C8943A' }}/>
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#C8943A' }}>Kontakt</span>
        </div>
        <h2 className="text-display leading-none mb-16" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: '#F5EDD8' }}>
          KONTAKT
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-3">
            {contacts.map(({ icon, label, value, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 p-6 rounded-2xl cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,148,58,0.18)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(200,148,58,0.5)'; e.currentTarget.style.background='rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(200,148,58,0.18)'; e.currentTarget.style.background='rgba(255,255,255,0.05)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(200,148,58,0.12)', border: '1px solid rgba(200,148,58,0.25)', color: '#C8943A' }}>
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: 'rgba(245,237,216,0.4)' }}>{label}</div>
                  <div className="text-sm font-semibold" style={{ color: '#F5EDD8' }}>{value}</div>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-0 group-hover:opacity-100 transition-opacity shrink-0" style={{ color: '#C8943A' }}>
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                </svg>
              </a>
            ))}
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(245,237,216,0.4)' }}>Provozní doba</div>
              <div className="text-sm font-semibold" style={{ color: '#F5EDD8' }}>Pondělí až pátek dle domluvy</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(245,237,216,0.55)' }}>Zavolejte nebo napište na&nbsp;Instagram, domluvíme se.</div>
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,148,58,0.2)' }}>
            <p className="text-xs font-semibold tracking-[4px] uppercase mb-6" style={{ color: '#C8943A' }}>Napište nám</p>
            <h3 className="text-display text-3xl mb-8" style={{ color: '#F5EDD8' }}>POPTÁVKA<br/>E-MAILEM</h3>

            {sent ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4" style={{ color: '#C8943A' }}>✓</div>
                <p className="text-lg font-semibold" style={{ color: '#F5EDD8' }}>Otevírá se váš e‑mailový klient.</p>
                <p className="text-sm mt-2" style={{ color: 'rgba(245,237,216,0.55)' }}>Stačí odeslat připravenou zprávu a&nbsp;ozveme se vám.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(245,237,216,0.5)' }}>Jméno</label>
                  <input type="text" required placeholder="Jan Novák"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor='rgba(200,148,58,0.6)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(245,237,216,0.5)' }}>Telefon</label>
                  <input type="tel" placeholder="777 000 000"
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor='rgba(200,148,58,0.6)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(245,237,216,0.5)' }}>Zpráva / Poptávka</label>
                  <textarea required rows={4} placeholder="Popište co potřebujete..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                    onFocus={e => e.target.style.borderColor='rgba(200,148,58,0.6)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required checked={form.gdpr}
                      onChange={e => setForm(f => ({ ...f, gdpr: e.target.checked }))}
                      style={{ marginTop: '2px', accentColor: '#C8943A', width: '15px', height: '15px', flexShrink: 0 }}/>
                    <span className="text-xs leading-relaxed" style={{ color: 'rgba(245,237,216,0.5)' }}>
                      Souhlasím se zpracováním osobních údajů dle{' '}
                      <button type="button" onClick={() => setGdprOpen(true)}
                        style={{ color: '#C8943A', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontFamily: 'inherit' }}>
                        zásad ochrany osobních údajů
                      </button>
                      {' '}za účelem vyřízení poptávky.
                    </span>
                  </label>
                </div>
                <button type="submit"
                  className="w-full font-bold text-sm py-4 rounded-xl transition-all duration-200 cursor-pointer mt-2"
                  style={{ background: '#C8943A', color: '#fff', boxShadow: '0 4px 20px rgba(200,148,58,0.35)' }}
                  onMouseEnter={e => { e.currentTarget.style.background='#A67830'; e.currentTarget.style.transform='translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background='#C8943A'; e.currentTarget.style.transform='translateY(0)' }}>
                  Odeslat poptávku →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
