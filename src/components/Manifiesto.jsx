import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FRASE =
  'La cirugía no inventa belleza. La revela. Mi trabajo es escuchar lo que cada rostro y cada cuerpo ya dicen — y darles la precisión que merecen.'

function Palabra({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  )
}

export default function Manifiesto() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  })

  const palabras = FRASE.split(' ')

  return (
    <div ref={ref} className="relative grain bg-ink text-cream px-5 md:px-10 py-28 md:py-40">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-sage-mist mb-10">02 · Manifiesto</p>
        <p className="font-display-condensed normal-case text-3xl md:text-6xl leading-[1.05] tracking-tight">
          {palabras.map((palabra, i) => {
            const start = i / palabras.length
            const end = start + 1 / palabras.length
            return (
              <span key={i}>
                <Palabra progress={scrollYProgress} range={[start, end]}>
                  {palabra}
                </Palabra>{' '}
              </span>
            )
          })}
        </p>
        <p className="label-serif text-lg md:text-2xl text-sage-mist mt-12 text-right">
          — Dr. Adrián Valcárcel
        </p>
      </div>
    </div>
  )
}
