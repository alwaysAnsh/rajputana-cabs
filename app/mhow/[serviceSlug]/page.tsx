import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CallButton } from '@/components/ui/CallButton'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import {
  getSubServiceBySlug,
  subServices,
  type SubServiceAdditionalContent,
  type SubServiceVehicle,
  type SubServiceVehicleSection,
} from '@/data/subServices'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return subServices.map((s) => ({ serviceSlug: s.slug }))
}

export function generateMetadata({ params }: { params: { serviceSlug: string } }): Metadata {
  const service = getSubServiceBySlug(params.serviceSlug)
  if (!service) return {}
  return {
    title: `${service.title} | Rajputana Cabs Mhow`,
    description: service.shortDesc,
    alternates: { canonical: `/mhow/${service.slug}` },
  }
}

function fareLines(v: SubServiceVehicle) {
  if (v.fareLineOverrides?.length) return v.fareLineOverrides
  const parts: string[] = []
  if (v.farePerHour != null) parts.push(`₹${v.farePerHour.toLocaleString('en-IN')}/hr`)
  if (v.farePerDay != null) parts.push(`₹${v.farePerDay.toLocaleString('en-IN')}/day`)
  if (v.farePerKm != null) parts.push(`₹${v.farePerKm}/km for outstation`)
  return parts
}

function VehicleCta({ v }: { v: SubServiceVehicle }) {
  if (v.ctaType === 'view-details' && v.slug) {
    return (
      <Link
        href={`/mhow/${v.slug}`}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-primary bg-white px-4 text-sm font-semibold text-primary transition hover:bg-surface dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        View details
      </Link>
    )
  }
  return <CallButton className="w-full justify-center" label="Call to book" />
}

