import { Briefcase, Check, Plus } from 'lucide-react'
import { experiences, moreExperiencesNote } from '../content/experiences'
import { Reveal, SectionHeading } from './ui'

export default function Experience() {
  return (
    <section id="experiences" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Expériences"
          title={
            <>
              Le terrain, <span className="accent-serif text-[1.1em]">pour apprendre</span> et progresser.
            </>
          }
        />

        <div className="mt-12 space-y-6">
          {experiences.map((e) => (
            <Reveal
              key={e.company}
              as="article"
              className="grid gap-8 rounded-[2rem] bg-white/60 p-7 ring-1 ring-prune/10 md:grid-cols-12 md:gap-12 md:p-12"
            >
              <header className="md:col-span-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-prune text-ivory">
                  <Briefcase className="h-5 w-5" aria-hidden strokeWidth={1.6} />
                </span>
                <p className="eyebrow mt-6">{e.period}</p>
                <h3 className="mt-2 text-3xl font-bold">{e.role}</h3>
                <p className="mt-1 font-display text-xl font-semibold text-terracotta-deep">
                  {e.company} <span className="font-normal text-muted">· {e.type}</span>
                </p>
                <p className="mt-5 text-sm leading-relaxed text-prune/85">{e.intro}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {e.stack.map((t) => (
                    <li key={t} className="chip bg-prune text-ivory">{t}</li>
                  ))}
                </ul>
              </header>

              <div className="md:col-span-7">
                <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">Missions et activités</h4>
                <ul className="mt-5 space-y-3">
                  {e.missions.map((m) => (
                    <li key={m} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-terracotta" aria-hidden strokeWidth={2.4} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-9 font-display text-sm font-semibold uppercase tracking-widest text-muted">
                  Projets auxquels j’ai participé
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {e.projects.map((p) => (
                    <li key={p} className="rounded-2xl bg-ivory-200 px-5 py-4 font-display text-sm font-semibold">{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal className="flex items-center gap-5 rounded-[2rem] border border-dashed border-prune/30 px-7 py-8 md:px-12">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ivory-200">
              <Plus className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-sm text-muted md:text-base">{moreExperiencesNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
