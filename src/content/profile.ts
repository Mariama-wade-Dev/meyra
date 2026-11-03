import type { Certificate, Service, SkillGroup, TimelineGroup } from './types'

/** ───────────── SERVICES ─────────────
 *  Aucun tarif n'est affiché : chaque projet fait l'objet d'un devis. */
export const services: Service[] = [
  {
    id: 'web',
    title: 'Développement web',
    icon: 'code',
    summary: 'Des sites clairs, rapides et pensés pour vos visiteurs.',
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
    summary: 'Une image cohérente, qui reflète votre activité.',
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
    summary: 'Une présence régulière et soignée sur les réseaux.',
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
    summary: 'Les outils numériques et l’IA au service de votre quotidien.',
    items: [
      'Assistance à la création de contenus avec l’IA',
      'Optimisation de certains processus créatifs',
      'Accompagnement à l’utilisation d’outils numériques',
    ],
  },
]

/** ───────────── PARCOURS ───────────── */
export const timeline: TimelineGroup[] = [
  {
    id: 'academique',
    label: 'Formation académique',
    items: [
      {
        title: 'Licence 3 en Informatique — Développement d’Applications Web (IDA)',
        org: 'Université numérique Cheikh Hamidou Kane (UNCHK)',
        period: 'En cours',
      },
    ],
  },
  {
    id: 'professionnelle',
    label: 'Formations professionnelles',
    items: [
      {
        title: 'Formation professionnelle',
        org: 'Simplon Sénégal',
        period: 'Juillet – septembre 2026',
      },
      {
        title: 'Parcours Design et Community Management',
        org: 'SAS Woman In Tech / African Tech Bridge — Fondation Société Générale',
        description:
          'Formation intensive et projet pratique portant sur la communication digitale, le graphisme, les outils numériques, Google Workspace, l’intelligence artificielle et les méthodes agiles.',
      },
      {
        title: 'Développement web et mobile',
        org: 'Bakeli',
        period: 'Formation d’un an',
        description: 'Acquisition des bases en HTML, CSS, Bootstrap et JavaScript.',
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Certifications et apprentissages complémentaires',
    items: [
      {
        title: 'Community Management',
        org: 'Meta, via Coursera',
        period: 'Certificat obtenu le 4 octobre 2026',
      },
      {
        title: 'Google AI',
        org: 'Formation suivie sur Coursera',
        description: 'Usages de l’intelligence artificielle et génération de visuels.',
      },
      {
        title: 'D’autres formations et certifications viendront compléter ce parcours.',
        org: '',
        placeholder: true,
      },
    ],
  },
]

/** Attestations : déposez les fichiers dans /public/certificates/ puis renseignez `file`. */
export const certificates: Certificate[] = [
  { title: 'Community Management', issuer: 'Meta · Coursera', date: '4 octobre 2026', file: '' },
  { title: 'Google AI', issuer: 'Google · Coursera', file: '' },
  { title: 'Parcours Design et Community Management', issuer: 'SAS Woman In Tech / African Tech Bridge', file: '' },
]

/** ───────────── EXPÉRIENCES ───────────── */
export const experiences = [
  {
    role: 'Développeuse web — stage',
    org: 'Volkeno',
    period: '9 mars – 9 juin 2026',
    summary:
      'Stage de trois mois au contact de projets utilisant React, Django et Python, notamment autour d’un projet hôtelier et du projet Tayeur.',
    tasks: [
      'Analyse des besoins',
      'Réalisation de maquettes et réflexion sur les interfaces',
      'Participation au développement d’applications web et mobiles',
      'Travail sur des API et leur sécurisation',
      'Documentation technique et comptes rendus d’activité',
    ],
    tech: ['React', 'Django', 'Python', 'API'],
    projectIds: ['react-django-hotel', 'tayeur'],
  },
]

/** ───────────── COMPÉTENCES ─────────────
 *  `level` : 'base' = fondations acquises · 'progress' = en progression. Laisser vide pour ne rien afficher. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'web',
    title: 'Développement web',
    intro: 'Un socle solide en front-end, et une montée en compétence sur le full-stack.',
    icon: 'code',
    skills: [
      { name: 'HTML5', level: 'base' },
      { name: 'CSS3', level: 'base' },
      { name: 'Bootstrap', level: 'base' },
      { name: 'JavaScript', level: 'base' },
      { name: 'React', level: 'progress' },
      { name: 'TypeScript', level: 'progress' },
      { name: 'Python', level: 'progress' },
      { name: 'Django', level: 'progress' },
      { name: 'Node.js & Express', level: 'progress' },
      { name: 'API REST', level: 'progress' },
      { name: 'PostgreSQL & Supabase', level: 'progress' },
    ],
  },
  {
    id: 'design',
    title: 'Design et création graphique',
    intro: 'Des visuels soignés pour donner de la cohérence à une marque.',
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
    id: 'communication',
    title: 'Communication digitale',
    intro: 'Valoriser un produit ou un service avec les bons mots et les bons formats.',
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
    id: 'ia',
    title: 'IA et outils numériques',
    intro: 'Des outils utilisés pour créer, produire et s’organiser.',
    icon: 'sparkles',
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
