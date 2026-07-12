import { motion } from 'framer-motion'

/**
 * Calendario decorativo (no funcional) que ocupa el lugar del futuro embed
 * de Cal.com/Calendly. Muestra el mes en curso con disponibilidad simulada.
 */
const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]
const DIAS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const HORARIOS = ['8:30', '10:00', '11:30', '14:00', '16:30']

export default function CalendarWidget() {
  const hoy = new Date()
  const anio = hoy.getFullYear()
  const mes = hoy.getMonth()
  const diasEnMes = new Date(anio, mes + 1, 0).getDate()
  // getDay(): 0 = domingo; la grilla empieza en lunes
  const offset = (new Date(anio, mes, 1).getDay() + 6) % 7

  const esDisponible = (dia) => {
    const fecha = new Date(anio, mes, dia)
    const diaSemana = fecha.getDay()
    return dia > hoy.getDate() + 1 && diaSemana !== 0 && diaSemana !== 6
  }
  const diaSeleccionado = (() => {
    for (let d = 1; d <= diasEnMes; d++) if (esDisponible(d)) return d
    return null
  })()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="mt-8 md:mt-10 rounded-2xl border border-cream/15 bg-cream/5 p-4 sm:p-6 md:p-10"
    >
      <div className="grid md:grid-cols-5 gap-6 md:gap-8">
        {/* mes */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <p className="font-display-wide text-sm md:text-base">
              {MESES[mes]} <span className="text-sage-mist">{anio}</span>
            </p>
            <div className="flex gap-2 text-cream/40">
              <span className="w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-full border border-cream/15">‹</span>
              <span className="w-7 h-7 md:w-8 md:h-8 grid place-items-center rounded-full border border-cream/15">›</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 md:gap-1.5 text-center">
            {DIAS.map((d) => (
              <span key={d} className="eyebrow text-cream/40 py-1 md:py-2">{d}</span>
            ))}
            {Array.from({ length: offset }, (_, i) => (
              <span key={`v-${i}`} />
            ))}
            {Array.from({ length: diasEnMes }, (_, i) => {
              const dia = i + 1
              const disponible = esDisponible(dia)
              const seleccionado = dia === diaSeleccionado
              return (
                <span
                  key={dia}
                  className={`aspect-square grid place-items-center rounded-full text-xs md:text-sm tabular-nums transition-colors duration-300 ${
                    seleccionado
                      ? 'bg-sage text-cream font-bold'
                      : disponible
                        ? 'border border-sage-mist/40 text-cream hover:bg-cream/10 cursor-pointer'
                        : 'text-cream/25'
                  }`}
                >
                  {dia}
                </span>
              )
            })}
          </div>
        </div>

        {/* horarios */}
        <div className="md:col-span-2 md:border-l md:border-cream/15 md:pl-8 flex flex-col">
          <p className="eyebrow text-sage-mist mb-1">Horarios disponibles</p>
          <p className="label-serif text-cream/60 text-sm mb-3 md:mb-5">
            {diaSeleccionado
              ? `${diaSeleccionado} de ${MESES[mes].toLowerCase()} · valoración 30 min`
              : 'valoración · 30 min'}
          </p>
          <div className="flex flex-wrap md:flex-col gap-2 md:gap-2.5">
            {HORARIOS.map((h, i) => (
              <span
                key={h}
                className={`px-4 py-1.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm tabular-nums text-center border transition-colors duration-300 ${
                  i === 1
                    ? 'bg-cream text-ink border-cream font-bold'
                    : 'border-cream/20 text-cream/80 hover:border-sage-mist cursor-pointer'
                }`}
              >
                {h}
              </span>
            ))}
          </div>
          <p className="mt-4 md:mt-auto pt-4 md:pt-6 text-[11px] text-cream/35">
            Calendario demostrativo — aquí se conecta Cal.com o Calendly.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
