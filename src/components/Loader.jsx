import { motion } from 'framer-motion'

const letters = 'Dharanya'.split('')

export default function Loader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-100"
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <div className="flex">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="font-display text-5xl text-charcoal-deep md:text-7xl"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.div
        className="mt-6 h-px w-44 origin-left bg-lavender-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: 'easeInOut' }}
      />
      <motion.p
        className="mt-5 text-[11px] uppercase tracking-[0.4em] text-charcoal-mute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        onAnimationComplete={() => setTimeout(onFinish, 650)}
      >
        Interior Design Portfolio
      </motion.p>
    </motion.div>
  )
}
