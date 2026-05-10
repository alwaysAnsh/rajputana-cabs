import { DestinationCard } from '@/components/ui/DestinationCard'
import { destinations } from '@/data/destinations'

type Props = { sectionId?: string }

export function PopularRoutes({ sectionId = 'popular-routes' }: Props) {
  return (
    <section id={sectionId} className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Popular Routes</h2>
          <p className="mt-3 text-text-secondary">Distances from Mhow. Tap a route for route details and booking.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <DestinationCard key={d.id} destination={d} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
