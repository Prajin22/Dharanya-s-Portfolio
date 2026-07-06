import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Resume', href: '#' }
]

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal-deep text-cream-50">
      <div aria-hidden="true" className="absolute -top-48 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-lavender-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 md:pt-32 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-lavender-300">
            <span className="h-px w-10 bg-lavender-400" />
            04 — Contact
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal delay={0.08}>
              <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">
                Get in <em className="text-lavender-300">Touch</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-cream-50/60">
                Open to studio conversations, internships and collaborative student projects — let's talk about space, material and light.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10">
                <Magnetic>
                  <a
                    href="mailto:tamilangame48@gmail.com"
                    className="group inline-flex items-center gap-4 rounded-full border border-cream-50/25 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.24em] transition-all duration-500 hover:border-lavender-400 hover:bg-lavender-500 hover:text-white"
                  >
                    tamilangame48@gmail.com
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex flex-col items-start gap-5 lg:items-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative text-sm uppercase tracking-[0.28em] text-cream-50/70 transition-colors duration-500 hover:text-white"
              >
                {social.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-lavender-400 transition-transform duration-500 ease-silk group-hover:scale-x-100" />
              </a>
            ))}
            <motion.button
              whileHover={{ y: -4 }}
              onClick={toTop}
              aria-label="Back to top"
              className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream-50/20 text-cream-50/80 transition-colors duration-500 hover:border-lavender-400 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M12 19V5m0 0l-6 6m6-6l6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </Reveal>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-cream-50/10 pt-8 text-[11px] uppercase tracking-[0.22em] text-cream-50/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dharanya — DOT School of Design</p>
          <p>Foundations of Space · Light · Material</p>
        </div>
      </div>
    </footer>
  )
}
