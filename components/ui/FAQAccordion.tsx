import { ChevronDown } from 'lucide-react'

export type FaqItem = {
  question: string
  answer: string
}

type Props = {
  id: string
  items: FaqItem[]
  includeSchema?: boolean
}

function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function FAQAccordion({ id, items, includeSchema = true }: Props) {
  return (
    <div className="space-y-4">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
        />
      )}
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-white shadow-card dark:bg-zinc-900 dark:shadow-card-dark">
        {items.map((item) => (
          <details key={item.question} name={`faq-${id}`} className="group px-4 py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 font-heading text-base font-semibold text-text-primary marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" aria-hidden />
            </summary>
            <p className="pb-4 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
