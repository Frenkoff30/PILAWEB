export default function Footer() {
  return (
    <footer className="py-8 px-6" style={{ background: '#1C0E05', borderTop: '1px solid rgba(200,148,58,0.15)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <a href="#" className="flex items-center cursor-pointer shrink-0">
          <img src="/images/logo good.png" alt="Pila Zalíbené"
            style={{ height: '110px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }}/>
        </a>

        <div className="flex flex-col items-center gap-1">
          <p className="text-xs tracking-wider" style={{ color: 'rgba(245,237,216,0.45)' }}>
            Zalíbené 20, 539 01 Hlinsko &nbsp;·&nbsp; 775 929 300
          </p>
          <a href="https://myweb-zeta-bice.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase flex items-center gap-1.5 transition-opacity duration-200"
            style={{ color: 'rgba(245,237,216,0.28)' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Made by <span style={{ fontWeight: 700 }}>&lt;webo&gt;</span>
          </a>
        </div>

        <p className="text-xs shrink-0" style={{ color: 'rgba(245,237,216,0.35)' }}>© {new Date().getFullYear()} Pila Zalíbené</p>

      </div>
    </footer>
  )
}
