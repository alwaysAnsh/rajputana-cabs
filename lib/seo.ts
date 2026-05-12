import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { destinations } from '@/data/destinations'
import { subServices } from '@/data/subServices'
import { serviceLocationSlugs } from '@/data/serviceLocations'

/** Canonical site URL (set NEXT_PUBLIC_SITE_URL on Vercel for production domain). */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  return site.domain.replace(/\/$/, '')
}

export const primaryKeywords =
  'taxi Mhow, cab booking Indore, car rental Dhar, tempo traveller Mhow, bus hire MP, airport taxi Indore, Rajputana Cabs' as const

export const serviceAreasForSchema = [
  { '@type': 'City', name: 'Mhow', containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' } },
  { '@type': 'City', name: 'Indore', containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' } },
  { '@type': 'City', name: 'Dhar', containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' } },
  { '@type': 'City', name: 'Pithampur', containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' } },
] as const

export function jsonLdGraph() {
  const url = getSiteUrl()
  const localBusiness: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name: site.businessName,
    alternateName: ['Rajputana Cabs', 'Rajputana Cabs Indore'],
    description: site.tagline,
    url,
    telephone: [...site.phoneTel],
    email: site.email,
    image: `${url}/og-image.jpg`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressLine,
      addressLocality: 'Mhow',
      addressRegion: 'Madhya Pradesh',
      postalCode: '453441',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [...serviceAreasForSchema],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }
  localBusiness.sameAs = [site.mapsUrl]

  const taxiService = {
    '@type': 'TaxiService',
    '@id': `${url}/#taxiservice`,
    name: `${site.businessName} — Taxi, Cab & Tempo`,
    provider: { '@id': `${url}/#localbusiness` },
    url,
    telephone: site.phoneTel[0],
    email: site.email,
    image: `${url}/og-image.jpg`,
    address: localBusiness.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: ['Mhow', 'Indore', 'Dhar', 'Pithampur', 'Ujjain', 'Omkareshwar', 'Maheshwar', 'Bhopal'],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
  }

  return { '@context': 'https://schema.org', '@graph': [localBusiness, taxiService] }
}

export function allSitemapPaths(): {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] {
  const paths: {
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/taxi-service-in-mhow', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.88 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  ]
  for (const slug of serviceLocationSlugs) {
    paths.push({ path: `/services/${slug}`, changeFrequency: 'weekly', priority: 0.85 })
  }
  for (const d of destinations) {
    paths.push({ path: `/${d.slug}`, changeFrequency: 'weekly', priority: 0.75 })
  }
  for (const s of subServices) {
    paths.push({ path: `/mhow/${s.slug}`, changeFrequency: 'weekly', priority: 0.8 })
  }
  return paths
}
