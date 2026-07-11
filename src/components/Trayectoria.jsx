import { motion } from 'framer-motion'
import ResponsiveImage from './ResponsiveImage.jsx'
import bogotaManifest from '../media/bogota.manifest.json'
import madridManifest from '../media/madrid.manifest.json'
import miamiManifest from '../media/miami.manifest.json'

const CAPITULOS = [
  {
    cap: 'Capítulo · Uno',
    ciudad: 'Bogotá',
    anio: '2005 — 2013',
    titulo: 'Donde empezó todo',
    texto:
      'Medicina en la Universidad Nacional y residencia en cirugía plástica. Bogotá me enseñó disciplina: turnos largos, trauma reconstructivo y el respeto absoluto por el tejido humano.',
    manifest: bogotaManifest,
    alt: 'Panorámica de Bogotá al atardecer',
  },
  {
    cap: 'Capítulo · Dos',
    ciudad: 'Madrid',
    anio: '2013 — 2016',
    titulo: 'La escuela europea',
    texto:
      'Especialización en cirugía facial en Madrid. Europa me dio método y mesura: la estética entendida como proporción, no como exceso. Ahí aprendí a operar menos para lograr más.',
    manifest: madridManifest,
    alt: 'Arquitectura clásica de Madrid',
  },
  {
    cap: 'Capítulo · Tres',
    ciudad: 'Miami',
    anio: '2016 — 2019',
    titulo: 'El estándar mundial',
    texto:
      'Fellowship en cirugía corporal en Miami, el epicentro de la especialidad. Volví a Colombia con las técnicas más recientes y una convicción: la seguridad del paciente es la verdadera vanguardia.',
    manifest: miamiManifest,
    alt: 'Palmeras y arquitectura moderna de Miami',
  },
]

export default function Trayectoria() {
  return (
    <div className="relative grain bg-ink text-cream px-5 md:px-10 py-24 md:py-36 overflow-hidden">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-20">
        <p className="eyebrow text-sage-mist">06 · Trayectoria</p>
        <h2 className="font-display-condensed text-4xl md:text-6xl">
          Tres ciudades <span className="label-serif normal-case text-sage-mist text-3xl md:text-5xl">· una vocación</span>
        </h2>
      </div>

      <div className="space-y-24 md:space-y-36">
        {CAPITULOS.map(({ cap, ciudad, anio, titulo, texto, manifest, alt }, i) => {
          const invertido = i % 2 === 1
          return (
            <div key={ciudad} className={`grid md:grid-cols-12 gap-8 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: invertido ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`md:col-span-5 ${invertido ? 'md:order-2 md:col-start-8' : ''}`}
              >
                <ResponsiveImage
                  manifest={manifest}
                  alt={alt}
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className={`md:col-span-6 ${invertido ? 'md:order-1 md:col-start-1' : 'md:col-start-7'}`}
              >
                <p className="eyebrow text-sage-mist">{cap}</p>
                <h3 className="font-display-condensed text-6xl md:text-8xl mt-3 text-cream/95">
                  {ciudad}
                </h3>
                <p className="label-serif text-sage-mist mt-1">{anio} · {titulo}</p>
                <p className="mt-6 text-cream/70 leading-relaxed max-w-lg">{texto}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
