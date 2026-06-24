import { clients } from '../data'

export default function Marquee() {
  const row = [...clients, ...clients]
  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">Bizga ishongan brendlar</p>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {row.map((c, i) => (
            <div className="marquee__item" key={i}>
              <img src={c.logo} alt={c.name} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
