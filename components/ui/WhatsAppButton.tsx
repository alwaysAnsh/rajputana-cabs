import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { waHref } from '@/lib/site'

type Props = {
  className?: string
  size?: 'default' | 'sm'
  label?: string
  message?: string
}

export function WhatsAppButton({
  className = '',
  size = 'default',
  label = 'WhatsApp',
  message,
}: Props) {
  const h = size === 'sm' ? 'min-h-[44px] px-3 text-sm' : 'min-h-12 px-5 text-base'
  return (
    <Link
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] font-medium text-white shadow-sm transition hover:brightness-95 ${h} ${className}`}
    >
      <MessageCircle className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden />
      <span className="whitespace-nowrap">{label}</span>
    </Link>
  )
}
