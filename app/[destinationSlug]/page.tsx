import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CallButton } from '@/components/ui/CallButton'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { FareTable } from '@/components/ui/FareTable'
import { FAQSection } from '@/components/sections/FAQSection'
import { cars } from '@/data/cars'
import { destinations, getDestinationBySlug } from '@/data/destinations'
import { destinationFaqs } from '@/data/faqs'
import { calculateFare } from '@/lib/fareCalculator'
import { estimateDuration } from '@/lib/duration'

type RouteRange = {
  sedan: [number, number] | number
  rest: [number, number] | number
}

const routeFareRanges: Record<string, RouteRange> = {
  indore: { sedan: [1110, 1400], rest: [1925, 2000] },
  dhar: { sedan: 1400, rest: 2300 },
  mandu: { sedan: [1400, 2500], rest: [2300, 4500] },
  ujjain: { sedan: [2000, 2500], rest: [3000, 5500] },
  omkareshwar: { sedan: [1400, 2300], rest: 3500 },
}

/** Airport route: fixed indicative one-way packages (not per-km table). */
const AIRPORT_FARE_FROM = 1400

function formatRange(value: [number, number] | number): string {
  if (Array.isArray(value)) {
    return `₹${value[0].toLocaleString('en-IN')}-${value[1].toLocaleString('en-IN')}`
  }
  return `₹${value.toLocaleString('en-IN')}`
}

function oneWayComparable(value: [number, number] | number): number {
  return Array.isArray(value) ? value[0] : value
}

export function generateStaticParams() {
  return destinations.map((d) => ({ destinationSlug: d.slug }))
}

export function generateMetadata({ params }: { params: { destinationSlug: string } }): Metadata {
  const dest = getDestinationBySlug(params.destinationSlug)
  const dzire = cars.find((c) => c.id === 'dzire')
  if (!dest || !dzire) return {}
  if (dest.id === 'airport') {
    return {
      title: `Mhow to Indore Airport Taxi | ₹${AIRPORT_FARE_FROM.toLocaleString('en-IN')}+ onwards | Rajputana Cabs`,
      description:
        'Book Mhow ↔ Indore Airport (IDR) taxi. Swift Dzire / Etios from ₹1,400+. Ertiga / Carens from ₹1,800+. Call or WhatsApp for pickup with flight tracking.',
      alternates: { canonical: `/${dest.slug}` },
      keywords: ['airport taxi Mhow', 'Indore airport cab', 'IDR taxi', 'Rajputana Cabs'],
    }
  }
  const fare = calculateFare(dest.distanceKm, dzire.ratePerKm).oneWay
  return {
    title: `Mhow to ${dest.name} Taxi & Cab | ₹${fare} from Rajputana Cabs`,
    description: `Book Mhow to ${dest.name} taxi (${dest.distanceKm} km). Sedan & MUV options — WhatsApp for lowest fare and instant booking.`,
    alternates: { canonical: `/${dest.slug}` },
    keywords: [`Mhow to ${dest.name} taxi`, 'cab booking', 'outstation', 'Rajputana Cabs'],
  }
}

