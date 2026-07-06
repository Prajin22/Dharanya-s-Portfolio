import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ArtGallery from './components/ArtGallery.jsx'
import CraftGallery from './components/CraftGallery.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar ready={!loading} />
      <main>
        <Hero ready={!loading} />
        <About />
        <ArtGallery />
        <CraftGallery />
      </main>
      <Footer />
    </MotionConfig>
  )
}
