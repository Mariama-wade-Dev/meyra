import type { ServiceGroup } from '../types'

export const services: ServiceGroup[] = [
  {
    id: 'web',
    title: 'Développement web',
    icon: 'code',
    description: 'Un site clair, rapide et soigné, qui présente votre activité telle qu’elle mérite d’être vue.',
    items: [
      'Création de sites vitrines',
      'Création de sites professionnels',
      'Intégration de maquettes',
      'Amélioration de sites existants',
    ],
  },
  {
    id: 'design',
    title: 'Design graphique',
    icon: 'palette',
    description: 'Des visuels cohérents avec votre image, pour que votre marque se reconnaisse au premier regard.',
    items: [
      'Visuels pour les réseaux sociaux',
      'Affiches publicitaires',
      'Supports de communication',
      'Identité visuelle',
    ],
  },
  {
    id: 'communication',
    title: 'Communication digitale',
    icon: 'megaphone',
    description: 'Une présence régulière et cohérente sur les réseaux, pour gagner en visibilité auprès de vos clients.',
    items: [
      'Gestion et animation des réseaux sociaux',
      'Création de contenus',
      'Rédaction de publications',
      'Accompagnement de la visibilité digitale',
    ],
  },
  {
    id: 'ia',
    title: 'Solutions numériques & IA',
    icon: 'sparkles',
    description: 'Les outils numériques et l’IA mis à profit pour gagner du temps sans perdre en qualité.',
    items: [
      'Assistance à la création de contenus avec l’IA',
      'Optimisation de certains processus créatifs',
      'Accompagnement à l’utilisation d’outils numériques',
    ],
  },
]
