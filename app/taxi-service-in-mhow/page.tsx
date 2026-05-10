import type { Metadata } from 'next'
import { CallButton } from '@/components/ui/CallButton'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { PopularRoutes } from '@/components/sections/PopularRoutes'
import { FAQSection } from '@/components/sections/FAQSection'
import { MoreServicesInMhow } from '@/components/sections/MoreServicesInMhow'
import { cars } from '@/data/cars'
import { servicesFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Taxi Service in Mhow 2024 | All Cab Types',
  description:
    'Complete taxi service in Mhow. Sedan, SUV, Tempo Traveller. Starting ₹10/km. Airport, outstation, local trips.',
  alternates: { canonical: '/taxi-service-in-mhow' },
}

export default function ServicesPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">Taxi Service in Mhow</h1>
        <p className="mt-4 text-lg text-text-secondary">
          Rajputana Cabs Mhow provides trusted local and outstation taxi service with transparent per-km pricing, clean cars
          and experienced drivers. We also offer luxury cars on rent, wedding guest transport, Tempo Traveller and Urbania
          hire, and Char Dham Yatra packages from Mhow — call or WhatsApp and get instant confirmation.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message="Hi, I want details for taxi service in Mhow." />
        </div>
      </header>

      <div className="mt-12 sm:mt-16">
        <PopularRoutes sectionId="popular-routes-services" />
      </div>

      <section className="mt-16 space-y-10">
        <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">All cab types</h2>
        <div className="grid gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="grid overflow-hidden rounded-xl border border-border bg-white shadow-card transition hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark lg:grid-cols-[320px_1fr]"
            >
              <div className="relative aspect-[4/3] border-b border-border lg:aspect-auto lg:border-b-0 lg:border-r">
                <ImageWithLoading src={car.image} alt={car.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 320px" />
              </div>
              <div className="flex flex-col gap-4 p-6 lg:p-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary">{car.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {car.capacity} seater · {car.luggage} bags · {car.ac ? 'AC' : 'Non-AC'}
                  </p>
                  <p className="mt-3 text-text-secondary">{car.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {car.features.map((f) => (
                    <li key={f} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-primary">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <CallButton className="flex-1 justify-center" />
                  <WhatsAppButton className="flex-1 justify-center" message={`Hi, I want to book ${car.name} in Mhow.`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MoreServicesInMhow />

      <div className="mt-12">
        <FAQSection id="services-faq" title="FAQ — Taxi Service in Mhow" items={servicesFaqs} />
      </div>

      <section className="mt-16 rounded-xl border border-border bg-secondary px-6 py-10 text-center text-white">
        <h2 className="font-heading text-2xl font-bold">Ready to book?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
          Share your pickup point, destination and travel time — we confirm fare and cab type on WhatsApp or call.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton message="Hi, I want to book a taxi from Mhow." />
        </div>
      </section>
    </article>
  )
}
