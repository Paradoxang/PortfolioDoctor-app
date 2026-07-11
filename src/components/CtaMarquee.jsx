import Marquee from './Marquee.jsx'

export default function CtaMarquee() {
  return (
    <a href="#agenda" className="block group">
      <div className="bg-sage text-cream py-6 md:py-10 transition-colors duration-500 group-hover:bg-sage-deep">
        <Marquee big duration={22} items={['Es el momento', 'Agenda tu valoración', 'Es el momento', 'Da el paso']} />
      </div>
    </a>
  )
}
