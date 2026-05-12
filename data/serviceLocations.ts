export type ServiceLocationPage = {
  slug: string
  title: string
  description: string
  h1: string
  lead: string
  body: string[]
}

export const serviceLocationSlugs = [
  'taxi-in-mhow',
  'taxi-in-indore',
  'taxi-in-dhar',
  'tempo-traveller-mhow-indore',
  'car-rental-mhow',
  'bus-rental-mhow-indore',
] as const

export type ServiceLocationSlug = (typeof serviceLocationSlugs)[number]

const pages: Record<ServiceLocationSlug, ServiceLocationPage> = {
  'taxi-in-mhow': {
    slug: 'taxi-in-mhow',
    title: 'Taxi & Cab Booking in Mhow | Rajputana Cabs',
    description:
      'Book taxis in Mhow for airport, Indore & outstation. AC Dzire, Ertiga & more. Call or WhatsApp for instant rates.',
    h1: 'Taxi & cab booking in Mhow',
    lead: 'Rajputana Cabs is your local taxi operator in Mhow for daily rides, airport transfers and long-distance trips.',
    body: [
      'Whether you need a sedan for Mhow to Indore, a family MUV for Mandu, or a punctual airport pickup at Devi Ahilyabai Holkar Airport (IDR), we keep our fleet clean and drivers experienced on MP roads.',
      'Same-day and advance bookings are welcome — share pickup time and destination on WhatsApp for a quick quote.',
    ],
  },
  'taxi-in-indore': {
    slug: 'taxi-in-indore',
    title: 'Taxi Service in Indore from Mhow Base | Rajputana Cabs',
    description:
      'Reliable Indore taxi runs from Mhow: airport, station & city drops. Transparent fares — call now to book.',
    h1: 'Taxi service covering Indore from Mhow',
    lead: 'We regularly serve Indore city, Sarafa, Rajwada and Indore Airport with cabs dispatched from our Mhow base.',
    body: [
      'Ideal for commuters, shoppers and guests who want a trusted driver for Indore–Mhow shuttles without surge pricing surprises.',
      'Combine with our popular route pages for fixed-distance ideas, or ask for a custom itinerary across Indore and nearby.',
    ],
  },
  'taxi-in-dhar': {
    slug: 'taxi-in-dhar',
    title: 'Mhow to Dhar Taxi & Cab Hire | Rajputana Cabs',
    description:
      'Comfortable Mhow–Dhar cabs for fort visits & business. Book one-way or return — WhatsApp for the best quote.',
    h1: 'Taxi and cab hire for Dhar from Mhow',
    lead: 'Historic Dhar is an easy day or half-day run from Mhow; we offer sedans and larger cars for families and small groups.',
    body: [
      'Perfect for Dhar Fort, Bhojshala and combined Mandu circuits when you want a single driver for the full day.',
      'See our dedicated Mhow to Dhar route page for indicative fares, then call to lock date and vehicle type.',
    ],
  },
  'tempo-traveller-mhow-indore': {
    slug: 'tempo-traveller-mhow-indore',
    title: 'Tempo Traveller for Outstation from Mhow & Indore | Rajputana Cabs',
    description:
      '12–20 seater Tempo Traveller hire from Mhow for MP & all-India tours. Group-friendly rates — enquire today.',
    h1: 'Tempo Traveller for outstation from Mhow & Indore',
    lead: 'Group travel needs space, AC and luggage room — our Tempo Traveller fleet is maintained for temple tours, weddings and corporate outings.',
    body: [
      'Popular for Ujjain, Omkareshwar, Rajasthan legs and multi-day charters; driver allowance and tolls are explained upfront.',
      'Pair with Force Urbania options on our Tempo and Urbania pages when you want a premium van experience.',
    ],
  },
  'car-rental-mhow': {
    slug: 'car-rental-mhow',
    title: 'Premium Car Rental in Mhow | Sedan, SUV & Luxury | Rajputana Cabs',
    description:
      'Car rental in Mhow: Dzire to luxury SUVs. Wedding, VIP & outstation — book by call or WhatsApp today.',
    h1: 'Premium car rental in Mhow',
    lead: 'Beyond point-to-point taxis, we offer curated car and luxury rentals for weddings, corporate guests and VIP movement.',
    body: [
      'Explore luxury and wedding-specific pages for model lists, or start with our home fleet grid for everyday rental-ready cabs.',
      'All hires include vetted chauffeurs; self-drive is not available on our tourist fleet.',
    ],
  },
  'bus-rental-mhow-indore': {
    slug: 'bus-rental-mhow-indore',
    title: 'Bus & Large Van Hire Mhow–Indore | Rajputana Cabs',
    description:
      'Bus-style group transport via Tempo & Urbania from Mhow and Indore region. School, office & pilgrimage trips — call us.',
    h1: 'Bus and large-group hire from Mhow & Indore area',
    lead: 'For groups larger than a standard car, we coordinate Tempo Traveller and Urbania capacity with clear seating as per permit rules.',
    body: [
      'Tell us headcount, dates and route — we suggest the right 12 / 16 / 20 seater or Urbania layout and share an indicative package.',
      'Serving schools, factories and event planners across Mhow, Indore, Dhar and Pithampur industrial belt when schedules align.',
    ],
  },
}

export function getServiceLocationPage(slug: string): ServiceLocationPage | undefined {
  return pages[slug as ServiceLocationSlug]
}

export function getAllServiceLocationPages(): ServiceLocationPage[] {
  return serviceLocationSlugs.map((s) => pages[s])
}
