import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../content/site'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Bonjour Seyda, je vous contacte depuis votre portfolio MËYRA.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-prune text-ivory shadow-[0_12px_30px_-8px_rgba(81,43,58,0.7)] ring-2 ring-ivory transition hover:-translate-y-1 hover:bg-prune-900"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  )
}
