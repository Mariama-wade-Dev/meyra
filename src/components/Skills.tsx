import { skillGroups } from '../content/skills'
import { GroupIcon, Reveal, SectionHeading } from './ui'

export default function Skills() {
  return (
    <section id="competences" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Compétences & outils"
          title={
            <>
              Une palette <span className="accent-serif text-[1.1em]">polyvalente</span>.
            </>
          }
          intro="Mes compétences sont présentées avec leur niveau réel : des bases solides et une pratique en projet, sans exagération."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={(i % 3) * 90} className={i === 0 ? 'md:col-span-2 lg:col-span-3' : 'last:md:col-span-2 lg:last:col-span-1'}>
              <section
                aria-labelledby={`sk-${i}`}
                className={`h-full rounded-[1.75rem] p-8 md:p-10 ${i === 0 ? 'on-dark bg-prune text-ivory md:row-span-1' : 'bg-white/60 ring-1 ring-prune/10'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-full ${i === 0 ? 'bg-ivory text-prune' : 'bg-prune text-ivory'}`}>
                    <GroupIcon name={g.icon} />
                  </span>
                  <h3 id={`sk-${i}`} className="text-xl font-bold md:text-2xl">{g.title}</h3>
                </div>
                {g.note && <p className={`mt-5 text-sm ${i === 0 ? 'text-ivory/75' : 'text-muted'}`}>{g.note}</p>}
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {g.skills.map((s) => (
                    <li
                      key={s.name}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                        i === 0 ? 'bg-ivory/10 text-ivory ring-1 ring-ivory/20' : 'bg-ivory-200 text-prune'
                      }`}
                    >
                      {s.name}
                      {s.level && (
                        <span
                          title={s.level}
                          aria-label={s.level}
                          className={`h-2 w-2 rounded-full ${s.level === 'Pratiqué en projet' ? 'bg-terracotta' : 'bg-transparent ring-[1.5px] ring-terracotta-soft'}`}
                        />
                      )}
                    </li>
                  ))}
                </ul>
                {g.skills.some((s) => s.level) && (
                  <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ivory/70">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full ring-[1.5px] ring-terracotta-soft" aria-hidden /> Fondations (formation)
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-terracotta" aria-hidden /> Pratiqué en projet
                    </span>
                  </p>
                )}
              </section>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