function VehicleCard({ v }: { v: SubServiceVehicle }) {
  const lines = fareLines(v)
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark">
      <div className="relative aspect-[16/10] border-b border-border">
        <ImageWithLoading src={v.image} alt={v.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-text-primary">{v.name}</h3>
        <p className="mt-2 flex-1 text-sm text-text-secondary">{v.description}</p>
        {lines.length > 0 ? (
          <ul className="mt-3 space-y-1 text-sm font-medium text-text-primary">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5">
          <VehicleCta v={v} />
        </div>
      </div>
    </div>
  )
}

function SubServiceExtraContent({ content }: { content: SubServiceAdditionalContent }) {
  return (
    <div className="space-y-14">
      {content.whyBook ? (
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{content.whyBook.title}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-text-secondary">
            {content.whyBook.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {content.whyBook.after ? (
            <p className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">{content.whyBook.after}</p>
          ) : null}
        </div>
      ) : null}

      {content.rentFor ? (
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{content.rentFor.title}</h2>
          <ol className="mt-6 space-y-8">
            {content.rentFor.cases.map((c) => (
              <li key={c.id} className="list-none">
                <h3 className="font-heading text-lg font-semibold text-text-primary">{c.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">{c.body}</p>
              </li>
            ))}
          </ol>
          {content.rentFor.footer ? (
            <p className="mt-8 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">{content.rentFor.footer}</p>
          ) : null}
        </div>
      ) : null}

      {content.policyNotes ? (
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{content.policyNotes.title}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-text-secondary sm:text-base">
            {content.policyNotes.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {content.comparisonTable ? (
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{content.comparisonTable.title}</h2>
          {content.comparisonTable.caption ? <p className="mt-2 text-sm text-text-secondary">{content.comparisonTable.caption}</p> : null}
          <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-white dark:bg-zinc-900">
            <table className="min-w-[520px] w-full border-collapse text-left text-sm">
              <thead className="bg-surface dark:bg-zinc-800">
                <tr>
                  {content.comparisonTable.headers.map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-heading font-semibold text-text-primary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-border">
                    {row.map((cell, i) => (
                      <td key={`${row[0]}-${i}`} className="px-4 py-3 text-text-secondary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {content.tempoAlternatives ? (
        <div>
          <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">{content.tempoAlternatives.intro}</p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-text-secondary sm:text-base">
            {content.tempoAlternatives.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function VehicleSectionBlock({ section }: { section: SubServiceVehicleSection }) {
  return (
    <div className="mt-14 first:mt-0">
      <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{section.heading}</h2>
      {section.lead ? (
        <p className="mt-3 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">{section.lead}</p>
      ) : null}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.vehicles.map((v) => (
          <VehicleCard key={v.id} v={v} />
        ))}
      </div>
      {section.after ? (
        <p className="mt-8 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">{section.after}</p>
      ) : null}
    </div>
  )
}

export default function SubServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = getSubServiceBySlug(params.serviceSlug)
  if (!service) notFound()

  const faqItems = service.faqs.map((f) => ({ question: f.q, answer: f.a }))
  const related = service.relatedSlugs.flatMap((slug) => {
    const r = getSubServiceBySlug(slug)
    return r ? [r] : []
  })

  return (
    <article className="pb-8">
      <nav className="border-b border-border bg-surface/90 backdrop-blur dark:bg-zinc-900/90" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-text-secondary">
          <li>
            <Link href="/" className="font-medium text-primary hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden className="text-text-secondary">
            /
          </li>
          <li>
            <Link href="/taxi-service-in-mhow" className="font-medium text-primary hover:underline">
              Taxi Service in Mhow
            </Link>
          </li>
          <li aria-hidden className="text-text-secondary">
            /
          </li>
          <li className="font-medium text-text-primary">{service.title}</li>
        </ol>
      </nav>

      <section className="relative min-h-[280px] bg-secondary">
        <div className="absolute inset-0">
          <ImageWithLoading
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            loadedRevealClassName="opacity-40"
            loadingLayerClassName="bg-secondary text-white/80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">{site.businessName}</p>
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
            Starting from: {service.startingFare}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {service.introHeading ? (
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{service.introHeading}</h2>
        ) : null}
        <p
          className={`max-w-3xl text-lg leading-relaxed text-text-secondary ${service.introHeading ? 'mt-4' : ''} whitespace-pre-line`}
        >
          {service.intro}
        </p>
        {service.availabilityList?.length ? (
          <>
            <h3 className="mt-8 font-heading text-xl font-semibold text-text-primary">
              {service.availabilityListTitle ?? 'Available in Mhow'}
            </h3>
            <ul className="mt-3 list-inside list-disc space-y-1 text-text-secondary">
              {service.availabilityList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        {service.introClosing ? (
          <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-relaxed text-text-secondary">{service.introClosing}</p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message={`Hi, I want to enquire about ${service.title}.`} />
        </div>
      </div>

      <section className="border-t border-border bg-surface py-12 sm:py-16" aria-labelledby="vehicles-heading">
        <div className="mx-auto max-w-6xl px-4">
          {service.vehicleSections?.length ? (
            <>
              <h2 id="vehicles-heading" className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Rental fares &amp; fleet
              </h2>
              <p className="mt-2 text-sm text-text-secondary">Fares indicative — call for final quote and availability.</p>
              <div className="mt-6">
                {service.vehicleSections.map((section) => (
                  <VehicleSectionBlock key={section.id} section={section} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 id="vehicles-heading" className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Vehicles &amp; options
              </h2>
              <p className="mt-2 text-sm text-text-secondary">Fares indicative — call for final quote and availability.</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.vehicles.map((v) => (
                  <VehicleCard key={v.id} v={v} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {service.additionalContent ? (
        <section className="border-t border-border bg-white py-12 dark:bg-zinc-950 sm:py-16" aria-labelledby="extra-content-heading">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="extra-content-heading" className="sr-only">
              More about {service.title}
            </h2>
            <SubServiceExtraContent content={service.additionalContent} />
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">FAQ</h2>
        <div className="mt-8">
          <FAQAccordion id={`subservice-${service.id}`} items={faqItems} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-border bg-surface py-12" aria-labelledby="related-heading">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="related-heading" className="font-heading text-xl font-bold text-text-primary">
              Related services
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/mhow/${r.slug}`}
                    className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition hover:border-primary hover:text-primary dark:bg-zinc-900 dark:shadow-none"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-border bg-secondary px-6 py-10 text-center text-white">
          <h2 className="font-heading text-2xl font-bold">Book {service.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">Call or WhatsApp for availability, decoration add-ons and customised quotes.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton message={`Hi, I want to book ${service.title}.`} />
          </div>
        </div>
      </section>
    </article>
  )
}
