import type { Car } from '@/data/cars'
import { CallButton } from '@/components/ui/CallButton'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

type Props = {
  car: Car
  priority?: boolean
}

export function CarCard({ car, priority = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <ImageWithLoading
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-text-primary">{car.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">
          {car.capacity} seats · ₹{car.ratePerKm}/km
        </p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm text-text-secondary">{car.description}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <CallButton className="flex-1 justify-center" />
          <WhatsAppButton className="flex-1 justify-center" message={`Hi, I want to book ${car.name} in Mhow.`} />
        </div>
      </div>
    </article>
  )
}
