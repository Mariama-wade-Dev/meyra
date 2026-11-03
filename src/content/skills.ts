import type { SkillGroup } from '../types'

/**
 * Compétences.
 * `level` est optionnel : « Fondations » = bases acquises en formation,
 * « Pratiqué en projet » = utilisé en stage ou sur un projet réel.
 * Modifiez librement les listes ; supprimez `level` pour ne rien afficher.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Développement web',
    icon: 'code',
    note: 'Niveau junior : des bases solides, et une pratique qui grandit à chaque projet.',
    skills: [
      { name: 'HTML5', level: 'Fondations' },
      { name: 'CSS3', level: 'Fondations' },
      { name: 'Bootstrap', level: 'Fondations' },
      { name: 'JavaScript', level: 'Fondations' },
      { name: 'React', level: 'Pratiqué en projet' },
      { name: 'TypeScript', level: 'Pratiqué en projet' },
      { name: 'Python', level: 'Pratiqué en projet' },
      { name: 'Django', level: 'Pratiqué en projet' },
      { name: 'Node.js & Express', level: 'Pratiqué en projet' },
      { name: 'API REST', level: 'Pratiqué en projet' },
      { name: 'PostgreSQL & Supabase', level: 'Pratiqué en projet' },
    ],
  },
  {
    title: 'Design & création graphique',
    icon: 'palette',
    skills: [
      { name: 'Canva' },
      { name: 'Création de visuels' },
      { name: 'Mise en page' },
      { name: 'Identité visuelle' },
      { name: 'Supports de communication' },
    ],
  },
  {
    title: 'Communication digitale',
    icon: 'megaphone',
    skills: [
      { name: 'Community Management' },
      { name: 'Création de contenus' },
      { name: 'Rédaction de publications' },
      { name: 'Communication sur les réseaux sociaux' },
      { name: 'Valorisation de produits et services' },
    ],
  },
  {
    title: 'IA & outils numériques',
    icon: 'sparkles',
    note: 'Des outils que j’utilise dans mes projets et que j’explore au quotidien.',
    skills: [
      { name: 'ChatGPT' },
      { name: 'Claude' },
      { name: 'Google AI' },
      { name: 'Google Flow' },
      { name: 'CapCut' },
      { name: 'Google Workspace' },
    ],
  },
]
