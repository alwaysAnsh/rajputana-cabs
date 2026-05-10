import Link from 'next/link'
import { CallButton } from '@/components/ui/CallButton'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { serviceCards } from '@/data/services'

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Our Services</h2>
        <p className="mt-3 text-text-secondary">
          Airport, outstation, luxury cars, wedding transport, Tempo Traveller, Urbania and Char Dham Yatra from Mhow —
          book in two taps with Call or WhatsApp.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((s, i) => (
          <article
            key={s.id}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <ImageWithLoading
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                priority={i < 2}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-lg font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{s.description}</p>
              {s.callOnlyCta ? (
                <CallButton className="mt-5 w-full justify-center" />
              ) : (
                <Link
                  href={s.detailHref ?? '/taxi-service-in-mhow'}
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-primary bg-white px-4 text-sm font-semibold text-primary transition hover:bg-surface"
                >
                  View Details
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
