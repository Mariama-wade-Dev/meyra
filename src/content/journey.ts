import type { Certificate, TimelineGroup } from '../types'

/** Chronologie : ajoutez, retirez ou réordonnez simplement les éléments. */
export const timeline: TimelineGroup[] = [
  {
    label: 'Formation académique',
    items: [
      {
        title: 'Licence 3 en Informatique – Développement d’Applications Web (IDA)',
        organisation: 'Université numérique Cheikh Hamidou Kane (UNCHK)',
        period: 'En cours',
      },
    ],
  },
  {
    label: 'Formations professionnelles',
    items: [
      {
        title: 'Formation professionnelle',
        organisation: 'Simplon Sénégal',
        period: 'Juillet – septembre 2026',
      },
      {
        title: 'Design et Community Management',
        organisation: 'SAS Woman In Tech · African Tech Bridge – Fondation Société Générale',
        description:
          'Formation intensive et réalisation d’un projet pratique autour de la communication digitale, du graphisme, des outils numériques, de Google Workspace, de l’intelligence artificielle et des méthodes agiles.',
        tags: ['Communication digitale', 'Graphisme', 'IA', 'Méthodes agiles'],
      },
      {
        title: 'Développement web et mobile',
        organisation: 'Bakeli',
        period: 'Formation d’un an',
        description: 'Acquisition des bases en HTML, CSS, Bootstrap et JavaScript.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      },
    ],
  },
  {
    label: 'Certifications & apprentissages complémentaires',
    items: [
      {
        title: 'Community Management',
        organisation: 'Meta · via Coursera',
        period: 'Certificat obtenu le 4 octobre 2026',
      },
      {
        title: 'Google AI',
        organisation: 'Google · via Coursera',
        description: 'Usages de l’intelligence artificielle et génération de visuels.',
      },
    ],
  },
]

/**
 * Attestations & certificats.
 * Pour afficher un document : déposez l’image (.jpg/.png) ou le .pdf dans /public/certificates
 * puis renseignez `file`, par exemple file: '/certificates/meta-community-management.pdf'.
 * Sans `file`, un emplacement « document à venir » s’affiche.
 */
export const certificates: Certificate[] = [
  { title: 'Community Management', issuer: 'Meta · Coursera', date: '4 octobre 2026', file: '' },
  { title: 'Google AI', issuer: 'Google · Coursera', file: '' },
  { title: 'Design et Community Management', issuer: 'SAS Woman In Tech · African Tech Bridge', file: '' },
  { title: 'Formation Simplon Sénégal', issuer: 'Simplon Sénégal', date: 'Juillet – septembre 2026', file: '' },
]
