# MËYRA — Portfolio professionnel

Site portfolio de **MËYRA** (Seyda Mariama Wade) : développement web, design graphique et communication digitale.
Stack : **React 18 · TypeScript · Vite 6 · Tailwind CSS 4**. Site 100 % en français, responsive, accessible et optimisé SEO.

---

## 1. Installer et lancer le site sur votre ordinateur

Prérequis : [Node.js](https://nodejs.org) version 20 ou plus récente (téléchargez la version « LTS »).

```bash
npm install        # installe les dépendances (une seule fois)
npm run dev        # lance le site en local → http://localhost:5173
```

Autres commandes :

| Commande | Rôle |
| --- | --- |
| `npm run build` | Vérifie le code (TypeScript) et génère le site final dans le dossier `dist/` |
| `npm run preview` | Affiche le site final généré (`dist/`) en local |
| `npm run typecheck` | Vérifie uniquement les erreurs TypeScript |

---

## 2. Modifier le contenu (sans toucher au design)

**Tout le contenu se trouve dans `src/content/`.** Enregistrez le fichier : le site se met à jour tout seul en mode `npm run dev`.

| Je veux modifier… | Fichier |
| --- | --- |
| Numéro WhatsApp, e-mail, ville, **réseaux sociaux**, photo de portrait, lien du CV | `src/content/site.ts` |
| Texte « À propos », vision, mission, valeurs | `src/content/about.ts` |
| Formations, certifications, **attestations (PDF/images)** | `src/content/journey.ts` |
| Expériences professionnelles | `src/content/experiences.ts` |
| Services proposés | `src/content/services.ts` |
| **Projets / réalisations** (textes, technologies, statuts, images) | `src/content/projects.ts` |
| Compétences et outils | `src/content/skills.ts` |

### Ajouter des images à un projet
1. Copiez vos captures dans `public/images/projects/` (ex. `sope-naby-accueil.jpg`, idéalement < 300 Ko, largeur ≈ 1600 px).
2. Dans `src/content/projects.ts`, renseignez :
   ```ts
   images: [{ src: '/images/projects/sope-naby-accueil.jpg', alt: 'Page d’accueil du site Groupe Sope Naby' }],
   ```
   Sans image, une couverture graphique aux couleurs de MËYRA est affichée automatiquement.

### Ajouter un projet
Copiez un bloc `{ … }` dans `projects.ts`, changez son `id` (unique) et ses textes. Le filtre par catégorie se met à jour seul.
Les champs `kind` (nature du projet) et `status` (état d’avancement) sont affichés pour rester transparent : ne marquez « Réalisé » que ce qui l’est.

### Ajouter une attestation ou un certificat
Déposez le fichier (`.pdf`, `.jpg`, `.png`) dans `public/certificates/`, puis dans `journey.ts` :
```ts
{ title: 'Community Management', issuer: 'Meta · Coursera', date: '4 octobre 2026', file: '/certificates/meta-community-management.pdf' }
```

### Réseaux sociaux
Dans `site.ts`, collez l’URL complète dans `socials`. Les réseaux sans URL restent **masqués** (aucun bouton cassé).

### Ajouter votre photo
Déposez `portrait.jpg` dans `public/images/`, puis `portrait: '/images/portrait.jpg'` dans `site.ts`.

### Couleurs et polices
Définies en haut de `src/styles/index.css` (bloc `@theme`) : prune `#512B3A`, ivoire `#F7F2EA`, terracotta `#C4775A`.
Polices : Montserrat (titres), Open Sans (textes), Cormorant Garamond (petits accents italiques) — hébergées dans le site, aucune requête vers Google.

### Logo
Les logos sont dans `public/images/brand/` (versions prune et ivoire, fond transparent, générées à partir de vos fichiers sans modification des formes).
Pour les régénérer : `python3 scripts/prepare-brand.py` (nécessite Pillow et numpy ; optionnel).

---

## 3. Formulaire de contact

Deux modes, sans clé secrète dans le code :

* **Sans configuration** : le bouton « Envoyer » ouvre la messagerie du visiteur avec le message déjà rédigé (adresse de `site.ts`). Le bouton « Écrire sur WhatsApp » fonctionne toujours.
* **Envoi direct (recommandé)** avec [Formspree](https://formspree.io) (gratuit, 50 messages/mois) :
  1. Créez un compte, puis un formulaire avec votre e-mail de réception.
  2. Copiez l’identifiant (la fin de l’URL `https://formspree.io/f/xxxxxxxx`).
  3. Copiez `.env.example` en `.env` et renseignez `VITE_FORMSPREE_ID=xxxxxxxx`.
  4. Sur l’hébergeur (étape 4), ajoutez la même variable d’environnement.

Le formulaire inclut une validation, des messages d’erreur accessibles et un champ anti-spam invisible.

---

## 4. Mettre le site en ligne

Le résultat de `npm run build` est un site **statique** (dossier `dist/`) : hébergement gratuit possible.

### Option A — Netlify (le plus simple)
1. Mettez le projet sur GitHub (ou glissez le dossier `dist/` sur https://app.netlify.com/drop pour un test immédiat).
2. « Add new site » → « Import from Git » → choisissez le dépôt.
3. Build command : `npm run build` · Publish directory : `dist`.
4. Dans « Site configuration → Environment variables », ajoutez `VITE_SITE_URL` (adresse finale du site) et `VITE_FORMSPREE_ID`.

### Option B — Vercel ou Cloudflare Pages
Même principe : framework « Vite », build `npm run build`, sortie `dist`, mêmes variables d’environnement.

### Nom de domaine
Ajoutez votre domaine (ex. `meyra.sn`) dans l’hébergeur et suivez ses instructions DNS. Mettez ensuite `VITE_SITE_URL=https://votre-domaine` : cette valeur alimente automatiquement les balises de partage, le `sitemap.xml` et le `robots.txt` générés au build.

### Après la mise en ligne
* Testez le partage du lien sur WhatsApp (aperçu : `public/og-image.png`).
* Inscrivez le site dans Google Search Console et soumettez `sitemap.xml`.

---

## 5. Structure du projet

```
index.html                 Métadonnées SEO, Open Graph, données structurées
public/                    Fichiers servis tels quels (logos, icônes, og-image, certificats, images projets)
scripts/prepare-brand.py   Génération des logos transparents (optionnel)
src/
  content/                 ← VOS CONTENUS (textes, projets, compétences, coordonnées)
  components/              Sections du site (Hero, About, Journey, Experience, Services, Projects, Skills, Contact…)
  hooks/ lib/              Animations d’apparition, section active, préremplissage du formulaire
  styles/index.css         Couleurs, polices, boutons, animations
  types.ts                 Types des contenus
```

## 6. Accessibilité et performance
Lien d’évitement, navigation clavier, focus visible, fenêtres modales natives (`<dialog>`), contrastes WCAG AA pour le texte, animations désactivées si le visiteur a activé « réduire les animations », polices et images locales, JavaScript ≈ 64 Ko compressé.

## 7. Sécurité
Aucune clé, aucun mot de passe dans le projet. Le fichier `.env` est ignoré par Git (`.gitignore`). `VITE_FORMSPREE_ID` est un identifiant public par nature (visible dans le site final).
