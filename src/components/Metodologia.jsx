import { motion } from 'framer-motion'

const PASOS = [
  {
    num: '01',
    titulo: 'Valoración honesta',
    texto:
      'Una consulta sin libreto comercial. Escucho qué buscas, examino qué es posible y te digo con franqueza si la cirugía es — o no es — tu mejor opción.',
  },
  {
    num: '02',
    titulo: 'Plan quirúrgico a medida',
    texto:
      'Simulación, exámenes preoperatorios y un plan diseñado para tu anatomía. Nada de procedimientos de catálogo: cada cuerpo dicta su propia técnica.',
  },
  {
    num: '03',
    titulo: 'El procedimiento',
    texto:
      'Quirófanos certificados, equipo anestésico propio y protocolos de seguridad por encima de la norma. La precisión no se negocia.',
  },
  {
    num: '04',
    titulo: 'Acompañamiento total',
    texto:
      'El postoperatorio es la mitad del resultado. Controles programados, línea directa conmigo y seguimiento hasta el alta definitiva.',
  },
]

export default function Metodologia() {
  return (
    <div className="relative grain bg-cream px-5 md:px-10 py-24 md:py-36">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
        <p className="eyebrow text-ink/50">05 · Método</p>
        <h2 className="font-display-condensed text-4xl md:text-6xl">
          Cómo trabajo <span className="label-serif normal-case text-sage-deep text-3xl md:text-5xl">· en cuatro actos</span>
        </h2>
      </div>

      <div className="mt-14">
        {PASOS.map(({ num, titulo, texto }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="sticky bg-cream border-t border-ink/15 py-10 md:py-14 grid md:grid-cols-12 gap-4 group"
            style={{ top: `${96 + i * 16}px` }}
          >
            <p className="font-display-condensed text-5xl md:text-7xl text-sage/50 md:col-span-2 transition-colors duration-500 group-hover:text-sage">
              {num}
            </p>
            <h3 className="font-display-condensed text-2xl md:text-4xl md:col-span-4">{titulo}</h3>
            <p className="text-ink/70 leading-relaxed md:col-span-6 max-w-xl">{texto}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
