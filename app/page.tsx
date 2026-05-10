import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { PopularRoutes } from '@/components/sections/PopularRoutes'
import { FleetSection } from '@/components/sections/FleetSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { homeFaqs } from '@/data/faqs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Service in Mhow | Rajputana Cabs - ₹10/km',
  description:
    'Book reliable taxi service in Mhow, MP. Local, outstation & airport cabs. Dzire, Ertiga, Innova available. Call or WhatsApp for instant booking.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <PopularRoutes />
      <FleetSection />
      <WhyChooseUs />
      <FAQSection id="home-faq" title="FAQ — Mhow Taxi Service" items={homeFaqs} />
      <ContactSection />
    </>
  )
}
