export type ProjectCategory =
  | 'Développement web'
  | 'Community Management'
  | 'Design graphique'
  | 'Branding'

export type StatusTone = 'progress' | 'done' | 'soon' | 'personal'

export interface ProjectCover {
  /** Couleur de fond de la couverture générée (utilisée si `image` est vide) */
  tone: 'prune' | 'terra' | 'ivory'
  /** Motif graphique de la couverture générée */
  motif: 'arc' | 'circle' | 'swoosh' | 'dots'
  /** Affiche le symbole MËYRA au centre (projet de marque) */
  symbol?: boolean
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  /** Nature du projet : projet professionnel, stage, personnel, formation… */
  kind: string
  status: { label: string; tone: StatusTone }
  summary: string
  description: string[]
  worksTitle?: string
  works: string[]
  /** Technologies et outils. Laisser vide si non documenté. */
  tech: string[]
  /** Image de couverture (ex. "/projects/mon-projet.webp"). Vide = couverture générée. */
  image?: string
  /** Captures d'écran / visuels (ex. { src: "/projects/capture-1.webp", alt: "…" }) */
  gallery: { src: string; alt: string }[]
  /** Texte affiché à la place de la galerie tant qu'elle est vide */
  galleryHint: string
  cover: ProjectCover
  note?: string
}

export interface Service {
  id: string
  title: string
  icon: 'code' | 'palette' | 'megaphone' | 'sparkles'
  summary: string
  items: string[]
}

export interface TimelineItem {
  title: string
  org: string
  period?: string
  description?: string
  /** Élément « à venir » affiché de façon discrète */
  placeholder?: boolean
}

export interface TimelineGroup {
  id: string
  label: string
  items: TimelineItem[]
}

export interface Certificate {
  title: string
  issuer: string
  date?: string
  /** Fichier déposé dans /public/certificates (image ou PDF), ex. "/certificates/meta-cm.pdf" */
  file?: string
}

export type SkillLevel = 'base' | 'progress'

export interface SkillGroup {
  id: string
  title: string
  intro: string
  icon: 'code' | 'palette' | 'megaphone' | 'sparkles'
  skills: { name: string; level?: SkillLevel }[]
}
