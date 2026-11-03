import type { StatusTone } from '../content/types'

const styles: Record<StatusTone, string> = {
  progress: 'bg-terra/15 text-terra-ink border-terra/40',
  done: 'bg-prune text-ivory border-prune',
  soon: 'bg-transparent text-prune-soft border-prune/25',
  personal: 'bg-prune/10 text-prune border-prune/25',
}

export function StatusBadge({ label, tone }: { label: string; tone: StatusTone }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${styles[tone]}`}
    >
      {tone === 'progress' && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-terra" />}
      {label}
    </span>
  )
}
