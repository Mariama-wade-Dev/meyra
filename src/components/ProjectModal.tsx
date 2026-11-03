import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, ImageOff, X } from 'lucide-react'
import type { Project } from '../types'
import { requestQuote } from '../lib/quote'
import ProjectCover from './ProjectCover'
import { asset } from '../lib/asset'

export default function ProjectModal({
  project,
  index,
  onClose,
}: {
  project: Project | null
  index: number
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [shot, setShot] = useState(0)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      setShot(0)
      d.showModal()
      document.body.style.overflow = 'hidden'
    }
    if (!project && d.open) d.close()
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  const p = project
  const images = p?.images ?? []

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[92dvh] w-[min(56rem,calc(100%-1.5rem))] overflow-y-auto rounded-[1.75rem] bg-ivory p-0 text-prune shadow-2xl"
    >
      {p && (
        <div>
          <div className="relative">
            <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
              {images.length > 0 ? (
                <div className="relative h-full w-full bg-ivory-200">
                  <img src={asset(images[shot].src)} alt={images[shot].alt} className="absolute inset-0 h-full w-full object-contain p-4" />
                </div>
              ) : (
                <ProjectCover project={p} index={index} />
              )}
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Fermer la fenêtre"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ivory text-prune shadow-md transition hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {images.length > 1 && (
            <ul className="flex gap-2 overflow-x-auto px-6 pt-4 md:px-10" aria-label="Visuels du projet">
              {images.map((im, i) => (
                <li key={im.src}>
                  <button
                    type="button"
                    onClick={() => setShot(i)}
                    aria-label={`Afficher le visuel ${i + 1}`}
                    aria-current={i === shot}
                    className={`h-14 w-20 overflow-hidden rounded-lg ring-2 ${i === shot ? 'ring-terracotta' : 'ring-transparent'}`}
                  >
                    <img src={asset(im.src)} alt="" className="h-full w-full object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip bg-prune text-ivory">{p.category}</span>
              <span className="chip">{p.kind}</span>
              <span className="chip bg-terracotta/15 text-terracotta-deep">{p.status}</span>
            </div>
            <h3 id="project-title" className="mt-5 text-3xl font-bold md:text-4xl">{p.title}</h3>

            <div className="mt-6 space-y-4 leading-relaxed text-prune/90">
              {p.description.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>

            {p.highlights && (
              <div className="mt-8">
                <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">{p.highlights.title}</h4>
                <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {p.highlights.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[0.95rem]">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.tech.length > 0 && (
              <div className="mt-8">
                <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">Technologies & outils</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {p.images.length === 0 && p.placeholderNote && (
              <p className="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-prune/30 px-5 py-4 text-sm text-muted">
                <ImageOff className="h-4 w-4 shrink-0" aria-hidden /> {p.placeholderNote}
              </p>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  {p.link.label} <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              )}
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => {
                  ref.current?.close()
                  requestQuote({
                    subject: p.category === 'Branding' ? 'Design graphique' : p.category === 'Community Management' ? 'Communication digitale' : p.category,
                    message: `Bonjour, votre projet « ${p.title} » m’a intéressé(e) et j’aimerais discuter d’un projet similaire.\n`,
                  })
                }}
              >
                Discuter d’un projet similaire <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
