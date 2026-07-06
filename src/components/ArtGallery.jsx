import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { artProjects } from '../data/projects.js'
import useMediaQuery from '../hooks/useMediaQuery.js'
import SectionHeading from './SectionHeading.jsx'
import TiltCard from './TiltCard.jsx'
import ArtworkMedia from './ArtworkMedia.jsx'
import Reveal from './Reveal.jsx'

function ArtCard({ project, index }) {
  return (
    <TiltCard className="aspect-[3/4] w-[min(78vw,410px)] shrink-0 snap-center">
      <article
        tabIndex={0}
        className="relative h-full w-full overflow-hidden rounded-[28px] bg-cream-100 shadow-card transition-shadow duration-700 ease-silk hover:shadow-lift"
      >
        <div className="absolute inset-0 transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.07]">
          <ArtworkMedia project={project} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/45 via-transparent to-transparent opacity-70 transition-opacity duration-700 lg:opacity-0 lg:group-hover:opacity-70" />
        <span className="absolute right-5 top-4 rounded-full border border-white/40 bg-white/60 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-charcoal backdrop-blur-md">
          {project.medium}
        </span>
        <span aria-hidden="true" className="absolute left-5 top-3 font-display text-6xl leading-none text-white/70 [text-shadow:0_2px_18px_rgba(27,24,32,0.25)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute inset-x-3 bottom-3 translate-y-0 rounded-2xl border border-white/60 bg-white/75 p-5 opacity-100 shadow-soft backdrop-blur-xl transition-all duration-700 ease-silk lg:translate-y-[112%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
          <h3 className="font-display text-2xl leading-tight text-charcoal-deep">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{project.description}</p>
        </div>
      </article>
    </TiltCard>
  )
}

function HorizontalGallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [range, setRange] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 })
  const x = useTransform(smooth, [0, 1], [0, -range])

  return (
    <div ref={sectionRef} style={{ height: `calc(100vh + ${range}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-7 pl-[max(6vw,2rem)] pr-[14vw]">
          {artProjects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.05, 0.2)} className="shrink-0">
              <ArtCard project={project} index={i} />
            </Reveal>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute bottom-10 left-1/2 w-56 -translate-x-1/2">
          <div className="h-px w-full bg-charcoal/10" />
          <motion.div style={{ scaleX: smooth }} className="-mt-px h-[2px] origin-left bg-lavender-500" />
        </div>
      </div>
    </div>
  )
}

function MobileGallery() {
  return (
    <div className="pb-20 pt-4">
      <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6">
        {artProjects.map((project, i) => (
          <ArtCard key={project.id} project={project} index={i} />
        ))}
      </div>
      <p className="px-6 text-center text-[10px] uppercase tracking-[0.35em] text-charcoal-mute">Swipe to explore</p>
    </div>
  )
}

export default function ArtGallery() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section id="art" className="relative scroll-mt-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32 lg:px-10">
        <SectionHeading
          kicker="02 — Portfolio"
          title="Art Exploration"
          description="A first-year record of seeing — perspective, portrait, colour and pattern studies that train the eye before it shapes space."
        />
      </div>
      {isDesktop ? <HorizontalGallery /> : <MobileGallery />}
    </section>
  )
}
