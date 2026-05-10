import { rajputanaMhowServiceCopy } from '@/data/services'

export function RajputanaOffersProse() {
  return (
    <section className="mt-16 border-t border-border pt-16" aria-labelledby="rajputana-offers-heading">
      <h2 id="rajputana-offers-heading" className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
        Luxury, wedding &amp; group transport in Mhow
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-secondary">
        Same vehicle standards as Rajputana Cabs® — tailored for Mhow pickups and outstation trips.
      </p>
      <div className="mt-10 space-y-10">
        {rajputanaMhowServiceCopy.map((block) => (
          <article key={block.id} className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-text-primary">{block.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
