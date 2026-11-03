/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONFIGURATION GÉNÉRALE — modifiez vos coordonnées ici.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
import type { Social } from '../types'

export const site = {
  brand: 'MËYRA',
  owner: 'Seyda Mariama Wade',
  role: 'Développeuse Web Junior · Community Manager & Designer Digital',
  baseline: 'Le digital, avec créativité et intention.',

  /** Photo de portrait (optionnelle). Déposez le fichier dans /public/images puis indiquez son chemin,
   *  ex. '/images/portrait.jpg'. Laissez vide pour afficher le monogramme MËYRA. */
  portrait: '',

  location: 'Dakar, Sénégal',

  contact: {
    /** Numéro WhatsApp au format international SANS "+" ni espaces (utilisé pour les liens). */
    whatsappNumber: '221711263018',
    /** Numéro tel qu'il s'affiche sur le site. */
    phoneDisplay: '+221 71 126 30 18',
    email: 'wademariama775@gmail.com',
  },

  /** Réseaux sociaux : renseignez l'URL complète pour afficher le lien. Les champs vides sont masqués. */
  socials: [
    { label: 'LinkedIn', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'TikTok', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'GitHub', url: '' },
    { label: 'Canva', url: '' },
  ] satisfies Social[],

  /** Lien vers un CV PDF déposé dans /public (ex. '/cv-seyda-mariama-wade.pdf'). Vide = bouton masqué. */
  cvFile: '',
}

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.contact.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
] as const
