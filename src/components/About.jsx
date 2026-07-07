import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'

const chips = ['Form', 'Light', 'Texture', 'Emotion', 'Human Scale']

const stats = [
  ['10', 'Art Studies'],
  ['05', 'Craft Works'],
  ['01', 'Foundation Year']
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const floatY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const rotate = useTransform(scrollYProgress, [0, 1], [-3.5, -0.5])

  return (
    <section ref={ref} id="about" className="relative scroll-mt-16 overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-lavender-100 opacity-80 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-36 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal y={20}>
              <span aria-hidden="true" className="font-display text-8xl leading-none text-lavender-200">01</span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-2 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-lavender-700">
                <span className="h-px w-10 bg-lavender-400" />
                Design Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="mt-6 font-display text-4xl leading-[1.12] text-charcoal-deep md:text-5xl">
                Understanding space begins with understanding
                <em className="text-lavender-600"> form, light, texture, and emotion.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.div style={{ y: floatY, rotate }} className="relative mt-14 w-56 md:w-64">
                <div aria-hidden="true" className="absolute -inset-3 rotate-[4deg] rounded-[30px] border border-lavender-300/70 bg-lavender-100/60" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-lift">
                  <img
                    src="/profile.jpg"
                    alt="Dharanya, interior design student at DOT School of Design, Chennai"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-charcoal-mute">
                  <span className="h-px w-6 bg-lavender-400" />
                  Dharanya · B.Des Interior Design
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Reveal>
            <p className="text-lg leading-relaxed text-charcoal-soft md:text-xl">
              Currently pursuing my studies at the <strong className="font-semibold text-lavender-600">DOT School of Design, Chennai</strong>, my focus as a first-year interior design student is on mastering the foundational, tactile elements that dictate how an environment feels, functions, and connects with human scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-charcoal-mute">
              At DOT School of Design—a pioneering institution in Chennai known for its hands-on, state-of-the-art design studios and industrial design labs—we are encouraged to merge traditional art and craft studies with industrial and architectural principles. Every drawing, painting, and craft study in this portfolio is a deliberate exercise: training the eye to measure, the hand to describe, and the mind to feel how material and light shape human experience long before a floor plan is drawn.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-lavender-200 bg-lavender-50 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-charcoal-soft transition-colors duration-500 hover:border-lavender-400 hover:bg-lavender-100"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-10">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-4xl text-charcoal-deep md:text-5xl">{value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-charcoal-mute">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
