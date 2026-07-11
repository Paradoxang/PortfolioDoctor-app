export default function Marquee({ items, reverse = false, duration = 32, className = '', big = false }) {
  const row = items.flatMap((item, i) => [
    <span
      key={`t-${i}`}
      className={
        big
          ? 'font-display-condensed text-[14vw] leading-none px-6 md:text-[9vw]'
          : 'font-display-wide text-sm md:text-base px-6 py-3'
      }
    >
      {item}
    </span>,
    <span
      key={`s-${i}`}
      aria-hidden="true"
      className={`label-serif ${big ? 'text-[6vw] md:text-[4vw] px-6 self-center' : 'text-sm md:text-base px-2 py-3'} opacity-70`}
    >
      ✦
    </span>,
  ])

  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div
        className={`marquee-track items-center ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <div className="flex items-center shrink-0">{row}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">{row}</div>
      </div>
    </div>
  )
}
