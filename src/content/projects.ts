import type { Project } from '../types'

/**
 * RÉALISATIONS
 * ─────────────
 * Pour modifier un projet : changez les textes ci-dessous.
 * Pour ajouter des captures : déposez vos images dans /public/images/projects puis renseignez `images`, par ex.
 *   images: [{ src: '/images/projects/sope-naby-accueil.jpg', alt: 'Page d’accueil du site Groupe Sope Naby' }]
 * Pour ajouter un projet : copiez un bloc, changez son `id` et ajoutez-le à la liste.
 * Tant qu’il n’y a pas d’image, une couverture graphique aux couleurs de MËYRA est affichée.
 */
export const projects: Project[] = [
  {
    id: 'sope-naby',
    title: 'Site web multiservices Groupe Sope Naby',
    category: 'Développement web',
    kind: 'Projet professionnel',
    status: 'En cours de développement',
    summary:
      'Un site pour présenter les activités d’une entreprise multiservices : immobilier, voyages, transport, billetterie et autres services.',
    description: [
      'Conception et développement d’un site web destiné à présenter les différentes activités d’une entreprise multiservices : immobilier, voyages, transport, billetterie et autres services.',
      'Le projet est en cours de développement : l’architecture et les premières interfaces sont en place, et l’espace d’administration se construit progressivement.',
    ],
    highlights: {
      title: 'Travaux réalisés ou en cours',
      items: [
        'Conception de l’architecture du site',
        'Intégration d’interfaces avec React, TypeScript et Vite',
        'Développement d’une API avec Node.js et Express',
        'Connexion à une base de données PostgreSQL via Supabase',
        'Travail sur les annonces immobilières et leur affichage',
        'Mise en place progressive d’un espace d’administration',
        'Réflexion sur la gestion des contenus et des annonces',
      ],
    },
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    images: [{ src: '/images/projects/sope-naby-logo.jpg', alt: 'Logo du Groupe Sope Naby', fit: 'cover' }],
    placeholderNote: 'Captures d’écran du site à ajouter.',
  },
  {
    id: 'react-django',
    title: 'Application web React & Django',
    category: 'Développement web',
    kind: 'Expérience de stage',
    status: 'Réalisé en stage',
    summary: 'Participation au développement de fonctionnalités web autour d’un projet hôtelier, chez Volkeno.',
    description: [
      'Participation au développement de fonctionnalités web dans un environnement utilisant React, Django et Python, notamment autour d’un projet hôtelier.',
      'Réalisé dans le cadre de mon stage chez Volkeno (mars – juin 2026).',
    ],
    highlights: {
      title: 'Compétences mobilisées',
      items: ['Développement frontend', 'Développement backend', 'Intégration de fonctionnalités', 'Travail avec des API'],
    },
    tech: ['React', 'Django', 'Python', 'API REST'],
    images: [],
    placeholderNote: 'Visuels à ajouter (sous réserve d’autorisation de l’entreprise).',
  },
  {
    id: 'tayeur',
    title: 'Projet Tayeur',
    category: 'Développement web',
    kind: 'Expérience de stage',
    status: 'Documentation à venir',
    summary: 'Participation à un projet numérique nommé Tayeur, dans le cadre de mon expérience en développement web.',
    description: [
      'Participation à un projet numérique appelé Tayeur dans le cadre de mon expérience en développement web.',
      'Aperçu : la page de création de compte de la plateforme (« Commandez sur mesure »), avec choix du type de compte et inscription par e-mail ou via Google.',
      'La description détaillée, les fonctionnalités et les technologies seront ajoutées prochainement.',
    ],
    tech: [],
    images: [{ src: '/images/projects/tayeur-inscription.jpg', alt: 'Page de création de compte de la plateforme Tayeur, couture africaine sur mesure', fit: 'cover' }],
    placeholderNote: 'Description, fonctionnalités et technologies à ajouter.',
  },
  {
    id: 'communication-immobilier',
    title: 'Communication digitale & immobilier',
    category: 'Community Management',
    kind: 'Contenu réseaux sociaux',
    status: 'Galerie à enrichir',
    summary: 'Contenus pensés pour promouvoir des biens immobiliers sur les réseaux sociaux, dont TikTok.',
    description: [
      'Création et préparation de contenus destinés à promouvoir des biens immobiliers sur les réseaux sociaux, avec une communication adaptée à l’objectif commercial.',
    ],
    highlights: {
      title: 'Exemples de travaux',
      items: [
        'Présentation d’annonces de location',
        'Rédaction de descriptions immobilières',
        'Préparation de publications pour TikTok',
        'Mise en valeur des caractéristiques des biens',
        'Adaptation du contenu à la communication commerciale',
      ],
    },
    tech: ['TikTok', 'CapCut', 'Canva'],
    images: [],
    placeholderNote: 'Exemples de publications et de visuels à ajouter.',
  },
  {
    id: 'design-graphique',
    title: 'Design graphique & identités visuelles',
    category: 'Design graphique',
    kind: 'Création graphique',
    status: 'Galerie à enrichir',
    summary: 'Supports visuels et explorations graphiques pour la communication de marques et d’entreprises.',
    description: [
      'Création de supports visuels et exploration de différentes approches graphiques pour la communication des marques et des entreprises.',
    ],
    highlights: {
      title: 'Types de réalisations',
      items: [
        'Publications pour les réseaux sociaux',
        'Visuels promotionnels',
        'Affiches et annonces',
        'Supports de communication',
        'Travail sur les couleurs, les typographies et les identités visuelles',
      ],
    },
    tech: ['Canva'],
    images: [],
    placeholderNote: 'Galerie de créations Canva et autres réalisations à ajouter.',
  },
  {
    id: 'meyra-branding',
    title: 'MËYRA : identité de marque',
    category: 'Branding',
    kind: 'Projet personnel',
    status: 'En construction',
    summary: 'La création de ma propre marque personnelle dédiée aux services numériques et créatifs.',
    description: [
      'Création de ma propre marque personnelle, dédiée aux services numériques et créatifs. Ce portfolio en est la vitrine.',
    ],
    highlights: {
      title: 'Travail réalisé autour de la marque',
      items: [
        'Recherche du nom et du positionnement',
        'Création de l’identité visuelle',
        'Conception du logo et de ses déclinaisons',
        'Définition de la palette de couleurs',
        'Réflexion sur la communication de marque',
        'Conception du portfolio professionnel',
      ],
    },
    tech: ['Identité visuelle', 'Logo', 'Charte de marque'],
    images: [
      { src: '/images/brand/logo-prune.png', alt: 'Logo principal MËYRA, monogramme M et Y avec trait terracotta' },
    ],
  },
]
