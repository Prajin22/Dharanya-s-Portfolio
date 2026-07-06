import { craftProjects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'
import TiltCard from './TiltCard.jsx'
import ArtworkMedia from './ArtworkMedia.jsx'
import Reveal from './Reveal.jsx'

const layout = [
  { span: 'lg:col-span-3', aspect: 'aspect-[16/11]' },
  { span: 'lg:col-span-3', aspect: 'aspect-[16/11]' },
  { span: 'lg:col-span-2', aspect: 'aspect-[10/11]' },
  { span: 'lg:col-span-2', aspect: 'aspect-[10/11]' },
  { span: 'md:col-span-2 lg:col-span-2', aspect: 'aspect-[10/11] md:aspect-[16/8] lg:aspect-[10/11]' }
]

function CraftCard({ project, index }) {
  const l = layout[index]

  return (
    <Reveal delay={(index % 3) * 0.09} className={l.span}>
      <TiltCard max={6} className="h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/85 shadow-card backdrop-blur-sm transition-shadow duration-700 ease-silk hover:shadow-lift">
          <div className={`relative overflow-hidden ${l.aspect}`}>
            <div className="absolute inset-0 transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.07]">
              <ArtworkMedia project={project} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-lavender-700">{project.medium}</p>
            <h3 className="mt-2.5 font-display text-2xl leading-tight text-charcoal-deep md:text-[26px]">{project.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal-soft">{project.description}</p>
            <div className="mt-auto flex items-center justify-between pt-6">
              <span aria-hidden="true" className="font-display text-3xl leading-none text-lavender-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-all duration-500 group-hover:border-lavender-500 group-hover:bg-lavender-500 group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  )
}

export default function CraftGallery() {
  return (
    <section id="craft" className="relative scroll-mt-16 overflow-hidden bg-cream-200">
      <div aria-hidden="true" className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-lavender-200/70 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-lavender-100/80 blur-3xl" />
      <div aria-hidden="true" className="absolute right-[12%] top-24 hidden h-40 w-40 rotate-12 rounded-3xl border border-lavender-300/50 lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="03 — Portfolio"
            title="Craft & Material Exploration"
            description="Hands-on studies in texture, volume and traditional technique — building the material intelligence that future interiors are made of."
          />
          <Reveal delay={0.2} className="shrink-0">
            <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal-mute">05 Handcrafted Studies</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-7 lg:grid-cols-6">
          {craftProjects.map((project, i) => (
            <CraftCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
