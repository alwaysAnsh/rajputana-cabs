import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { CallButton } from '@/components/ui/CallButton'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site, telHref } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Contact Rajputana Cabs Mhow</h2>
          <p className="mt-2 text-sm font-medium text-text-primary">{site.contactName}</p>
          <p className="mt-3 text-text-secondary">Call, WhatsApp or visit us — we respond quickly for bookings and fare quotes.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-xl border border-border bg-white p-6 shadow-card dark:bg-zinc-900 dark:shadow-card-dark">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-heading font-semibold text-text-primary">Address</p>
                <p className="mt-1 text-sm text-text-secondary">{site.addressLine}</p>
                <Link href={site.mapsUrl} className="mt-2 inline-block text-sm font-medium text-primary hover:underline" target="_blank" rel="noreferrer">
                  Open in Google Maps
                </Link>
              </div>
            </div>
            <div>
              <p className="font-heading font-semibold text-text-primary">Phone</p>
              <div className="mt-2 flex flex-col gap-2 text-sm">
                <Link href={telHref(0)} className="font-medium text-primary hover:underline">
                  {site.phones[0]}
                </Link>
                <Link href={telHref(1)} className="font-medium text-primary hover:underline">
                  {site.phones[1]}
                </Link>
              </div>
            </div>
            <div>
              <p className="font-heading font-semibold text-text-primary">Email</p>
              <Link href={`mailto:${site.email}`} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                {site.email}
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton className="flex-1 justify-center" />
              <WhatsAppButton className="flex-1 justify-center" message="Hi, I want to book a taxi in Mhow." />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Rajputana Cabs Mhow on Google Maps"
              src="https://www.google.com/maps?q=22.5557,75.7612&z=12&output=embed"
              className="h-[320px] w-full lg:h-full lg:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
