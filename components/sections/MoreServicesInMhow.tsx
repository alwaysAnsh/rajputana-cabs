import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { subServices } from '@/data/subServices'

export function MoreServicesInMhow() {
  return (
    <section className="mt-12 sm:mt-16" aria-labelledby="more-services-mhow-heading">
      <h2 id="more-services-mhow-heading" className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
        More Services in Mhow
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-secondary">
        Luxury cars, wedding transport, Tempo Traveller, Urbania and Char Dham Yatra — tap a card for full details.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subServices.map((s, i) => (
          <article
            key={s.id}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <ImageWithLoading
                src={s.heroImage}
                alt={s.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                priority={i < 3}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-lg font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{s.shortDesc}</p>
              <p className="mt-3 text-sm font-semibold text-primary">Starting from: {s.startingFare}</p>
              <Link
                href={`/mhow/${s.slug}`}
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                VIEW DETAILS
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
