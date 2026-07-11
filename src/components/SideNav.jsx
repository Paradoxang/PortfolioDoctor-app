import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'inicio', num: '01', label: 'Inicio' },
  { id: 'manifiesto', num: '02', label: 'Manifiesto' },
  { id: 'perfil', num: '03', label: 'Perfil' },
  { id: 'cifras', num: '04', label: 'Cifras' },
  { id: 'metodo', num: '05', label: 'Método' },
  { id: 'trayectoria', num: '06', label: 'Trayectoria' },
  { id: 'procedimientos', num: '07', label: 'Procedimientos' },
  { id: 'agenda', num: '08', label: 'Agenda' },
]

export default function SideNav() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 mix-blend-difference text-cream">
      {SECTIONS.map(({ id, num, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`group flex items-center justify-end gap-2 text-[11px] tracking-[0.2em] uppercase transition-opacity ${
            active === id ? 'opacity-100' : 'opacity-40 hover:opacity-80'
          }`}
        >
          <span className="overflow-hidden">
            <span
              className={`block transition-transform duration-300 ${
                active === id ? 'translate-x-0' : 'translate-x-full group-hover:translate-x-0'
              }`}
            >
              {label}
            </span>
          </span>
          <span className="font-display-wide">{num}</span>
          <span
            className={`h-px bg-current transition-all duration-300 ${active === id ? 'w-8' : 'w-4'}`}
          />
        </a>
      ))}
    </nav>
  )
}
