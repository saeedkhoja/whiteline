import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import OrderForm from './components/OrderForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], .section__head, .service-card, .case-card, .stat, .order__info, .order__form')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => el.classList.add('reveal') || io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <OrderForm />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
