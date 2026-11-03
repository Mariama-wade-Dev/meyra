import type { CSSProperties, ElementType, ReactNode } from 'react'
import { Code2, Megaphone, Palette, Sparkles } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  intro?: string
  className?: string
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-current opacity-70" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl text-base opacity-80 md:text-lg">{intro}</p>}
    </Reveal>
  )
}

const icons = { code: Code2, palette: Palette, megaphone: Megaphone, sparkles: Sparkles }
export function GroupIcon({ name, className = 'h-6 w-6' }: { name: keyof typeof icons; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} aria-hidden strokeWidth={1.6} />
}

export function Logo({ variant = 'prune', className = 'h-10' }: { variant?: 'prune' | 'ivory'; className?: string }) {
  return (
    <img
      src={`/images/brand/symbol-${variant}.png`}
      alt=""
      className={`w-auto ${className}`}
      width={900}
      height={627}
    />
  )
}
