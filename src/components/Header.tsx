import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navItems } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { requestQuote } from '../lib/quote'
import { Logo } from './ui'

const ids = navItems.map((n) => n.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const quote = () => {
    setOpen(false)
    requestQuote({ subject: 'Autre demande' })
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'bg-ivory/90 shadow-[0_1px_0_rgba(81,43,58,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3" aria-label="MËYRA – retour à l’accueil">
          <Logo className="h-9" />
          <span className="font-display text-[0.95rem] font-semibold tracking-[0.28em]">MËYRA</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 xl:flex">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? 'true' : undefined}
              className="link-underline pb-0.5 font-display text-[0.8rem] font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" onClick={quote} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Demander un devis <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-prune/25 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

    </header>
      {open && (
        <div id="menu-mobile" className="on-dark fixed inset-x-0 top-[4.5rem] z-30 bottom-0 overflow-y-auto bg-prune text-ivory xl:hidden">
          <nav aria-label="Navigation mobile" className="container-x flex flex-col py-8">
            {navItems.map((n, i) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-ivory/15 py-4 font-display text-2xl font-semibold"
              >
                <span className="text-sm font-medium text-terracotta-soft">{String(i + 1).padStart(2, '0')}</span>
                {n.label}
              </a>
            ))}
            <button type="button" onClick={quote} className="btn btn-light mt-8 self-start">
              Demander un devis <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
