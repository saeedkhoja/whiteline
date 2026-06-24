import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const order = document.getElementById('order')
      const past = window.scrollY > 600
      const beforeOrder = !order || order.getBoundingClientRect().top > 400
      setShow(past && beforeOrder)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#order" className={`floating-cta ${show ? 'is-visible' : ''}`} aria-label="Buyurtma berish">
      <span className="floating-cta__pulse" />
      <span className="floating-cta__ic">✦</span>
      <span className="floating-cta__txt">Buyurtma berish</span>
    </a>
  )
}
