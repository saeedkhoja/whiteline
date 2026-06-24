import { stats } from '../data'
import { Arrow } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__wave" />
      </div>

      {/* Founder photo — cinematic centerpiece (desktop background) */}
      <img src="/assets/ceo/temur.png" alt="Temur Rakhimovich" className="hero__founder" />
      <div className="hero__founder-fade" />

      <div className="container hero__inner">
        <div className="hero__left">
          <span className="hero__kicker">Boshlang‘ich va tajribali bizneslar uchun</span>
          <h1 className="hero__display">
            RAQAMLI
            <span className="hero__script">mahsulot</span>
            BIZNESI
          </h1>
          <p className="hero__sign">— WhiteLine jamoasidan</p>
        </div>

        {/* Mobile-only visible founder card */}
        <div className="hero__photo">
          <img src="/assets/ceo/temur.png" alt="Temur Rakhimovich — WhiteLine asoschisi" />
          <div className="hero__photo-badge">
            <b>Temur Rakhimovich</b>
            <small>Asoschi & CEO</small>
          </div>
        </div>

        <div className="hero__right">
          <p className="hero__right-top">Biz g‘oyangizni bozorni zabt etadigan</p>
          <h2 className="hero__right-head">
            <span className="grad-text">web, mobile, bot</span> va <span className="grad-text">CRM</span> yechimlariga aylantiramiz
          </h2>
          <a href="#order" className="btn-glow">
            <span>BUYURTMA BERISH</span>
            <Arrow />
          </a>
          <div className="hero__seats">
            <span className="hero__seats-dot" /> Faol mijozlar: <b>40+</b> · Bandlik: 90% to‘ldi
          </div>
        </div>
      </div>

      <div className="container hero__stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__value grad-text">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
