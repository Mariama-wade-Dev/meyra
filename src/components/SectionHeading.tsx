import { withEmphasis } from '../lib/emphasis'

interface Props {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, intro, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 id={id} className="h2 max-w-3xl text-balance">
        {withEmphasis(title)}
      </h2>
      {intro && <p className="lead mt-5 max-w-2xl text-pretty">{intro}</p>}
    </div>
  )
}
