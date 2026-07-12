import { motion } from 'framer-motion'
import CalendarWidget from './CalendarWidget.jsx'

const CONTACTOS = [
  {
    canal: 'Email',
    valor: 'santiago.miranda.trabajo@gmail.com',
    nota: 'Respuesta en menos de 24 horas hábiles.',
    href: 'mailto:santiago.miranda.trabajo@gmail.com',
  },
  {
    canal: 'WhatsApp',
    valor: '+57 318 981 9384',
    nota: 'Coordinación de citas y dudas rápidas.',
    href: 'https://wa.me/573189819384',
  },
  {
    canal: 'Instagram',
    valor: '@paradoxxan',
    nota: 'Resultados, quirófano y vida de consulta.',
    href: 'https://instagram.com/paradoxxan',
  },
  {
    canal: 'Consultorio',
    valor: 'Bogotá',
    nota: 'Atención con cita previa.',
    href: '#',
  },
]

export default function Agenda() {
  return (
    <div className="relative grain bg-ink text-cream px-5 md:px-10 py-24 md:py-36 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* título + calendario */}
        <div className="lg:col-span-7 min-w-0">
          <p className="eyebrow text-sage-mist mb-8">08 · Agenda</p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display-condensed text-5xl md:text-8xl leading-[0.9]"
          >
            Hablemos
            <br />
            <span className="text-sage-mist">de tu caso</span>
          </motion.h2>
          <p className="mt-8 max-w-md text-cream/70 leading-relaxed">
            Elige un horario para tu valoración inicial — sin cadenas de
            correos. Si tu caso necesita más de 30 minutos, lo extendemos en la
            misma llamada.
          </p>

          {/*
            Para conectar el calendario real (Cal.com o Calendly), reemplaza
            <CalendarWidget /> por:
            <iframe src="https://cal.com/TU_USUARIO/valoracion" className="w-full h-[560px] rounded-2xl" />
          */}
          <CalendarWidget />
          <a
            href="mailto:santiago.miranda.trabajo@gmail.com"
            className="group relative overflow-hidden rounded-full bg-cream text-ink px-8 py-3 font-semibold text-sm inline-block mt-6"
          >
            <span className="relative z-10">Solicitar valoración →</span>
            <span className="absolute inset-0 bg-sage-mist -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
          </a>
        </div>

        {/* contactos */}
        <div className="lg:col-span-5 lg:pt-24 min-w-0">
          <p className="label-serif text-sage-mist text-xl mb-6">
            … o por la vía de siempre
          </p>
          <div className="border-t border-cream/15">
            {CONTACTOS.map(({ canal, valor, nota, href }, i) => (
              <motion.a
                key={canal}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i }}
                className="group flex items-start justify-between gap-4 py-6 border-b border-cream/15 hover:bg-cream/5 transition-colors duration-300 px-2"
              >
                <div className="min-w-0">
                  <p className="eyebrow text-sage-mist">{canal}</p>
                  <p className="mt-1 font-semibold text-base md:text-lg break-words">{valor}</p>
                  <p className="text-sm text-cream/50">{nota}</p>
                </div>
                <span className="shrink-0 text-xl text-cream/40 transition-all duration-300 group-hover:text-sage-mist group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
