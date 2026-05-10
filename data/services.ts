export type ServiceCard = {
  id: string
  title: string
  description: string
  image: string
  /** If set, "View details" links to this path (e.g. /mhow/...). Ignored when callOnlyCta is true. Otherwise links to the taxi overview page. */
  detailHref?: string
  /** When true, show Call Now (tel) instead of View Details — no in-site route. */
  callOnlyCta?: boolean
}

/** Verbatim copy supplied for Indore, with “Indore” → “Mhow” (and “from Indore” → “from Mhow”). */
const LUXURY_CARS_MHOW =
  'Rajputana Cabs® offer Luxury cars on rent in Mhow like Land Rover Defender, Mercedes-Benz, BMW, Audi, Jaguar, & other Range Rover models at best rate. Call to get best fare.'

const WEDDING_FLEET_MHOW =
  'We offer luxury cars, vintage cars for bride & groom wedding entry, along with a fleet of 500+ cars & Tempo Travellers for wedding guest pick-up and drop services. Call me (CB Singh) for quotation'

const TEMPO_TRAVELLER_MHOW =
  'Hire our Tempo Traveller in Mhow for local city transportation or for outstation trip to any region of Indian from Mhow, starting at Rs 22 per km.'

const URBANIA_MHOW =
  'Hire our premium tempo traveller, all Force Urbania models in Mhow like 11, 13 & 17 seater, starting at Rs 30 per km.'

const CHAR_DHAM_MHOW =
  'Plan Char Dham Yatra from Mhow, for minimum 12-13 days by road, starting at ₹10 per km for cars & ₹22 per km for Tempo Traveller.'

export const serviceCards: ServiceCard[] = [
  {
    id: 'airport',
    title: 'Airport Taxi',
    description: 'Punctual pickup and drop for Devi Ahilyabai Holkar Airport with flight tracking.',
    image: '/images/services/airport-taxi.jpg',
    /** Same destination as Indore Airport on Popular Routes (services page). */
    detailHref: '/mhow-airport-taxi',
  },
  {
    id: 'outstation',
    title: 'Outstation Taxi',
    description: 'Comfortable long-distance cabs from Mhow to Indore, Ujjain, Bhopal and beyond.',
    image: '/images/services/outstation.jpg',
    callOnlyCta: true,
  },
  {
    id: 'tempo',
    title: 'Tempo Traveller Mhow',
    description: TEMPO_TRAVELLER_MHOW,
    image: '/images/services/tempo.jpg',
    detailHref: '/mhow/tempo-traveller-mhow',
  },
  {
    id: 'luxury',
    title: 'Luxury cars on rent',
    description: LUXURY_CARS_MHOW,
    image: '/images/services/luxury.jpg',
    detailHref: '/mhow/luxury-car-rental-mhow',
  },
  {
    id: 'wedding',
    title: 'Wedding cars & guest transport',
    description: WEDDING_FLEET_MHOW,
    image: '/images/services/wedding.jpg',
    detailHref: '/mhow/wedding-car-mhow',
  },
  {
    id: 'urbania',
    title: 'Urbania rental',
    description: URBANIA_MHOW,
    image: '/images/services/urbania.jpg',
    detailHref: '/mhow/urbania-rental-mhow',
  },
  {
    id: 'chardham',
    title: 'Char Dham Yatra from Mhow',
    description: CHAR_DHAM_MHOW,
    image: '/images/services/chardham.jpg',
    detailHref: '/mhow/char-dham-yatra-mhow',
  },
]

export const rajputanaMhowServiceCopy = [
  { id: 'luxury', title: 'Luxury cars on rent in Mhow', body: LUXURY_CARS_MHOW },
  { id: 'wedding', title: 'Wedding cars & guest transport', body: WEDDING_FLEET_MHOW },
  { id: 'tempo', title: 'Tempo Traveller Mhow', body: TEMPO_TRAVELLER_MHOW },
  { id: 'urbania', title: 'Urbania rental Mhow', body: URBANIA_MHOW },
  { id: 'chardham', title: 'Char Dham Yatra from Mhow', body: CHAR_DHAM_MHOW },
] as const
