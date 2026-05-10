import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site, telHref } from '@/lib/site'

type Props = {
  phoneIndex?: 0 | 1
  className?: string
  size?: 'default' | 'sm'
  label?: string
}

export function CallButton({
  phoneIndex = 0,
  className = '',
  size = 'default',
  label = 'Call Now',
}: Props) {
  const h = size === 'sm' ? 'min-h-[44px] px-3 text-sm' : 'min-h-12 px-5 text-base'
  return (
    <Link
      href={telHref(phoneIndex)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary font-medium text-white shadow-sm transition hover:bg-primary-dark ${h} ${className}`}
    >
      <Phone className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden />
      <span className="whitespace-nowrap">{label}</span>
      <span className="sr-only">{site.phones[phoneIndex]}</span>
    </Link>
  )
}
