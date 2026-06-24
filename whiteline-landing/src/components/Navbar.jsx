import { useEffect, useState } from 'react'

const links = [
  { href: '#services', label: 'Xizmatlar', desc: 'Web · Mobile · Bot · CRM' },
  { href: '#portfolio', label: 'Portfolio', desc: 'Mijozlar va loyihalar' },
  { href: '#order', label: 'Buyurtma', desc: 'Loyihangizni boshlang' },
]

const TELEGRAM = 'https://t.me/+998900378770'
const PHONE = '+998900378770'
const PHONE_DISPLAY = '+998 90 037 87 70'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark"><span className="brand__line" /></span>
          <span className="brand__name">white<span>line</span></span>
        </a>

        <nav className="nav__desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#order" className="btn btn--primary nav__cta">Buyurtma berish</a>
        </nav>

        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
    </header>

    {/* Mobile drawer (outside header so backdrop-filter doesn't trap fixed positioning) */}
    <div className={`nav__backdrop ${open ? 'is-open' : ''}`} onClick={close} />
      <aside className={`drawer ${open ? 'drawer--open' : ''}`}>
        <div className="drawer__head">
          <span className="brand">
            <span className="brand__mark"><span className="brand__line" /></span>
            <span className="brand__name">white<span>line</span></span>
          </span>
          <button className="drawer__close" aria-label="Yopish" onClick={close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <nav className="drawer__links">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{ '--i': i }}>
              <span className="drawer__num">0{i + 1}</span>
              <span className="drawer__label">
                <b>{l.label}</b>
                <small>{l.desc}</small>
              </span>
              <svg className="drawer__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </a>
          ))}
        </nav>

        <div className="drawer__foot">
          <a href="#order" className="btn-glow btn-glow--full" onClick={close}>
            <span>Buyurtma berish</span>
          </a>
          <div className="drawer__contacts">
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="drawer__contact drawer__contact--tg">
              <span>✈</span> Telegram
            </a>
            <a href={`tel:${PHONE}`} className="drawer__contact drawer__contact--call">
              <span>☎</span> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
