import Reveal from './Reveal.jsx'

export default function SectionHeading({ kicker, title, description, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal y={26}>
        <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-lavender-700">
          <span className="h-px w-10 bg-lavender-400" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08} y={34}>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] text-charcoal-deep md:text-6xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16} y={30}>
          <p className="mt-5 text-base leading-relaxed text-charcoal-mute md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
