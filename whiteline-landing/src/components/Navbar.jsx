import { useEffect, useState } from 'react'

const links = [
  { href: '#services', label: 'Xizmatlar' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#order', label: 'Buyurtma' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand">
          <span className="brand__mark"><span className="brand__line" /></span>
          <span className="brand__name">white<span>line</span></span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#order" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>Buyurtma berish</a>
        </nav>

        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
    </header>
  )
}
