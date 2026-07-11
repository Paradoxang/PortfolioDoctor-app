import { motion } from 'framer-motion'
import ResponsiveImage from './ResponsiveImage.jsx'
import retratoManifest from '../media/retrato-doctor.manifest.json'

const DATOS = [
  { k: 'Ubicación', v: 'Bogotá · Colombia' },
  { k: 'Especialidad', v: 'Cirugía plástica, estética y reconstructiva' },
  { k: 'Trayectoria', v: '15+ años en quirófano' },
  { k: 'Estado', v: 'Agenda abierta · 2026', vivo: true },
]

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i },
  }),
}

export default function About() {
  return (
    <div className="relative grain bg-cream px-5 md:px-10 py-24 md:py-36 overflow-hidden">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="eyebrow text-ink/50 mb-12"
      >
        03 · Perfil
      </motion.p>

      <div className="grid md:grid-cols-12 gap-10 md:gap-6 items-start">
        {/* texto vertical decorativo */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden md:block md:col-span-2"
        >
          <p
            className="font-display-condensed text-[5.5rem] text-sage/40 leading-[0.85]"
            style={{ writingMode: 'vertical-rl' }}
          >
            El arte de sanar
          </p>
        </motion.div>

        {/* retrato */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={1}
          className="md:col-span-4"
        >
          <ResponsiveImage
            manifest={retratoManifest}
            alt="Retrato del Dr. Adrián Valcárcel"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="rounded-2xl"
          />
        </motion.div>

        {/* bio + datos */}
        <div className="md:col-span-6 md:pl-8">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={2}
            className="font-display-condensed text-4xl md:text-6xl mb-8"
          >
            Médico primero.
            <br />
            <span className="text-sage-deep">Esteta después.</span>
          </motion.h2>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={3}
            className="space-y-4 text-ink/70 leading-relaxed max-w-xl"
          >
            <p>
              Cirujano plástico certificado, formado en Bogotá y especializado
              entre Madrid y Miami. Quince años dedicados a un mismo principio:
              el mejor resultado es el que nadie nota, pero todos perciben.
            </p>
            <p>
              Opero como se forja un instrumento de precisión — sin prisa, con
              obsesión por el detalle y con la honestidad de decir “no” cuando
              un procedimiento no es el camino.
            </p>
          </motion.div>

          <div className="mt-10 border-t border-ink/15">
            {DATOS.map(({ k, v, vivo }, i) => (
              <motion.div
                key={k}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                className="flex justify-between items-center gap-4 py-4 border-b border-ink/15"
              >
                <span className="eyebrow text-ink/50">{k}</span>
                <span className="text-sm md:text-base font-semibold text-right flex items-center gap-2">
                  {vivo && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-deep" />
                    </span>
                  )}
                  {v}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
