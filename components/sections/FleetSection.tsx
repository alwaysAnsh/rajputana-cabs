import { CarCard } from '@/components/ui/CarCard'
import { cars } from '@/data/cars'

export function FleetSection() {
  return (
    <section id="all-cab-types" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          All cab types — sedan, MUV, SUV & Tempo Traveller in Mhow
        </h2>
        <p className="mt-3 text-text-secondary">
          Sedans, MUVs, SUVs and Tempo Traveller — pick the vehicle that fits your group and route.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car, i) => (
          <CarCard key={car.id} car={car} priority={i < 2} />
        ))}
      </div>
    </section>
  )
}
