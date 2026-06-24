import { Arrow } from './Icons'

export default function CTA() {
  return (
    <section className="section cta-wrap" id="contact">
      <div className="container">
        <div className="cta">
          <div className="cta__bg"><div className="blob blob--3" /></div>
          <div className="cta__content">
            <span className="eyebrow eyebrow--light">Keling, boshlaymiz</span>
            <h2 className="cta__title">G‘oyangiz bormi? <br/>Uni <span className="grad-text">mahsulotga</span> aylantiramiz.</h2>
            <p className="cta__sub">Bepul konsultatsiya uchun biz bilan bog‘laning — 24 soat ichida javob beramiz.</p>
            <div className="cta__actions">
              <a href="mailto:hello@whiteline.uz" className="btn btn--primary btn--lg">hello@whiteline.uz <Arrow /></a>
              <a href="https://t.me/whiteline" target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg btn--on-dark">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
