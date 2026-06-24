export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <span className="brand__mark"><span className="brand__line" /></span>
            <span className="brand__name">white<span>line</span></span>
          </a>
          <p>Premium IT yechimlar. Web · Mobile · Backend · Dizayn.</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Kompaniya</h4>
            <a href="#services">Xizmatlar</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#order">Buyurtma</a>
          </div>
          <div className="footer__col">
            <h4>Aloqa</h4>
            <a href="mailto:hello@whiteline.uz">hello@whiteline.uz</a>
            <a href="https://t.me/+998900378770" target="_blank" rel="noreferrer">Telegram</a>
            <a href="tel:+998900378770">+998 90 037 87 70</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} WhiteLine. Barcha huquqlar himoyalangan.</span>
        <span>Toshkent, O‘zbekiston</span>
      </div>
    </footer>
  )
}
