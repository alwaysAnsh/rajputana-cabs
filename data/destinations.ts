export type Destination = {
  id: string
  name: string
  distanceKm: number
  image: string
  description: string
  highlights: string[]
  slug: string
}

export const destinations: Destination[] = [
  {
    id: 'indore',
    name: 'Indore',
    distanceKm: 23,
    slug: 'mhow-to-indore-taxi',
    image: '/images/destinations/indore.jpg',
    description: 'Commercial capital of MP, 23km from Mhow',
    highlights: ['Rajwada Palace', 'Sarafa Bazaar', 'Lal Bagh Palace'],
  },
  {
    id: 'dhar',
    name: 'Dhar',
    distanceKm: 57,
    slug: 'mhow-to-dhar-taxi',
    image: '/images/destinations/dhar.jpeg',
    description: 'Historic city with ancient fort, 57km from Mhow',
    highlights: ['Dhar Fort', 'Bhojshala', 'Mandu nearby'],
  },
  {
    id: 'mandu',
    name: 'Mandu',
    distanceKm: 100,
    slug: 'mhow-to-mandu-taxi',
    image: '/images/destinations/mandu.jpg',
    description: 'City of Joy, famous forts and palaces',
    highlights: ['Jahaz Mahal', 'Hindola Mahal', 'Roopmati Pavilion'],
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    distanceKm: 95,
    slug: 'mhow-to-ujjain-taxi',
    image: '/images/destinations/ujjain.jpg',
    description: 'Holy city of Mahakaleshwar Jyotirlinga',
    highlights: ['Mahakal Temple', 'Kumbh Mela', 'Ram Ghat'],
  },
  {
    id: 'omkareshwar',
    name: 'Omkareshwar',
    distanceKm: 80,
    slug: 'mhow-to-omkareshwar-taxi',
    image: '/images/destinations/omkareshwar.jpg',
    description: 'Sacred Jyotirlinga on Narmada River',
    highlights: ['Omkareshwar Temple', 'Narmada Ghat', 'Island view'],
  },
  {
    id: 'maheshwar',
    name: 'Maheshwar',
    distanceKm: 91,
    slug: 'mhow-to-maheshwar-taxi',
    image: '/images/destinations/maheshwar.jpg',
    description: 'Ancient town on banks of Narmada',
    highlights: ['Maheshwar Fort', 'Narmada Ghat', 'Maheshwari Sarees'],
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    distanceKm: 210,
    slug: 'mhow-to-bhopal-taxi',
    image: '/images/destinations/bhopal.jpg',
    description: 'Capital of Madhya Pradesh, 210km from Mhow',
    highlights: ['Upper Lake', 'Van Vihar', 'Sanchi nearby'],
  },
  {
    id: 'airport',
    name: 'Indore Airport',
    distanceKm: 35,
    slug: 'mhow-airport-taxi',
    image: '/images/destinations/airport.jpg',
    description: 'Devi Ahilyabai Holkar Airport drop & pickup',
    highlights: ['Terminal 1 & 2', '24/7 service', 'Flight tracking'],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
