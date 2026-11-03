import { Quote } from 'lucide-react'
import { about } from '../content/about'
import { site } from '../content/site'
import { Reveal, SectionHeading } from './ui'

export default function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
            <div aria-hidden className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border-2 border-terracotta/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-prune">
              {site.portrait ? (
                <img src={site.portrait} alt={`Portrait de ${site.owner}`} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="grid h-full place-items-center p-12">
                  <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-prune-700/60" />
                  <div aria-hidden className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-terracotta/90" />
                  <img src="/images/brand/symbol-ivory.png" alt="" width={900} height={627} className="relative w-full max-w-[15rem]" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-prune-900/85 to-transparent p-6 pt-16 text-ivory">
                <p className="font-display text-lg font-semibold">{site.owner}</p>
                <p className="text-sm text-ivory/80">Fondatrice de MËYRA</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow="À propos" title={about.title} />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-prune/90 md:text-[1.05rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 60}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="on-dark relative mt-10 overflow-hidden rounded-3xl bg-prune p-8 text-ivory md:p-10">
            <Quote aria-hidden className="absolute right-6 top-6 h-12 w-12 text-ivory/10" />
            <p className="eyebrow mb-3">Ma vision</p>
            <p className="font-serif text-2xl italic leading-snug md:text-3xl">{about.vision}</p>
            <p className="mt-6 border-t border-ivory/15 pt-5 text-sm text-ivory/80">
              <strong className="font-display font-semibold text-ivory">Ma mission : </strong>
              {about.mission}
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {about.values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 70} className="flex gap-4">
                <span className="mt-1 font-display text-sm font-bold text-terracotta-deep">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
