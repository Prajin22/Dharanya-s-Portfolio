import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Magnetic from './Magnetic.jsx'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 64 },
  show: (delay) => ({ opacity: 1, y: 0, transition: { duration: 1.2, ease, delay } })
}

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const state = ready ? 'show' : 'hidden'

  const enter = (e) => {
    e.preventDefault()
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-lavender-100 via-white to-white"
    >
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.18, 1], x: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-lavender-200/70 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.12, 1], y: [0, -40, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-cream-200/80 blur-3xl"
      />
      <motion.div style={{ y: sceneY }} className="pointer-events-none absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>
      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate={state}
          className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-lavender-700"
        >
          <span className="h-px w-10 bg-lavender-500" />
          Foundation Year Portfolio
          <span className="h-px w-10 bg-lavender-500" />
        </motion.p>
        <motion.h1
          custom={0.28}
          variants={fadeUp}
          initial="hidden"
          animate={state}
          className="mt-8 font-display text-[clamp(4rem,15vw,10.5rem)] leading-[0.92] text-charcoal-deep"
        >
          Dharanya
        </motion.h1>
        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate={state}
          className="mt-7 text-xs font-medium uppercase tracking-[0.42em] text-charcoal-soft md:text-sm"
        >
          Interior Design & Spatial Foundations
        </motion.p>
        <motion.p
          custom={0.66}
          variants={fadeUp}
          initial="hidden"
          animate={state}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-mute"
        >
          Studies in form, light, texture and emotion — the raw materials from which every space is made.
        </motion.p>
        <motion.div custom={0.85} variants={fadeUp} initial="hidden" animate={state} className="mt-12">
          <Magnetic>
            <a
              href="#about"
              onClick={enter}
              className="group inline-flex items-center gap-4 rounded-full bg-charcoal-deep px-9 py-4 text-[12px] font-medium uppercase tracking-[0.28em] text-cream-50 shadow-lift transition-colors duration-500 hover:bg-lavender-600"
            >
              Enter Portfolio
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-y-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-charcoal-mute">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-charcoal/10">
          <motion.span
            animate={{ y: [-24, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-0 h-6 w-px bg-lavender-600"
          />
        </span>
      </motion.div>
      <p
        aria-hidden="true"
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.5em] text-charcoal-mute/70 [writing-mode:vertical-rl] xl:block"
      >
        Portfolio — Volume 01
      </p>
      <p
        aria-hidden="true"
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.5em] text-charcoal-mute/70 [writing-mode:vertical-rl] xl:block"
      >
        Form · Light · Texture
      </p>
    </section>
  )
}
