import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllServiceLocationPages } from '@/data/serviceLocations'

export const metadata: Metadata = {
  title: 'Local taxi & tempo pages — Mhow, Indore, Dhar',
  description:
    'Location-focused cab and tempo pages for Mhow, Indore, Dhar & Pithampur belt. Pick your area and WhatsApp Rajputana Cabs to book.',
  alternates: { canonical: '/services' },
}

export default function ServicesIndexPage() {
  const pages = getAllServiceLocationPages()
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Taxi & tempo by area</h1>
      <p className="mt-4 text-text-secondary">
        Dedicated landing pages for search-friendly routes and cities we serve from Mhow. Each page has unique copy — open one
        to read details, then call or WhatsApp to confirm your trip.
      </p>
      <ul className="mt-10 space-y-3">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`/services/${p.slug}`} className="font-medium text-primary hover:underline">
              {p.h1}
            </Link>
            <p className="mt-1 text-sm text-text-secondary">{p.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-text-secondary">
        <Link href="/taxi-service-in-mhow" className="text-primary hover:underline">
          ← Main services overview
        </Link>
      </p>
    </article>
  )
}
