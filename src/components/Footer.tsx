import { ArrowUp } from 'lucide-react'
import { navItems, site } from '../content/site'
import { asset } from '../lib/asset'

export default function Footer() {
  return (
    <footer className="on-dark bg-prune text-ivory">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={asset('/images/brand/logo-ivory.png')} alt="MËYRA" width={900} height={829} className="h-28 w-auto" loading="lazy" />
          <p className="mt-4 font-serif text-xl italic text-ivory/85">{site.baseline}</p>
        </div>
        <nav aria-label="Pied de page" className="md:col-span-4">
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-ivory/80 underline-offset-4 hover:text-ivory hover:underline">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-ivory/85">
            <li><a className="underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>
            <li>{site.contact.phoneDisplay}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-ivory/70">
          <p>© {new Date().getFullYear()} MËYRA — {site.owner}. Tous droits réservés.</p>
          <a href="#accueil" className="inline-flex items-center gap-2 font-semibold text-ivory hover:underline">
            Retour en haut <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
