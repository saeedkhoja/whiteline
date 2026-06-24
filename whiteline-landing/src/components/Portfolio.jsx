import { clients } from '../data'
import { Arrow } from './Icons'

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Portfolio & Mijozlar</span>
          <h2 className="section__title">Yetakchi brendlar <span className="grad-text">bizga ishonadi</span></h2>
          <p className="section__sub">Davlat tuzilmalaridan fintech va startaplargacha — biz mahsulotlarni hayotga tatbiq etdik.</p>
        </div>

        <div className="portfolio__grid">
          {clients.map((c) => (
            <a className="case-card" href={c.url} target="_blank" rel="noreferrer" key={c.name}>
              <div className="case-card__top">
                <div className="case-card__logo">
                  <img src={c.logo} alt={c.name} loading="lazy" />
                </div>
                <span className="case-card__cat">{c.category}</span>
              </div>

              <h3 className="case-card__name">{c.name}</h3>
              <p className="case-card__work">{c.work}</p>

              <div className="case-card__tags">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>

              <div className="case-card__link">
                {c.url.replace('https://', '').replace(/\/$/, '')} <Arrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
