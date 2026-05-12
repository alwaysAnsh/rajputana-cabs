'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { RajputanaLogo } from '@/components/brand/RajputanaLogo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { site, telHref } from '@/lib/site'

type NavItem = { href: string; label: string; match: (pathname: string) => boolean }

const nav: NavItem[] = [
  { href: '/', label: 'Home', match: (p) => p === '/' },
  {
    href: '/taxi-service-in-mhow',
    label: 'Services',
    match: (p) => p.startsWith('/taxi-service-in-mhow') || p.startsWith('/services') || p.startsWith('/mhow/'),
  },
  { href: '/contact', label: 'Contact', match: (p) => p.startsWith('/contact') },
]

function navLinkClass(active: boolean, extra = '') {
  const base =
    'rounded-md px-3 py-2 text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 active:scale-[0.98] motion-reduce:active:scale-100'
  if (active) {
    return `${base} bg-primary/15 text-primary dark:bg-primary/25 dark:text-primary ${extra}`
  }
  return `${base} text-text-secondary hover:bg-surface hover:text-primary dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-primary ${extra}`
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkActive = (href: string) => {
    const item = nav.find((n) => n.href === href)
    return item ? item.match(pathname) : false
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 pl-1 pr-1 pt-[env(safe-area-inset-top)] sm:pl-2 sm:pr-2 md:pl-3 md:pr-3 lg:pl-4 lg:pr-4">
        <div className="min-w-0 shrink-0">
          <RajputanaLogo className="py-1" />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-2 md:flex lg:gap-6 xl:gap-8"
          aria-label="Primary"
        >
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={navLinkClass(linkActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-2 pr-[max(2px,env(safe-area-inset-right))]">
          <ThemeToggle />
          <Link
            href={telHref(0)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] dark:focus-visible:ring-offset-zinc-900 sm:min-h-12 sm:px-4 md:mr-0"
            aria-label={`Call ${site.phones[0]}`}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Call</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-text-primary transition hover:bg-surface focus-visible:ring-2 focus-visible:ring-primary md:hidden dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-white px-3 pb-4 pt-2 dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={navLinkClass(linkActive(l.href), 'px-3 py-3 text-base')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={telHref(0)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 font-semibold text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phones[0]}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
