'use client'

import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { telHref, waHref } from '@/lib/site'

export function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-between px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-5">
      <Link
        href={telHref(0)}
        className="pointer-events-auto inline-flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg shadow-primary/30 ring-2 ring-white/30 transition hover:bg-primary-dark hover:scale-105 active:scale-95 dark:ring-zinc-900/50 motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:px-5"
        aria-label="Call Rajputana Cabs Mhow"
      >
        <Phone className="h-6 w-6 sm:mr-2" aria-hidden />
        <span className="hidden text-sm font-semibold sm:inline">Call</span>
      </Link>
      <Link
        href={waHref('Hi, I want to book a taxi in Mhow.')}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex min-h-[52px] min-w-[52px] animate-soft-pulse items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg shadow-emerald-600/25 ring-2 ring-white/25 transition hover:brightness-95 hover:scale-105 active:scale-95 dark:ring-zinc-900/40 motion-reduce:animate-none motion-reduce:hover:scale-100 sm:px-5"
        aria-label="WhatsApp Rajputana Cabs Mhow"
      >
        <MessageCircle className="h-6 w-6 sm:mr-2" aria-hidden />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </Link>
    </div>
  )
}
