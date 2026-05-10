import { FAQAccordion, type FaqItem } from '@/components/ui/FAQAccordion'

type Props = {
  id: string
  title: string
  subtitle?: string
  items: FaqItem[]
}

export function FAQSection({ id, title, subtitle, items }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-center text-text-secondary">{subtitle}</p> : null}
      <div className="mt-10">
        <FAQAccordion id={id} items={items} />
      </div>
    </section>
  )
}
