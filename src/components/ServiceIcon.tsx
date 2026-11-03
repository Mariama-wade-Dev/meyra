import { Code2, Megaphone, Palette, Sparkles } from 'lucide-react'

const icons = { code: Code2, palette: Palette, megaphone: Megaphone, sparkles: Sparkles } as const

export function ServiceIcon({
  name,
  className = 'h-6 w-6',
}: {
  name: keyof typeof icons
  className?: string
}) {
  const Icon = icons[name]
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />
}
