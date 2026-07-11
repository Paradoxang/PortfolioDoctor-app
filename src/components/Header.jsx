import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-cream/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display-wide text-sm md:text-base">Dr. Valcárcel</span>
          <span className="label-serif text-xs text-sage-deep hidden sm:inline">cirugía plástica</span>
        </a>
        <a
          href="#agenda"
          className="group relative overflow-hidden rounded-full bg-ink text-cream px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wide"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
            Agenda tu valoración
          </span>
          <span className="absolute inset-0 bg-sage-mist translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
        </a>
      </div>
    </motion.header>
  )
}
