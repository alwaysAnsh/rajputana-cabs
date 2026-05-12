import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { site } from '@/lib/site'
import { getSiteUrl, jsonLdGraph, primaryKeywords } from '@/lib/seo'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  adjustFontFallback: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Premium Car & Taxi Rental in Mhow | Rajputana Cabs Indore',
    template: '%s | Rajputana Cabs',
  },
  description:
    'Book cabs & tempo in Mhow, Indore & Dhar. Airport taxi, outstation, luxury & wedding cars. Call or WhatsApp for instant confirmation.',
  keywords: [...primaryKeywords.split(', ')],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: getSiteUrl(),
    siteName: site.businessName,
    title: 'Premium Car & Taxi Rental in Mhow | Rajputana Cabs',
    description:
      'Taxi, cab, tempo & bus-style group hire across Mhow, Indore, Dhar & Pithampur. Transparent fares — call or WhatsApp to book.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${site.businessName} — taxi and tempo service` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Car & Taxi Rental in Mhow | Rajputana Cabs',
    description: 'Local & outstation taxi in Mhow & Indore region. Call or WhatsApp for instant booking.',
  },
  robots: { index: true, follow: true },
  category: 'travel',
}

const themeBootScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark')}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-body antialiased">
        <Script id="theme-boot" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <ThemeProvider>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }} />
          <Header />
          <main className="pb-24">{children}</main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
