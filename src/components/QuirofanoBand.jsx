import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import manifest from '../media/quirofano.manifest.json'

const BASE = '/media'
const prefix = (srcset) => srcset.replace(/([^\s,]+\.\w+)/g, `${BASE}/$1`)

/** Banda panorámica full-bleed del quirófano con parallax sutil al hacer scroll. */
export default function QuirofanoBand() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [loaded, setLoaded] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-ink">
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-x-0 top-[-12%] h-[124%] will-change-transform"
      >
        <img
          src={manifest.lqip}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover blur-xl transition-opacity duration-700 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <picture>
          <source type="image/avif" srcSet={prefix(manifest.srcset.avif)} sizes="100vw" />
          <source type="image/webp" srcSet={prefix(manifest.srcset.webp)} sizes="100vw" />
          <img
            src={`${BASE}/${manifest.fallback}`}
            alt="Quirófano del Dr. Valcárcel"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <div className="absolute bottom-0 inset-x-0 px-5 md:px-10 pb-8 md:pb-12 flex flex-wrap items-end justify-between gap-4 text-cream">
        <p className="eyebrow text-sage-mist">Donde sucede · el quirófano</p>
        <p className="label-serif text-lg md:text-2xl max-w-md text-right">
          “La precisión no se negocia.”
        </p>
      </div>
    </div>
  )
}
