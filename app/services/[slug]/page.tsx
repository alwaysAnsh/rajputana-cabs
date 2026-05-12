import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CallButton } from '@/components/ui/CallButton'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { getServiceLocationPage, serviceLocationSlugs } from '@/data/serviceLocations'
import { getSiteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return serviceLocationSlugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getServiceLocationPage(params.slug)
  if (!page) return {}
  const base = getSiteUrl()
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${base}/services/${page.slug}`,
    },
  }
}

export default function ServiceLocationPage({ params }: { params: { slug: string } }) {
  const page = getServiceLocationPage(params.slug)
  if (!page) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <nav className="text-sm text-text-secondary" aria-label="Breadcrumb">
        <Link href="/" className="text-primary hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/taxi-service-in-mhow" className="text-primary hover:underline">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-primary">{page.h1}</span>
      </nav>

      <header className="mt-8">
        <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">{page.h1}</h1>
        <p className="mt-4 text-lg text-text-secondary">{page.lead}</p>
      </header>

      <div className="mt-8 space-y-4 text-text-secondary">
        {page.body.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 dark:bg-zinc-900/50">
        <h2 className="font-heading text-xl font-semibold text-text-primary">Book this service</h2>
        <p className="mt-2 text-sm text-text-secondary">
          Share pickup area, date and passenger count — we reply with vehicle options and fare on call or WhatsApp.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message={`Hi, I want to book: ${page.h1}`} />
        </div>
      </section>

      <p className="mt-10 text-center text-sm text-text-secondary">
        <Link href="/taxi-service-in-mhow" className="font-medium text-primary hover:underline">
          View all taxi & hire services
        </Link>
        {' · '}
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact
        </Link>
      </p>
    </article>
  )
}
