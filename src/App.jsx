import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="relative" style={{ background: '#F0E6CC', minHeight: '100vh' }}>
      <Background />
      <CursorTrail />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <div data-reveal><Marquee /></div>
          <div data-reveal data-delay="1"><About /></div>
          <div data-reveal data-delay="1"><Services /></div>
          <div data-reveal data-delay="1"><HowItWorks /></div>
          <div data-reveal data-delay="1"><Contact /></div>
        </main>
        <div data-reveal><Footer /></div>
      </div>
    </div>
  )
}
