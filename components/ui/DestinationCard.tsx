import Link from 'next/link'
import type { Destination } from '@/data/destinations'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'

type Props = {
  destination: Destination
  priority?: boolean
}

export function DestinationCard({ destination, priority = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <ImageWithLoading
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-text-primary">{destination.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{destination.distanceKm} km</p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm text-text-secondary">{destination.description}</p>
        <Link
          href={`/${destination.slug}`}
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-white px-4 text-sm font-semibold text-primary transition hover:bg-surface"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
