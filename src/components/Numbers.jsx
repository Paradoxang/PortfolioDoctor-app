import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const CIFRAS = [
  { valor: 2400, sufijo: '+', label: 'Procedimientos realizados', nota: 'Cada uno, planeado como el primero.' },
  { valor: 12, prefijo: '+', sufijo: ' años', label: 'Años de experiencia', nota: 'Entre Bogotá, Madrid y Miami.' },
  { valor: 98, sufijo: '%', label: 'Satisfacción de pacientes', nota: 'Medida en controles postoperatorios.' },
  { valor: 7, sufijo: '', label: 'Certificaciones internacionales', nota: 'Y las que faltan.' },
]

function Contador({ valor, prefijo = '', sufijo }) {
  const ref = useRef(null)
  // Margen inferior positivo: dispara el conteo cuando el número se acerca al
  // viewport (incluso desde abajo), no después de entrar. Evita que en pantallas
  // cortas de móvil la última cifra se quede atascada en 0.
  const inView = useInView(ref, { once: true, margin: '0px 0px 20% 0px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 2200, bounce: 0 })
  const texto = useTransform(spring, (v) => Math.round(v).toLocaleString('es-CO'))

  useEffect(() => {
    if (inView) motionValue.set(valor)
  }, [inView, motionValue, valor])

  return (
    <span ref={ref} className="tabular-nums">
      {prefijo}
      <motion.span>{texto}</motion.span>
      {sufijo}
    </span>
  )
}

export default function Numbers() {
  return (
    <div className="relative grain bg-ink text-cream px-5 md:px-10 py-24 md:py-36">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16">
        <p className="eyebrow text-sage-mist">04 · En cifras</p>
        <h2 className="font-display-condensed text-4xl md:text-6xl">Lo que dicen los números</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-cream/15">
        {CIFRAS.map(({ valor, prefijo, sufijo, label, nota }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
            className="border-b sm:border-r border-cream/15 last:border-r-0 p-8 md:p-10 group hover:bg-cream/5 transition-colors duration-500"
          >
            <p className="font-display-condensed text-6xl md:text-7xl text-sage-mist group-hover:text-sage transition-colors duration-500">
              <Contador valor={valor} prefijo={prefijo} sufijo={sufijo} />
            </p>
            <p className="mt-4 font-semibold">{label}</p>
            <p className="mt-1 text-sm text-cream/50 label-serif">{nota}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
