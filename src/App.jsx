import LoadingScreen from './components/LoadingScreen'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import Feature from './components/Feature'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SawCursor from './components/SawCursor'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTilt } from './hooks/useTilt'

export default function App() {
  useScrollReveal()
  useTilt()

  return (
    <>
      <LoadingScreen />
      <div className="relative" style={{ background: '#F0E6CC', minHeight: '100vh' }}>
        <Background />
        <SawCursor />
        <BackToTop />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <main>
            <Hero />
            <div data-reveal><Marquee /></div>
            <About />
            <div data-reveal data-delay="1"><Services /></div>
            <Showcase />
            <div data-reveal data-delay="1"><Feature /></div>
            <div data-reveal data-delay="1"><HowItWorks /></div>
            <div data-reveal><CtaBanner /></div>
            <div data-reveal data-delay="1"><Contact /></div>
          </main>
          <div data-reveal><Footer /></div>
        </div>
      </div>
    </>
  )
}
