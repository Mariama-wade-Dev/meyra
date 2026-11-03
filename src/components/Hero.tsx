import { ArrowRight, MessageCircle } from 'lucide-react'
import { services } from '../content/services'
import { site, whatsappLink } from '../content/site'
import { Reveal, GroupIcon } from './ui'

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-[4.5rem]">
      {/* formes décoratives */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-ivory-200" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span aria-hidden className="h-px w-8 bg-current opacity-70" />
              Développeuse web junior · Designer · Community manager
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-[clamp(2.6rem,6.6vw,5.4rem)] font-extrabold">
              Je donne vie à vos{' '}
              <span className="accent-serif text-[1.12em] font-medium">idées</span> grâce au digital.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base text-prune/85 md:text-lg">
              Développement web, design graphique et communication digitale : des solutions créatives pour valoriser vos
              projets.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
            <a href="#realisations" className="btn btn-primary">
              Découvrir mes réalisations <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span>Étudiante en Licence 3 · UNCHK</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-terracotta" />
              <span>{site.location}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-terracotta" />
              <a
                href={whatsappLink('Bonjour Seyda, je découvre votre portfolio MËYRA et je souhaite échanger avec vous.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-terracotta-deep underline-offset-4 hover:underline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Écrire sur WhatsApp
              </a>
            </p>
          </Reveal>
        </div>

        {/* visuel */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem]">
            <div aria-hidden className="absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-terracotta" />
            <div aria-hidden className="absolute -right-3 top-14 h-16 w-16 rounded-full border-2 border-prune/30" />
            <div className="absolute inset-0 overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-prune shadow-[0_30px_60px_-25px_rgba(81,43,58,0.55)]">
              <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-prune-700/60" />
              <div className="relative grid h-full place-items-center px-10">
                <img
                  src="/images/brand/symbol-ivory.png"
                  alt="Monogramme MËYRA"
                  width={900}
                  height={627}
                  className="float-slow w-full max-w-[17rem]"
                />
              </div>
            </div>
            <div className="absolute -right-2 bottom-6 w-[13.5rem] rounded-2xl bg-ivory p-4 shadow-[0_18px_40px_-18px_rgba(81,43,58,0.5)] ring-1 ring-prune/10 sm:-right-8">
              <p className="eyebrow mb-1 !text-[0.65rem]">MËYRA</p>
              <p className="font-serif text-xl italic leading-tight">{site.baseline}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* aperçu des services */}
      <div className="border-t border-prune/10">
        <ul className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.id} className="border-b border-prune/10 last:border-b-0 sm:border-b-0 sm:[&:not(:nth-child(2n))]:border-r lg:border-r lg:last:border-r-0 lg:[&:nth-child(2n)]:border-r">
              <Reveal delay={i * 70}>
                <a href="#services" className="group flex items-center gap-4 px-2 py-6 sm:px-6 lg:py-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ivory-200 text-prune transition-colors group-hover:bg-prune group-hover:text-ivory">
                    <GroupIcon name={s.icon} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-terracotta-deep">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="block font-display text-[0.95rem] font-semibold leading-snug">{s.title}</span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
