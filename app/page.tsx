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
  title: 'Premium Car & Taxi Rental in Mhow | Indore & Dhar',
  description:
    'Rajputana Cabs — book taxi, cab & tempo in Mhow, Indore & Dhar. Airport runs, outstation & wedding fleets. WhatsApp now for a quote.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Premium Car & Taxi Rental in Mhow | Rajputana Cabs',
    description:
      'Trusted cab booking in Mhow with Indore & Dhar coverage. Sedan, MUV, Tempo & luxury — call 24/7 for instant confirmation.',
    url: '/',
  },
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
