import Link from 'next/link'
import { site } from '@/lib/site'

const links = [
  { href: '/', label: 'Home' },
  { href: '/taxi-service-in-mhow', label: 'Taxi Service in Mhow' },
  { href: '/services', label: 'Taxi by area (Mhow / Indore / Dhar)' },
  { href: '/contact', label: 'Contact' },
  { href: '/mhow-to-indore-taxi', label: 'Mhow to Indore' },
  { href: '/mhow-airport-taxi', label: 'Airport Taxi' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold">{site.businessName}</p>
          <p className="mt-1 text-sm text-white/90">{site.contactName}</p>
          <p className="mt-2 text-sm text-white/80">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/70">Serving {site.baseCity} and nearby cities including {site.nearbyCities.join(', ')}.</p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>{site.phones[0]}</li>
            <li>{site.phones[1]}</li>
            <li>{site.email}</li>
            <li className="text-white/70">{site.addressLine}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} {site.businessName}. All rights reserved.
      </div>
    </footer>
  )
}
