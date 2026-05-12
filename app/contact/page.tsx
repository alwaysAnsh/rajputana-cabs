import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { ContactSection } from '@/components/sections/ContactSection'
import { CallButton } from '@/components/ui/CallButton'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Contact — Taxi & Tempo Booking Mhow / Indore',
  description:
    'Call or WhatsApp Rajputana Cabs for cab, car & tempo booking in Mhow, Indore & Dhar. Fast quotes — reach us today.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-text-primary">Contact Rajputana Cabs — taxi & tempo booking</h1>
          <p className="mt-2 text-sm font-medium text-text-primary">{site.contactName}</p>
          <p className="mt-4 text-text-secondary">
            Reach us on call or WhatsApp for instant taxi booking in Mhow. We respond quickly with fare options and cab availability.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton message="Hi, I want to contact Rajputana Cabs Mhow." />
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
