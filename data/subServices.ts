import { luxuryCarRentalPartial } from './luxuryCarPartial'
import { urbaniaRentalPartial } from './urbaniaPartial'

export type SubServiceRentForCase = {
  id: string
  title: string
  body: string
}

export type SubServiceAdditionalContent = {
  whyBook?: {
    title: string
    bullets: string[]
    after?: string
  }
  rentFor?: {
    title: string
    cases: SubServiceRentForCase[]
    footer?: string
  }
  policyNotes?: {
    title: string
    bullets: string[]
  }
  comparisonTable?: {
    title: string
    caption?: string
    headers: [string, string, string, string]
    rows: [string, string, string, string][]
  }
  tempoAlternatives?: {
    intro: string
    bullets: string[]
  }
}

export type SubServiceVehicle = {
  id: string
  name: string
  image: string
  description: string
  farePerKm?: number
  farePerDay?: number
  farePerHour?: number
  /** When set, shown instead of auto-generated fare bullets (e.g. N/A for outstation). */
  fareLineOverrides?: string[]
  ctaType: 'view-details' | 'call'
  slug?: string
}

export type SubServiceVehicleSection = {
  id: string
  heading: string
  lead?: string
  after?: string
  vehicles: SubServiceVehicle[]
}

export type SubService = {
  id: string
  title: string
  slug: string
  shortDesc: string
  heroImage: string
  startingFare: string
  intro: string
  vehicles: SubServiceVehicle[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  /** Optional H2 under the hero (e.g. regional subheading). */
  introHeading?: string
  /** Brand / model list shown after intro. */
  availabilityList?: string[]
  /** Heading above availability list (e.g. Urbania vs luxury). */
  availabilityListTitle?: string
  /** Paragraph after the availability list, before fare sections. */
  introClosing?: string
  /** Tiered vehicle blocks (e.g. luxury hourly vs daily bands). When set, the page renders these instead of a single flat grid. */
  vehicleSections?: SubServiceVehicleSection[]
  /** Extra prose blocks (Urbania: why book, use cases, notes, table). */
  additionalContent?: SubServiceAdditionalContent
}

export const subServices: SubService[] = [
  {
    id: 'luxury-cars',
    title: 'Luxury Car Rental Mhow & Indore',
    slug: 'luxury-car-rental-mhow',
    ...luxuryCarRentalPartial,
  },

  {
    id: 'wedding-cars',
    title: 'Wedding Car Rental Mhow',
    slug: 'wedding-car-mhow',
    shortDesc: 'Luxury & vintage cars for bride-groom entry and wedding guest transport in Mhow',
    startingFare: 'Call for quote',
    heroImage: '/images/services/wedding.jpg',
    intro:
      'We offer luxury cars and vintage cars for bride & groom wedding entry in Mhow, along with a fleet of 500+ cars and Tempo Travellers for wedding guest pick-up and drop services. Call us (CB Singh) for a customised quotation.',
    vehicles: [
      {
        id: 'vintage-car',
        name: 'Vintage Car (Wedding Entry)',
        image: '/images/cars/vintage-car.jpeg',
        description: 'Classic vintage car for bride & groom entry. Makes your wedding unforgettable.',
        ctaType: 'call',
      },
      {
        id: 'fortuner-wedding',
        name: 'Toyota Fortuner (Wedding)',
        image: '/images/cars/fortuner.jpg',
        description: 'Luxury SUV for groom entry or VIP wedding transport.',
        farePerDay: 5500,
        ctaType: 'call',
      },
      {
        id: 'innova-fleet',
        name: 'Innova Fleet (Guest Transport)',
        image: '/images/cars/innova-crysta.jpg',
        description: 'Fleet of Innova cars for wedding guest pick up and drop.',
        farePerKm: 18,
        ctaType: 'call',
      },
    ],
    faqs: [
      {
        q: 'What cars are available for bride-groom entry in Mhow?',
        a: 'We offer vintage cars, Toyota Fortuner, Mercedes-Benz and decorated Innova Crysta for bride-groom entry at weddings in Mhow.',
      },
      {
        q: 'Do you provide decoration on wedding cars?',
        a: 'Yes, basic ribbon decoration is included. Live flower decoration is available at extra cost by our florist partner.',
      },
      {
        q: 'Can you arrange transport for 200+ wedding guests?',
        a: 'Yes, we have a fleet of 500+ vehicles including cars and multiple Tempo Travellers to handle large wedding transport in Mhow.',
      },
      {
        q: 'How to book a wedding car in Mhow?',
        a: 'Call or WhatsApp us with your wedding date, number of guests and requirements. We will share a customised quotation within a few hours.',
      },
    ],
    relatedSlugs: ['luxury-car-rental-mhow', 'tempo-traveller-mhow', 'urbania-rental-mhow'],
  },

  {
    id: 'tempo-traveller',
    title: 'Tempo Traveller Mhow',
    slug: 'tempo-traveller-mhow',
    shortDesc: '12 to 20 seater Tempo Traveller & Force Urbania on rent in Mhow, ₹22/km',
    startingFare: '₹22/km',
    heroImage: '/images/services/tempo.jpg',
    intro:
      'Looking for a Tempo Traveller in Mhow for local sightseeing, temple trips or outstation travel anywhere in India? Rajputana Cabs offers 12, 16 and 20 seater Tempo Travellers along with premium Force Urbania models in Mhow at the best fares.',
    vehicles: [
      {
        id: 'tempo-12',
        name: '12 Seater Tempo Traveller',
        image: '/images/sub-services/tempo-12.jpeg',
        description: 'AC 12 seater standard Tempo Traveller. Best for group trips.',
        farePerKm: 22,
        farePerDay: 5500,
        ctaType: 'call',
      },
      {
        id: 'tempo-16',
        name: '16 Seater Tempo Traveller',
        image: '/images/sub-services/tempo-16.jpeg',
        description: 'AC 16 seater Tempo Traveller for larger groups.',
        farePerKm: 24,
        farePerDay: 6000,
        ctaType: 'call',
      },
      {
        id: 'tempo-20',
        name: '20 Seater Tempo Traveller',
        image: '/images/sub-services/tempo-20.jpeg',
        description: 'AC 20 seater Tempo Traveller for big groups.',
        farePerKm: 28,
        farePerDay: 7000,
        ctaType: 'call',
      },
      {
        id: 'maharaja-tempo',
        name: 'Maharaja Tempo Traveller',
        image: '/images/cars/tempo-traveller.jpg',
        description: 'Modified luxury Tempo with pushback sofa seats, tinted glass & AC on all seats.',
        farePerKm: 27,
        farePerDay: 6750,
        ctaType: 'call',
      },
      {
        id: 'urbania-17',
        name: 'Force Urbania 17 Seater',
        image: '/images/services/urbania.jpg',
        description: 'Largest Force Urbania model for big groups.',
        farePerKm: 35,
        farePerDay: 7500,
        ctaType: 'call',
      },
    ],
    faqs: [
      {
        q: 'What is the Tempo Traveller fare from Mhow?',
        a: 'Starting at ₹22/km for 12 seater. Minimum 250km/day for outstation. Driver allowance ₹300-500/day extra.',
      },
      {
        q: 'What is the difference between Tempo Traveller and Force Urbania?',
        a: 'Force Urbania is a premium version with better interiors, AC on all seats and smoother ride. Fare starts at ₹28/km vs ₹22/km for standard Tempo.',
      },
      {
        q: 'Is Tempo Traveller available for Char Dham Yatra from Mhow?',
        a: 'Yes, we offer Tempo Traveller for Char Dham Yatra from Mhow for minimum 12 days at ₹79,999 all inclusive.',
      },
      {
        q: 'How many people can travel in your Tempo Traveller?',
        a: 'We offer 12, 16 and 20 seater options. For 20-35 people, we also have 25 seater Tempo Traveller available.',
      },
    ],
    relatedSlugs: ['luxury-car-rental-mhow', 'urbania-rental-mhow', 'char-dham-yatra-mhow'],
  },

  {
    id: 'urbania-rental',
    title: 'Force Urbania Rental Mhow & Indore',
    slug: 'urbania-rental-mhow',
    ...urbaniaRentalPartial,
  },

  {
    id: 'char-dham-yatra',
    title: 'Char Dham Yatra from Mhow',
    slug: 'char-dham-yatra-mhow',
    shortDesc: 'Plan Char Dham Yatra from Mhow by car or Tempo Traveller, min 12 days',
    startingFare: '₹10/km (car) | ₹22/km (Tempo)',
    heroImage: '/images/services/chardham.jpg',
    intro:
      'Plan your Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri) from Mhow by road. We offer cars and Tempo Travellers for the complete Char Dham circuit from Mhow, Madhya Pradesh. Minimum 12-13 days journey.',
    vehicles: [
      {
        id: 'innova-char-dham',
        name: 'Innova Crysta (7 persons)',
        image: '/images/cars/innova-crysta.jpg',
        description: 'Most comfortable car for Char Dham Yatra. 7 seater with ample luggage space.',
        farePerKm: 18,
        ctaType: 'call',
      },
      {
        id: 'ertiga-char-dham',
        name: 'Ertiga / KIA Carens (6 persons)',
        image: '/images/cars/ertiga.jpg',
        description: 'Budget friendly 6 seater for Char Dham Yatra.',
        farePerKm: 14,
        ctaType: 'call',
      },
      {
        id: 'tempo-char-dham',
        name: 'Tempo Traveller (12 persons)',
        image: '/images/sub-services/tempo-12.jpeg',
        description: 'Best for group Char Dham Yatra. 12 seater AC Tempo Traveller.',
        farePerKm: 22,
        ctaType: 'call',
      },
    ],
    faqs: [
      {
        q: 'How many days does Char Dham Yatra take from Mhow?',
        a: 'Char Dham Yatra from Mhow takes minimum 12-13 days by road covering Kedarnath, Badrinath, Gangotri and Yamunotri.',
      },
      {
        q: 'What is the Char Dham Yatra fare from Mhow?',
        a: 'For Innova Crysta, fare is ₹18/km. For 12-13 days approx 3500-4000km trip, total fare is approximately ₹63,000-₹72,000 for car. Tempo Traveller starts at ₹79,999 all inclusive.',
      },
      {
        q: 'Which is the best vehicle for Char Dham Yatra from Mhow?',
        a: 'Innova Crysta is best for 4-6 people. For groups of 10-12, Tempo Traveller is ideal. Our drivers are experienced in mountain roads of Uttarakhand.',
      },
      {
        q: 'Is night driving allowed during Char Dham Yatra?',
        a: 'Night driving in Uttarakhand is restricted after 8-10 PM in certain areas. Our drivers are aware of all such restrictions and plan accordingly.',
      },
    ],
    relatedSlugs: ['tempo-traveller-mhow', 'urbania-rental-mhow', 'luxury-car-rental-mhow'],
  },
]

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return subServices.find((s) => s.slug === slug)
}
