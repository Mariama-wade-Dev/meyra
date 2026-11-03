import { ExternalLink, FileText, GraduationCap, Award, BookOpen } from 'lucide-react'
import { certificates, timeline } from '../content/journey'
import { Reveal, SectionHeading } from './ui'
import { asset } from '../lib/asset'

const groupIcons = [GraduationCap, BookOpen, Award]
const isImage = (f: string) => /\.(png|jpe?g|webp|avif)$/i.test(f)

export default function Journey() {
  return (
    <section id="parcours" className="bg-ivory-200/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Parcours & formations"
          title={
            <>
              Un parcours qui se construit <span className="accent-serif text-[1.1em]">pas à pas</span>.
            </>
          }
          intro="De la formation académique aux certifications, chaque étape renforce mon profil polyvalent."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {timeline.map((group, gi) => {
            const Icon = groupIcons[gi % groupIcons.length]
            return (
              <Reveal key={group.label} delay={gi * 90}>
                <h3 className="mb-7 flex items-center gap-3 font-display text-lg font-semibold">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-prune text-ivory">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={1.6} />
                  </span>
                  {group.label}
                </h3>
                <ol className="relative space-y-8 border-l border-prune/20 pl-7">
                  {group.items.map((it) => (
                    <li key={it.title} className="relative">
                      <span aria-hidden className="absolute -left-[2.2rem] top-1.5 h-3 w-3 rounded-full bg-terracotta ring-4 ring-ivory" />
                      {it.period && <p className="eyebrow !text-[0.68rem] mb-1.5">{it.period}</p>}
                      <h4 className="font-display text-[1.02rem] font-semibold leading-snug">{it.title}</h4>
                      <p className="mt-1 text-sm font-semibold text-terracotta-deep">{it.organisation}</p>
                      {it.description && <p className="mt-2 text-sm text-prune/80">{it.description}</p>}
                      {it.tags && (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {it.tags.map((t) => (
                            <li key={t} className="chip">{t}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold">Attestations & certificats</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Les documents sont ajoutés au fur et à mesure.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 70}>
                {c.file ? (
                  <a
                    href={asset(c.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden rounded-2xl bg-ivory ring-1 ring-prune/10 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {isImage(c.file) ? (
                      <img src={asset(c.file)} alt={`Certificat ${c.title}`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="grid aspect-[4/3] place-items-center bg-prune text-ivory">
                        <FileText className="h-10 w-10" aria-hidden strokeWidth={1.4} />
                      </div>
                    )}
                    <div className="p-5">
                      <p className="font-display font-semibold">{c.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                      <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-deep">
                        Voir le document <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-dashed border-prune/30 bg-ivory/70 p-5">
                    <FileText className="mb-4 h-8 w-8 text-prune/40" aria-hidden strokeWidth={1.4} />
                    <p className="font-display font-semibold">{c.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                    <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-prune/55">Document à venir</p>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
