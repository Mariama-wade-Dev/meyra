import { ArrowRight, Check } from 'lucide-react'
import { services } from '../content/services'
import { requestQuote } from '../lib/quote'
import { GroupIcon, Reveal, SectionHeading } from './ui'

export default function Services() {
  return (
    <section id="services" className="on-dark relative overflow-hidden bg-prune py-20 text-ivory md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-prune-700/50" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-terracotta/15" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Ce que MËYRA peut <span className="accent-serif text-[1.1em]">faire pour vous</span>.
              </>
            }
            intro="Quatre domaines complémentaires pour faire exister votre activité en ligne, de la création à la communication."
          />
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 2) * 90}>
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-ivory/15 bg-ivory/[0.04] p-8 transition duration-300 hover:border-terracotta-soft/60 hover:bg-ivory/[0.08] md:p-10">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ivory text-prune">
                    <GroupIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-bold text-ivory/20">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-ivory/80">{s.description}</p>
                <ul className="mt-6 space-y-2.5 text-[0.95rem]">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-terracotta-soft" aria-hidden strokeWidth={2.4} />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    requestQuote({
                      subject: s.title,
                      message: `Bonjour, je souhaite obtenir un devis pour : ${s.title}.\n\nVoici mon besoin :\n`,
                    })
                  }
                  className="btn btn-outline-light btn-sm mt-8 self-start"
                >
                  Demander un devis <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ivory px-7 py-6 text-prune">
          <p className="max-w-xl text-sm md:text-base">
            Chaque projet est différent : les prestations font l’objet d’un <strong>devis personnalisé</strong>, établi
            après un premier échange sur vos besoins.
          </p>
          <a href="#contact" className="btn btn-primary btn-sm">
            Me contacter <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
