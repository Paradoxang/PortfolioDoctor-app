import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './components/Header.jsx'
import SideNav from './components/SideNav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Manifiesto from './components/Manifiesto.jsx'
import About from './components/About.jsx'
import Numbers from './components/Numbers.jsx'
import Metodologia from './components/Metodologia.jsx'
import QuirofanoBand from './components/QuirofanoBand.jsx'
import Trayectoria from './components/Trayectoria.jsx'
import Procedimientos from './components/Procedimientos.jsx'
import CtaMarquee from './components/CtaMarquee.jsx'
import Agenda from './components/Agenda.jsx'
import Footer from './components/Footer.jsx'

const FRASES_A = [
  'PRECISIÓN QUIRÚRGICA',
  'RESULTADOS NATURALES',
  'CIENCIA Y ESTÉTICA',
  'DR. ADRIÁN VALCÁRCEL',
  'EL DETALLE ES EL TODO',
]

const FRASES_B = [
  'CADA ROSTRO ES ÚNICO',
  'BISTURÍ Y CRITERIO',
  'PRIMERO, NO DAÑAR',
  'ARMONÍA SOBRE TENDENCIA',
  'CONFIANZA SE OPERA',
]

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative">
      <Header />
      <SideNav />
      <main>
        <section id="inicio"><Hero /></section>
        <Marquee items={FRASES_A} className="bg-ink text-cream" />
        <Marquee items={FRASES_B} reverse className="bg-sage text-cream" />
        <section id="manifiesto"><Manifiesto /></section>
        <section id="perfil"><About /></section>
        <section id="cifras"><Numbers /></section>
        <section id="metodo"><Metodologia /></section>
        <QuirofanoBand />
        <section id="trayectoria"><Trayectoria /></section>
        <section id="procedimientos"><Procedimientos /></section>
        <CtaMarquee />
        <section id="agenda"><Agenda /></section>
      </main>
      <Footer />
    </div>
  )
}
