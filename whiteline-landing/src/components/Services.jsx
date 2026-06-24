import { services } from '../data'
import { ServiceIcon } from './Icons'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Bizning xizmatlar</span>
          <h2 className="section__title">To‘liq tsikldagi <span className="grad-text">raqamli yechimlar</span></h2>
          <p className="section__sub">Strategiyadan ishga tushirishgacha — har bir bosqichda yagona jamoa bilan.</p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-card__icon"><ServiceIcon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-card__shine" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
