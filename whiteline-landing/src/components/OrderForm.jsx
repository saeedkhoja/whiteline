import { useState } from 'react'
import { orderServices } from '../data'
import { Arrow } from './Icons'

const TELEGRAM = 'https://t.me/whiteline'
const PHONE = '+998000000000'

export default function OrderForm() {
  const [picked, setPicked] = useState(['Web sayt / platforma'])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', note: '' })

  const toggle = (s) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  const submit = (e) => {
    e.preventDefault()
    const text = `Yangi buyurtma:\nIsm: ${form.name}\nTel: ${form.phone}\nXizmat: ${picked.join(', ')}\nIzoh: ${form.note}`
    window.open(`${TELEGRAM}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section className="section order" id="order">
      <div className="order__glow" />
      <div className="container order__inner">
        <div className="order__info">
          <span className="eyebrow eyebrow--light">Buyurtma berish</span>
          <h2 className="section__title order__title">
            Loyihangizni <span className="grad-text">bugun boshlang</span>
          </h2>
          <p className="order__sub">
            Eng oson yo‘l — bitta bosishda biz bilan bog‘laning. Yoki quyidagi qisqa
            formani to‘ldiring, jamoamiz <b>24 soat ichida</b> javob beradi.
          </p>

          {/* 1-tap quick contact */}
          <div className="order__quick">
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="quick-btn quick-btn--tg">
              <span className="quick-btn__ic">✈</span>
              <span><b>Telegram orqali yozish</b><small>Eng tezkor — bir bosishda</small></span>
            </a>
            <a href={`tel:${PHONE}`} className="quick-btn quick-btn--call">
              <span className="quick-btn__ic">☎</span>
              <span><b>Qo‘ng‘iroq qilish</b><small>{PHONE.replace('998', '998 ')}</small></span>
            </a>
          </div>

          <ul className="order__list">
            <li>✓ Bepul konsultatsiya va narx hisob-kitobi</li>
            <li>✓ Web · Mobile · Telegram bot · CRM/ERP</li>
            <li>✓ Shartnoma va kafolat bilan ishlaymiz</li>
          </ul>
        </div>

        <form className="order__form" onSubmit={submit}>
          {sent ? (
            <div className="order__done">
              <div className="order__done-ic">✓</div>
              <h3>Rahmat, {form.name || 'do‘st'}!</h3>
              <p>Arizangiz qabul qilindi. Telegram oynasida xabarni yuborishni tasdiqlang —
                jamoamiz tez orada bog‘lanadi.</p>
              <button type="button" className="btn-glow btn-glow--full" onClick={() => setSent(false)}>
                <span>Yana ariza qoldirish</span>
              </button>
            </div>
          ) : (
            <>
              <p className="order__form-label">Qaysi xizmat kerak? <span>(bir nechtasini tanlang)</span></p>
              <div className="order__chips">
                {orderServices.map((s) => {
                  const active = picked.includes(s)
                  return (
                    <button
                      type="button"
                      key={s}
                      className={`order__chip ${active ? 'is-active' : ''}`}
                      aria-pressed={active}
                      onClick={() => toggle(s)}
                    >
                      <span className="order__chip-box">{active ? '✓' : '+'}</span>
                      {s}
                    </button>
                  )
                })}
              </div>

              <div className="order__row">
                <div className="order__field">
                  <label>Ismingiz</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Masalan, Aziz"
                  />
                </div>
                <div className="order__field">
                  <label>Telefon / Telegram</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+998 90 123 45 67"
                  />
                </div>
              </div>
              <div className="order__field">
                <label>Loyiha haqida qisqacha <span className="opt">(ixtiyoriy)</span></label>
                <textarea
                  rows="3"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Nima qilmoqchisiz?"
                />
              </div>

              <button type="submit" className="btn-glow btn-glow--full">
                <span>Arizani yuborish</span>
                <Arrow />
              </button>
              <p className="order__hint">🔒 Ma’lumotlaringiz uchinchi shaxslarga berilmaydi.</p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
