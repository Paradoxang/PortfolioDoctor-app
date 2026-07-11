import { motion } from 'framer-motion'

const PROCEDIMIENTOS = [
  {
    nombre: 'Rinoplastia',
    desc: 'Estructural y de preservación. Narices que respiran y armonizan, no que delatan.',
  },
  {
    nombre: 'Mamoplastia',
    desc: 'Aumento, reducción y levantamiento con planificación 3D y técnica de cicatriz mínima.',
  },
  {
    nombre: 'Lipoescultura HD',
    desc: 'Definición corporal de alta precisión con tecnología VASER y transferencia de grasa.',
  },
  {
    nombre: 'Rejuvenecimiento facial',
    desc: 'Lifting profundo (deep plane), blefaroplastia y manejo integral del envejecimiento.',
  },
  {
    nombre: 'Cirugía post-bariátrica',
    desc: 'Reconstrucción corporal tras grandes pérdidas de peso: abdomen, brazos y muslos.',
  },
  {
    nombre: 'Reconstructiva',
    desc: 'Reconstrucción mamaria y secuelas de trauma. El origen — y el corazón — de mi práctica.',
  },
]

export default function Procedimientos() {
  return (
    <div className="relative grain bg-cream px-5 md:px-10 py-24 md:py-36">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16">
        <p className="eyebrow text-ink/50">07 · Procedimientos</p>
        <h2 className="font-display-condensed text-4xl md:text-6xl">Lo que hago</h2>
      </div>

      <div className="border-t border-ink/15">
        {PROCEDIMIENTOS.map(({ nombre, desc }, i) => (
          <motion.a
            key={nombre}
            href="#agenda"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
            className="group grid md:grid-cols-12 gap-2 md:gap-6 items-center border-b border-ink/15 py-8 md:py-10 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-ink origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <span className="relative eyebrow text-ink/40 group-hover:text-sage-mist md:col-span-1 transition-colors duration-500">
              0{i + 1}
            </span>
            <h3 className="relative font-display-condensed text-3xl md:text-5xl md:col-span-5 group-hover:text-cream transition-colors duration-500">
              {nombre}
            </h3>
            <p className="relative text-ink/60 group-hover:text-cream/70 md:col-span-5 max-w-md transition-colors duration-500">
              {desc}
            </p>
            <span className="relative hidden md:flex md:col-span-1 justify-end text-2xl text-ink/30 group-hover:text-sage-mist transition-all duration-500 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        ))}
      </div>

      <p className="mt-10 text-sm text-ink/50 max-w-lg label-serif">
        ¿No encuentras tu procedimiento? En la valoración revisamos tu caso
        particular — y si no soy la persona indicada, te refiero con quien sí.
      </p>
    </div>
  )
}
