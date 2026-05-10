import { BadgeCheck, Clock, IndianRupee, MapPin, ShieldCheck, Sparkles } from 'lucide-react'

const points = [
  {
    title: 'Experienced Local Drivers',
    body: 'Drivers with 5+ years experience in Mhow region',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Availability',
    body: 'Book any time, day or night',
    icon: Clock,
  },
  {
    title: 'Clean & Sanitized Cars',
    body: 'Well maintained cars & vans',
    icon: Sparkles,
  },
  {
    title: 'Transparent Pricing',
    body: 'No hidden charges, pay only what is quoted',
    icon: IndianRupee,
  },
  {
    title: 'Instant Confirmation',
    body: 'Booking confirmed via Call or WhatsApp',
    icon: BadgeCheck,
  },
  {
    title: 'All India Service',
    body: 'Travel from Mhow to any city in India',
    icon: MapPin,
  },
] as const

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Why Choose Us</h2>
          <p className="mt-3 text-text-secondary">Local expertise, clear pricing and support that answers when you call.</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => {
            const Icon = p.icon
            return (
              <li
                key={p.title}
                className="rounded-xl border border-border bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover dark:bg-zinc-900 dark:shadow-card-dark"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{p.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
