import { CallButton } from '@/components/ui/CallButton'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithLoading
          src="/images/hero-bg.jpg"
          alt="Taxi on road in Madhya Pradesh"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          loadingMessage="Loading image…"
          loadingLayerClassName="bg-secondary text-white/80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/75 to-secondary/90" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:py-28 lg:py-32">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-widest text-primary motion-reduce:animate-none">
          Rajputana Cabs Mhow
        </p>
        <h1 className="animate-fade-up font-heading text-4xl font-bold leading-tight text-white motion-reduce:animate-none sm:text-5xl lg:text-6xl [animation-delay:60ms]">
          Taxi Service in Mhow | Indore
        </h1>
        <p className="animate-fade-up max-w-2xl text-lg font-medium text-white/90 motion-reduce:animate-none [animation-delay:120ms]">
          Local & Outstation Cab Service | Mhow, Indore, Madhya Pradesh
        </p>
        <p className="animate-fade-up max-w-2xl text-base leading-relaxed text-white/85 motion-reduce:animate-none [animation-delay:180ms]">
          Rajputana Cabs offers reliable taxi service in Mhow with experienced drivers, clean cars and best fares.
          Available 24/7 for local, outstation and airport trips.
        </p>
        <div className="animate-fade-up flex flex-col gap-3 motion-reduce:animate-none sm:flex-row sm:items-center [animation-delay:240ms]">
          <CallButton className="w-full justify-center sm:w-auto" />
          <WhatsAppButton className="w-full justify-center sm:w-auto" message="Hi, I need a taxi in Mhow." />
        </div>
      </div>
    </section>
  )
}
