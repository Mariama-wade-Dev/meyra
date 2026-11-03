export const QUOTE_EVENT = 'meyra:quote'

export interface QuoteDetail {
  subject: string
  message?: string
}

/** Fait défiler jusqu'au formulaire de contact et le préremplit. */
export function requestQuote(detail: QuoteDetail) {
  window.dispatchEvent(new CustomEvent<QuoteDetail>(QUOTE_EVENT, { detail }))
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
