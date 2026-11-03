import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    role: 'Développeuse Web',
    company: 'Volkeno',
    type: 'Stage',
    period: '9 mars – 9 juin 2026',
    intro:
      'Trois mois au sein d’une équipe de développement, pour participer à des projets web et mobiles et découvrir le cycle complet d’une application, de l’analyse du besoin à la documentation.',
    missions: [
      'Analyse des besoins et réflexion sur les interfaces',
      'Réalisation de maquettes',
      'Participation au développement d’applications web et mobiles',
      'Travail sur des API et leur sécurisation',
      'Documentation technique et comptes rendus d’activité',
    ],
    stack: ['React', 'Django', 'Python', 'API REST'],
    projects: ['Fonctionnalités d’un projet hôtelier', 'Projet Tayeur'],
  },
]

/** Message affiché dans l’emplacement réservé aux prochaines expériences. */
export const moreExperiencesNote =
  'Stages, missions et collaborations viendront compléter cette rubrique au fil de mon parcours.'
