export type ProjectCategory =
  | 'Développement web'
  | 'Community Management'
  | 'Design graphique'
  | 'Branding'

export type ProjectKind =
  | 'Projet professionnel'
  | 'Expérience de stage'
  | 'Projet personnel'
  | 'Contenu réseaux sociaux'
  | 'Création graphique'

export type ProjectStatus =
  | 'En cours de développement'
  | 'Réalisé en stage'
  | 'En construction'
  | 'Documentation à venir'
  | 'Galerie à enrichir'

export interface ProjectImage {
  /** Chemin dans /public, ex. "/images/projects/sope-naby-1.jpg" */
  src: string
  alt: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  kind: ProjectKind
  status: ProjectStatus
  /** Courte phrase affichée sur la carte */
  summary: string
  /** Paragraphes affichés dans la fenêtre de détails */
  description: string[]
  /** Liste à puces dans la fenêtre de détails */
  highlights?: { title: string; items: string[] }
  tech: string[]
  /** Captures d'écran ou visuels. Vide = couverture graphique MËYRA. */
  images: ProjectImage[]
  /** Message affiché quand il n'y a pas encore de visuel. */
  placeholderNote?: string
  link?: { label: string; href: string }
}

export interface TimelineItem {
  title: string
  organisation: string
  period?: string
  description?: string
  tags?: string[]
}

export interface TimelineGroup {
  label: string
  items: TimelineItem[]
}

export interface Certificate {
  title: string
  issuer: string
  date?: string
  /** Fichier dans /public/certificates (image .jpg/.png ou .pdf). Vide = emplacement réservé. */
  file?: string
}

export interface Experience {
  role: string
  company: string
  type: string
  period: string
  intro: string
  missions: string[]
  stack: string[]
  projects: string[]
}

export interface ServiceGroup {
  id: string
  title: string
  icon: 'code' | 'palette' | 'megaphone' | 'sparkles'
  description: string
  items: string[]
}

export type SkillLevel = 'Fondations' | 'Pratiqué en projet'

export interface Skill {
  name: string
  level?: SkillLevel
}

export interface SkillGroup {
  title: string
  icon: 'code' | 'palette' | 'megaphone' | 'sparkles'
  note?: string
  skills: Skill[]
}

export interface Social {
  label: string
  /** Laissez vide pour masquer le lien tant qu'il n'est pas renseigné. */
  url: string
}
