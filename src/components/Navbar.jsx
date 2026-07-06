import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Philosophy', href: '#about' },
  { label: 'Art', href: '#art' },
  { label: 'Craft', href: '#craft' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-charcoal/5 bg-white/80 shadow-soft backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" onClick={(e) => go(e, '#home')} className="font-display text-2xl text-charcoal-deep">
            Dharanya<span className="text-lavender-500">.</span>
          </a>
          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="group relative text-[13px] font-medium uppercase tracking-[0.18em] text-charcoal-soft transition-colors duration-300 hover:text-charcoal-deep"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-lavender-500 transition-transform duration-500 ease-silk group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-charcoal/15 px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 hover:border-lavender-500 hover:bg-lavender-500 hover:text-white"
            >
              Say Hello
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/70 backdrop-blur lg:hidden"
          >
            <span className={`absolute h-px w-5 bg-charcoal transition-all duration-500 ${open ? 'rotate-45' : '-translate-y-[3.5px]'}`} />
            <span className={`absolute h-px w-5 bg-charcoal transition-all duration-500 ${open ? '-rotate-45' : 'translate-y-[3.5px]'}`} />
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-cream-50 px-8 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 border-b border-charcoal/5 py-4 font-display text-4xl text-charcoal-deep"
                >
                  <span className="text-xs text-lavender-500">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col gap-2 text-sm text-charcoal-mute"
            >
              <a href="mailto:your-email@example.com" className="text-charcoal">
                your-email@example.com
              </a>
              <p className="text-[10px] uppercase tracking-[0.3em]">Interior Design & Spatial Foundations</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
