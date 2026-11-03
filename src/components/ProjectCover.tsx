import type { Project } from '../types'
import { GroupIcon } from './ui'
import { asset } from '../lib/asset'

const iconFor: Record<Project['category'], 'code' | 'palette' | 'megaphone' | 'sparkles'> = {
  'Développement web': 'code',
  'Design graphique': 'palette',
  'Community Management': 'megaphone',
  Branding: 'sparkles',
}

/** Couverture graphique aux couleurs de MËYRA, utilisée tant qu'aucune capture n'est fournie. */
export default function ProjectCover({ project, index }: { project: Project; index: number }) {
  const first = project.images[0]
  if (first) {
    return (
      <div className="relative h-full w-full bg-ivory-200">
        <img src={asset(first.src)} alt={first.alt} className={`absolute inset-0 h-full w-full ${first.fit === 'cover' ? 'object-cover' : 'object-contain p-3'}`} loading="lazy" />
      </div>
    )
  }
  const v = index % 3
  const bg = ['bg-prune text-ivory', 'bg-ivory-200 text-prune', 'bg-ivory-300 text-prune'][v]
  return (
    <div className={`relative h-full w-full overflow-hidden ${bg}`} role="img" aria-label={`Couverture : ${project.title}`}>
      {v === 0 && (
        <>
          <div aria-hidden className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-terracotta" />
          <div aria-hidden className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-prune-700" />
        </>
      )}
      {v === 1 && (
        <>
          <div aria-hidden className="absolute bottom-0 left-1/2 h-4/5 w-3/5 -translate-x-1/2 rounded-t-full bg-prune" />
          <div aria-hidden className="absolute right-6 top-6 h-14 w-14 rounded-full bg-terracotta" />
        </>
      )}
      {v === 2 && (
        <>
          <div aria-hidden className="absolute -left-12 -top-12 h-52 w-52 rounded-full bg-prune" />
          <div aria-hidden className="absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-terracotta" />
        </>
      )}
      <div className="relative grid h-full place-items-center">
        <span
          className={`grid h-16 w-16 place-items-center rounded-full ring-1 ${
            v === 1 ? 'bg-ivory text-prune ring-prune/10' : v === 2 ? 'bg-ivory text-prune ring-prune/10' : 'bg-ivory text-prune ring-ivory/30'
          }`}
        >
          <GroupIcon name={iconFor[project.category]} className="h-7 w-7" />
        </span>
      </div>
    </div>
  )
}