export default function DestinationPage({ params }: { params: { destinationSlug: string } }) {
  const dest = getDestinationBySlug(params.destinationSlug)
  if (!dest) notFound()

  const hasRangePricing = dest.id in routeFareRanges
  const rangeRule = routeFareRanges[dest.id]
  const isAirportRoute = dest.id === 'airport'

  const dzireCar = cars.find((c) => c.id === 'dzire')!
  const ertigaCar = cars.find((c) => c.id === 'ertiga')!

  const rows = isAirportRoute
    ? [
        {
          key: dzireCar.id,
          carName: dzireCar.name,
          capacity: dzireCar.capacity,
          oneWay: AIRPORT_FARE_FROM,
          fareDisplay: '₹1,400+',
        },
        {
          key: ertigaCar.id,
          carName: ertigaCar.name,
          capacity: ertigaCar.capacity,
          oneWay: 1800,
          fareDisplay: '₹1,800+',
        },
      ]
    : cars.map((car) => {
        const fare = calculateFare(dest.distanceKm, car.ratePerKm)
        if (hasRangePricing && rangeRule) {
          const groupRange = car.id === 'dzire' ? rangeRule.sedan : rangeRule.rest
          return {
            key: car.id,
            carName: car.name,
            capacity: car.capacity,
            oneWay: oneWayComparable(groupRange),
            fareDisplay: formatRange(groupRange),
          }
        }
        return {
          key: car.id,
          carName: car.name,
          capacity: car.capacity,
          oneWay: fare.oneWay,
        }
      })

  const dzireFare = isAirportRoute
    ? AIRPORT_FARE_FROM
    : calculateFare(dest.distanceKm, cars.find((c) => c.id === 'dzire')!.ratePerKm).oneWay
  const related = destinations.filter((d) => d.slug !== dest.slug).slice(0, 4)

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header>
        <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          {isAirportRoute
            ? `Mhow to ${dest.name} Taxi | ₹${dzireFare.toLocaleString('en-IN')}+ onwards`
            : `Mhow to ${dest.name} Taxi | ₹${dzireFare} onwards`}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">{dest.description}</p>
        <dl className="mt-6 flex flex-wrap gap-6 text-sm">
          <div>
            <dt className="text-text-secondary">Distance</dt>
            <dd className="font-semibold text-text-primary">{dest.distanceKm} km</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Est. duration</dt>
            <dd className="font-semibold text-text-primary">{estimateDuration(dest.distanceKm)}</dd>
          </div>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-2">
          {dest.highlights.map((h) => (
            <li key={h} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-primary">
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message={`Hi, I want Mhow to ${dest.name} taxi.`} />
        </div>
      </header>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-text-primary">
          {isAirportRoute ? 'Airport transfer — cab options' : 'Fare table — all cars'}
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          {isAirportRoute
            ? 'Indicative one-way airport transfer rates from Mhow. Final fare depends on exact pickup/drop, timing and luggage — confirm on call or WhatsApp.'
            : hasRangePricing
              ? 'Route package fares are shown as negotiated ranges. Final quote depends on date, timing and trip type.'
              : 'Indicative fares from Mhow. Cheapest sedan option is highlighted for quick comparison.'}
        </p>
        <div className="mt-6">
          <FareTable variant="destination" rows={rows} bookMessagePrefix={`Mhow to ${dest.name}`} />
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6 shadow-card dark:bg-zinc-900 dark:shadow-card-dark">
          <h2 className="font-heading text-xl font-bold text-text-primary">About {dest.name}</h2>
          <p className="mt-3 text-sm text-text-secondary">{dest.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-secondary">
            {dest.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-secondary p-6 text-white shadow-card">
          <h2 className="font-heading text-xl font-bold">Why book with Rajputana Cabs Mhow?</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li>Transparent per-km pricing and instant quotes on WhatsApp</li>
            <li>Clean AC cars with experienced local drivers</li>
            <li>24/7 support for airport, outstation and local hire</li>
            <li>One-way and round-trip options — you choose what fits your plan</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-bold text-text-primary">Related destinations</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.map((d) => (
            <Link
              key={d.id}
              href={`/${d.slug}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition hover:border-primary hover:text-primary dark:bg-zinc-900"
            >
              Mhow → {d.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <FAQSection id={`faq-${dest.id}`} title={`FAQ — Mhow to ${dest.name}`} items={destinationFaqs(dest)} />
      </div>

      <section className="mt-12 rounded-xl border border-border bg-surface px-6 py-8 text-center">
        <h2 className="font-heading text-xl font-bold text-text-primary">Book Mhow to {dest.name}</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-text-secondary">Share date, time and pickup address — we confirm cab and fare immediately.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message={`Hi, book Mhow to ${dest.name} taxi.`} />
        </div>
      </section>
    </article>
  )
}
