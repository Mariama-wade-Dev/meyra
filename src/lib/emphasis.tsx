import { Fragment, type ReactNode } from 'react'

/** Transforme "Bonjour [le monde]" en « Bonjour <em>le monde</em> ». */
export function withEmphasis(text: string): ReactNode {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
