const stats = [
  { label: '10+ Years Experience', value: '10+' },
  { label: '30+ Cars', value: '30+' },
  { label: '24/7 Service', value: '24/7' },
  { label: '₹10/km onwards', value: '₹10/km' },
] as const

const statDelays = ['', '[animation-delay:70ms]', '[animation-delay:140ms]', '[animation-delay:210ms]'] as const

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`animate-fade-up text-center motion-reduce:animate-none ${statDelays[i] ?? ''}`}>
            <p className="font-heading text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-text-secondary">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
