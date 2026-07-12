import { motion } from 'framer-motion'

const NOMBRE = 'VALCÁRCEL'

const letter = {
  hidden: { y: '110%', rotate: 4 },
  visible: (i) => ({
    y: '0%',
    rotate: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i + 0.2 },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <div className="relative grain min-h-svh flex flex-col justify-between px-5 md:px-10 pt-24 pb-8 bg-cream overflow-hidden">
      {/* etiquetas superiores */}
      <div className="flex justify-between items-start">
        <motion.p variants={fade} initial="hidden" animate="visible" custom={0.9} className="eyebrow text-ink/60">
          Portafolio · MMXXVI
        </motion.p>
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="eyebrow text-ink/60 text-right hidden sm:block"
        >
          Cirugía plástica · estética y reconstructiva
        </motion.p>
      </div>

      {/* nombre gigante */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="label-serif text-2xl md:text-4xl text-sage-deep mb-2 md:mb-4"
        >
          Dr. Adrián
        </motion.p>
        <h1 className="font-display-condensed text-[16.5vw] leading-[0.85] flex" aria-label={NOMBRE}>
          {NOMBRE.split('').map((char, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                custom={i}
                variants={letter}
                initial="hidden"
                animate="visible"
                className="inline-block transition-colors duration-300 hover:text-sage cursor-default"
              >
                {char}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="mt-6 max-w-md text-sm md:text-base text-ink/70 leading-relaxed"
        >
          La cirugía plástica como oficio de precisión: resultados naturales,
          criterio médico y doce años de quirófano.
        </motion.p>
      </div>

      {/* pie del hero */}
      <div className="flex justify-between items-end">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.3}
          className="flex items-center gap-2 border border-ink/20 rounded-full px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-deep" />
          </span>
          <span className="eyebrow text-ink/80">Agenda abierta · 2026</span>
        </motion.div>
        <motion.a
          href="#manifiesto"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.4}
          className="eyebrow text-ink/60 flex items-center gap-2 group"
        >
          Desliza
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
        </motion.a>
      </div>
    </div>
  )
}
