import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { site } from '@/lib/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const taxiServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: site.businessName,
  email: site.email,
  telephone: site.phoneTel[0],
  url: site.domain,
  image: `${site.domain}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressLine,
    addressLocality: 'Mhow',
    addressRegion: 'Madhya Pradesh',
    postalCode: '453441',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: ['Mhow', 'Dhar', 'Indore', 'Ujjain', 'Omkareshwar', 'Maheshwar', 'Bhopal'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Card',
}

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Taxi Service in Mhow | Rajputana Cabs - ₹10/km',
    template: '%s | Rajputana Cabs Mhow',
  },
  description:
    'Book reliable taxi service in Mhow, MP. Local, outstation & airport cabs. Dzire, Ertiga, Innova available. Call or WhatsApp for instant booking.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.domain,
    siteName: site.businessName,
    title: 'Taxi Service in Mhow | Rajputana Cabs',
    description:
      'Book reliable taxi service in Mhow, MP. Local, outstation & airport cabs. Dzire, Ertiga, Innova available.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: site.businessName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service in Mhow | Rajputana Cabs',
    description: 'Local, outstation & airport taxi in Mhow. Call or WhatsApp for instant booking.',
  },
  robots: { index: true, follow: true },
}

const themeBootScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark')}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-body antialiased">
        <Script id="theme-boot" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <ThemeProvider>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceJsonLd) }} />
          <Header />
          <main className="pb-24">{children}</main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
