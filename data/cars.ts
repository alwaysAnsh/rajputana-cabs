export type Car = {
  id: string
  name: string
  image: string
  category: 'sedan' | 'suv' | 'muv' | 'luxury' | 'tempo'
  capacity: number
  luggage: number
  ac: boolean
  ratePerKm: number
  features: string[]
  description: string
}

export const cars: Car[] = [
  {
    id: 'dzire',
    name: 'Swift Dzire / Toyota Etios',
    image: '/images/cars/dzire.jpg',
    category: 'sedan',
    capacity: 4,
    luggage: 2,
    ac: true,
    ratePerKm: 10,
    features: ['AC', '4 Seater', 'Music System', 'Comfortable for long trips'],
    description: 'Most popular sedan for outstation and local trips',
  },
  {
    id: 'ertiga',
    name: 'Ertiga / KIA Carens',
    image: '/images/cars/ertiga.jpg',
    category: 'muv',
    capacity: 6,
    luggage: 3,
    ac: true,
    ratePerKm: 14,
    features: ['AC', '6 Seater', 'Extra Luggage Space', 'Ideal for families'],
    description: 'Perfect for family trips and group travel',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    image: '/images/cars/innova-crysta.jpg',
    category: 'muv',
    capacity: 7,
    luggage: 4,
    ac: true,
    ratePerKm: 18,
    features: ['AC', '7 Seater', 'Premium Comfort', 'Captain Seats'],
    description: 'Premium MUV for comfortable long distance travel',
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    image: '/images/cars/fortuner.jpg',
    category: 'suv',
    capacity: 7,
    luggage: 4,
    ac: true,
    ratePerKm: 23,
    features: ['AC', '7 Seater', 'Premium SUV', '4x4 capable'],
    description: 'Luxury SUV for a premium travel experience',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller (12 Seater)',
    image: '/images/cars/tempo-traveller.jpg',
    category: 'tempo',
    capacity: 12,
    luggage: 8,
    ac: true,
    ratePerKm: 22,
    features: ['AC', '12 Seater', 'Push Back Seats', 'Ideal for groups'],
    description: 'Best for group travel and pilgrimages',
  },
]

export function getCarById(id: string): Car | undefined {
  return cars.find((c) => c.id === id)
}
