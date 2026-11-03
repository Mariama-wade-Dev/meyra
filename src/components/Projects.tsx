import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../content/projects'
import type { Project, ProjectCategory } from '../types'
import ProjectCover from './ProjectCover'
import ProjectModal from './ProjectModal'
import { Reveal, SectionHeading } from './ui'

type Filter = 'Tous' | ProjectCategory

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const [selected, setSelected] = useState<Project | null>(null)

  const categories = useMemo<Filter[]>(() => ['Tous', ...Array.from(new Set(projects.map((p) => p.category)))], [])
  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)
  const selectedIndex = selected ? projects.findIndex((p) => p.id === selected.id) : 0

  return (
    <section id="realisations" className="bg-ivory-200/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Réalisations"
          title={
            <>
              Des projets <span className="accent-serif text-[1.1em]">concrets</span>, présentés avec honnêteté.
            </>
          }
          intro="Projets professionnels, expériences de stage et projets personnels : chaque carte indique clairement sa nature et son état d’avancement."
        />

        <Reveal className="mt-10">
          <div role="group" aria-label="Filtrer les réalisations par catégorie" className="flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-5 py-2 font-display text-[0.82rem] font-semibold transition ${
                  filter === c
                    ? 'border-prune bg-prune text-ivory'
                    : 'border-prune/25 bg-transparent text-prune hover:border-prune'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <ul key={filter} className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((p, i) => {
            const index = projects.findIndex((x) => x.id === p.id)
            return (
              <Reveal as="li" key={p.id} delay={i * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-ivory ring-1 ring-prune/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(81,43,58,0.55)]">
                  <div className="aspect-[4/3] overflow-hidden transition duration-500 group-hover:[&>*]:scale-[1.03] [&>*]:transition [&>*]:duration-500">
                    <ProjectCover project={p} index={index} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow !text-[0.68rem]">{p.category}</p>
                    <p className="mt-1 text-xs font-semibold text-muted">{p.kind}</p>
                    <h3 className="mt-3 text-xl font-bold leading-snug">
                      <button
                        type="button"
                        onClick={() => setSelected(p)}
                        className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:after:rounded-[1.5rem]"
                        aria-haspopup="dialog"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-prune/80">{p.summary}</p>
                    {p.tech.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {p.tech.slice(0, 4).map((t) => (
                          <li key={t} className="chip !text-[0.7rem]">{t}</li>
                        ))}
                        {p.tech.length > 4 && <li className="chip !text-[0.7rem]">+{p.tech.length - 4}</li>}
                      </ul>
                    )}
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-terracotta-deep">
                        <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                        {p.status}
                      </span>
                      <span className="mt-4 flex items-center justify-between border-t border-prune/10 pt-4 font-display text-sm font-semibold" aria-hidden>
                        Voir les détails
                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>

      <ProjectModal project={selected} index={selectedIndex} onClose={() => setSelected(null)} />
    </section>
  )
}
