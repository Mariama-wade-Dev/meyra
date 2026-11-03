import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Download, Mail, MapPin, MessageCircle, Phone, AlertCircle } from 'lucide-react'
import { site, whatsappLink } from '../content/site'
import { QUOTE_EVENT, type QuoteDetail } from '../lib/quote'
import { Reveal, SectionHeading } from './ui'
import { asset } from '../lib/asset'

const SUBJECTS = [
  'Développement web',
  'Design graphique',
  'Communication digitale',
  'Solutions numériques & IA',
  'Autre demande',
] as const

const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim()

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

export default function Contact() {
  const [subject, setSubject] = useState<string>(SUBJECTS[0])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Préremplissage depuis les boutons « Demander un devis »
  useEffect(() => {
    const onQuote = (e: Event) => {
      const d = (e as CustomEvent<QuoteDetail>).detail
      setSubject((SUBJECTS as readonly string[]).includes(d.subject) ? d.subject : 'Autre demande')
      if (d.message) setMessage(d.message)
      setStatus('idle')
      window.setTimeout(() => messageRef.current?.focus({ preventScroll: true }), 700)
    }
    window.addEventListener(QUOTE_EVENT, onQuote)
    return () => window.removeEventListener(QUOTE_EVENT, onQuote)
  }, [])

  const validate = (data: FormData) => {
    const err: Record<string, string> = {}
    if (!String(data.get('name') ?? '').trim()) err.name = 'Indiquez votre nom.'
    const email = String(data.get('email') ?? '').trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) err.email = 'Indiquez une adresse e-mail valide.'
    if (String(data.get('message') ?? '').trim().length < 10) err.message = 'Votre message est un peu court (10 caractères minimum).'
    return err
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get('_gotcha')) return // piège anti-spam : champ caché rempli par un robot
    const err = validate(data)
    setErrors(err)
    if (Object.keys(err).length) {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const text = String(data.get('message')).trim()

    if (FORMSPREE_ID) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message: text, _subject: `[Portfolio MËYRA] ${subject}` }),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('sent')
        formRef.current?.reset()
        setMessage('')
      } catch {
        setStatus('error')
      }
      return
    }

    // Mode de secours (aucun service d'envoi configuré) : ouvre la messagerie avec le message prérempli
    const body = `${text}\n\n—\n${name}\n${email}`
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`[Portfolio MËYRA] ${subject}`)}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  const fieldCls =
    'w-full rounded-xl border bg-ivory px-4 py-3 text-prune placeholder:text-prune/45 transition focus:border-prune focus:outline-none focus:ring-2 focus:ring-terracotta/50'
  const socials = site.socials.filter((s) => s.url)

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Parlons de votre <span className="accent-serif text-[1.1em]">projet</span>.
                </>
              }
              intro="Un site à créer, une identité à construire, une présence à développer ? Écrivez-moi : je vous réponds avec plaisir."
            />

            <Reveal delay={100}>
              <ul className="mt-10 space-y-4">
                <li>
                  <a
                    href={whatsappLink('Bonjour Seyda, je vous contacte depuis votre portfolio MËYRA.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-prune p-5 text-ivory transition hover:bg-prune-900"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ivory text-prune">
                      <MessageCircle className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-terracotta-soft">WhatsApp</span>
                      <span className="block font-display text-lg font-semibold">{site.contact.phoneDisplay}</span>
                    </span>
                    <ArrowRight className="ml-auto h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.contact.email}`} className="group flex items-center gap-4 rounded-2xl bg-white/60 p-5 ring-1 ring-prune/10 transition hover:ring-prune/40">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-prune text-ivory">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-terracotta-deep">E-mail</span>
                      <span className="block break-words font-display text-[0.9rem] font-semibold sm:text-base">{site.contact.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 px-5 py-1">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory-200">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm">{site.location}</span>
                </li>
                <li className="flex items-center gap-4 px-5 py-1">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory-200">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <a href={`tel:+${site.contact.whatsappNumber}`} className="text-sm underline-offset-4 hover:underline">
                    {site.contact.phoneDisplay}
                  </a>
                </li>
              </ul>

              {socials.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow mb-3">Retrouvez-moi</p>
                  <ul className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {site.cvFile && (
                <a href={asset(site.cvFile)} download className="btn btn-outline btn-sm mt-8">
                  <Download className="h-4 w-4" aria-hidden /> Télécharger mon CV
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="rounded-[2rem] bg-white/60 p-7 ring-1 ring-prune/10 md:p-10"
              aria-describedby="form-note"
            >
              <h3 className="text-2xl font-bold">Envoyer un message</h3>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Nom complet</label>
                  <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} className={`${fieldCls} ${errors.name ? 'border-red-700' : 'border-prune/20'}`} placeholder="Votre nom" />
                  {errors.name && <p id="err-name" className="mt-1.5 text-sm font-semibold text-red-800">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Adresse e-mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} className={`${fieldCls} ${errors.email ? 'border-red-700' : 'border-prune/20'}`} placeholder="vous@exemple.com" />
                  {errors.email && <p id="err-email" className="mt-1.5 text-sm font-semibold text-red-800">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">Objet de votre demande</label>
                  <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={`${fieldCls} border-prune/20`}>
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Votre message</label>
                  <textarea ref={messageRef} id="message" name="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} className={`${fieldCls} resize-y ${errors.message ? 'border-red-700' : 'border-prune/20'}`} placeholder="Parlez-moi de votre projet, de vos objectifs et de vos délais…" />
                  {errors.message && <p id="err-message" className="mt-1.5 text-sm font-semibold text-red-800">{errors.message}</p>}
                </div>
                {/* champ piège anti-spam, invisible pour les humains */}
                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>Ne pas remplir<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60">
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'} <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <a
                  href={whatsappLink(message.trim() ? message : 'Bonjour Seyda, je souhaite échanger avec vous à propos d’un projet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden /> Écrire sur WhatsApp
                </a>
              </div>

              <div role="status" aria-live="polite" className="mt-5 min-h-6 text-sm">
                {status === 'sent' && (
                  <p className="flex items-start gap-2 font-semibold text-green-900"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> Merci ! Votre message a bien été envoyé. Je vous réponds très vite.</p>
                )}
                {status === 'mailto' && (
                  <p className="flex items-start gap-2 font-semibold text-green-900"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> Votre messagerie s’ouvre avec le message prérempli : il ne reste qu’à l’envoyer.</p>
                )}
                {status === 'error' && (
                  <p className="flex items-start gap-2 font-semibold text-red-800"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> L’envoi a échoué. Réessayez, ou écrivez-moi directement à {site.contact.email} ou sur WhatsApp.</p>
                )}
              </div>
              <p id="form-note" className="mt-2 text-xs text-muted">
                {FORMSPREE_ID
                  ? 'Vos informations servent uniquement à répondre à votre demande.'
                  : 'Le bouton « Envoyer » ouvre votre messagerie avec le message prérempli. Vos informations servent uniquement à répondre à votre demande.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
