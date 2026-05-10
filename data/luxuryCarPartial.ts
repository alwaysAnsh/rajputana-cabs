import type { SubService } from './subServices'
import { subServiceImage as img } from './subServiceAssets'

/**
 * Main body content mirrored from rajputanacabs.in/indore/luxury-car-rental-indore/
 * with city/contact localized to Rajputana Cabs Mhow (Mhow, Rajpal Singh Rathore).
 * Form blocks and duplicate CTAs from the source page are omitted.
 */
export const luxuryCarRentalPartial: Omit<SubService, 'id' | 'title' | 'slug'> = {
  vehicles: [],
  shortDesc:
    'Luxury cars on rent in Mhow — Defender, Mercedes, BMW, Audi, Jaguar, Bentley, Toyota, KIA; hourly & daily bands, outstation per km, FAQs.',
  startingFare: '₹4,999/hr onwards',
  heroImage: img.bentleyContinental,
  introHeading: 'Luxury car rental in Mhow & Indore, M.P.',
  intro:
    'Rajputana Cabs offers luxury cars on rent in Mhow for weddings, corporate events, VIP pick-and-drop services, and special occasions.\n\nIn Mhow, we provide the latest models of premium luxury vehicles, including:',
  availabilityListTitle: 'Available luxury cars in Mhow',
  availabilityList: [
    'Land Rover Defender',
    'Mercedes-Benz',
    'Audi Sedan & SUV',
    'BMW',
    'Jaguar',
  ],
  introClosing:
    'We also offer top models from Toyota & KIA, including the Land Cruiser, Carnival, and more.\n\nBelow, we have shared our rental fares for all luxury cars available in Mhow.\n\nPlease review the details and feel free to contact Rajpal Singh Rathore to book any of our luxury cars.',
  vehicleSections: [
    {
      id: 'top-hourly',
      heading: 'Best luxury cars on rent in Mhow (Top 6)',
      vehicles: [
        {
          id: 'defender',
          name: 'Land Rover Defender (Indore)',
          image: img.landRover,
          description:
            'In the last few years, demand for the Land Rover Defender has increased a lot — we offer our Defender on rent in Mhow. Latest model, petrol engine, 6+1 seater luxury SUV.',
          farePerHour: 4999,
          farePerKm: 99,
          ctaType: 'call',
        },
        {
          id: 'mercedes-e-hourly',
          name: 'Mercedes-Benz E-Class (Indore)',
          image: img.mercedesE,
          description:
            'Mercedes-Benz cars have been available on rent for decades; our Mercedes-Benz E-Class is available in silver, white and carbon blue.',
          farePerHour: 9999,
          farePerKm: 40,
          ctaType: 'call',
        },
        {
          id: 'maybach-s580',
          name: 'Mercedes-Maybach S 580 (Indore)',
          image: img.mercedesMaybach,
          description:
            'Our most premium sedan, mostly reserved for VIP pick & drop — Mercedes-Maybach S 580, 4 seater sedan.',
          farePerHour: 24999,
          farePerKm: 80,
          ctaType: 'call',
        },
        {
          id: 'bmw-5-hourly',
          name: 'BMW 5 Series (Indore)',
          image: img.bmw5,
          description:
            'Premium satisfaction in a luxury sedan — petrol hybrid, 4+1 seating, white & carbon black metallic.',
          farePerHour: 16000,
          farePerKm: 60,
          ctaType: 'call',
        },
        {
          id: 'audi-a6-hourly',
          name: 'Audi A6 (Indore)',
          image: img.audiA6,
          description:
            'One of our best-booked luxury sedans in Mhow — 4+1 seater petrol, mostly available in white.',
          farePerHour: 17000,
          farePerKm: 64,
          ctaType: 'call',
        },
        {
          id: 'bentley-gt',
          name: 'Bentley Continental GT (Indore)',
          image: img.bentleyContinental,
          description:
            'Ultra luxury 2+2 seater coupé — petrol only, available in Glacier White & Titan Grey.',
          farePerHour: 40000,
          farePerKm: 175,
          ctaType: 'call',
        },
      ],
      after:
        'The above 6 luxury cars are our most booked options for rent in Mhow, with fares ranging from ₹9,000 to ₹40,000 per day, including a driver. Below are more luxury sedans and SUVs from Audi, BMW, Mercedes, and other premium brands available for rent in Mhow.\n\nTo book any of these luxury cars on rent in Mhow, contact Rajpal Singh Rathore at +91 99930 80333 or +91 99930 80444, or WhatsApp for more images of the above car models.',
    },
    {
      id: 'under-9999',
      heading: 'Luxury cars on rent in Mhow under ₹9,999',
      vehicles: [
        {
          id: 'fortuner-day',
          name: 'Toyota Fortuner (Indore)',
          image: img.toyotaFortuner,
          description:
            'One of the most booked luxury cars under ₹9,999 — new model Fortuner in Mhow. All our Fortuner cars are diesel, 6+1 seating.',
          farePerDay: 5500,
          farePerKm: 23,
          ctaType: 'call',
        },
        {
          id: 'carnival-day',
          name: 'KIA Carnival (Indore)',
          image: img.kiaCarnival,
          description: 'Our MPV — KIA Carnival in white, 7+1 seater.',
          farePerDay: 9999,
          farePerKm: 38,
          ctaType: 'call',
        },
        {
          id: 'audi-a3',
          name: 'Audi A3 (White) (Indore)',
          image: img.audiA3,
          description: 'Standard Audi sedan — diesel, 4+1 seater.',
          farePerDay: 8500,
          farePerKm: 35,
          ctaType: 'call',
        },
        {
          id: 'audi-a4',
          name: 'Audi A4 (Indore)',
          image: img.audiA4,
          description: 'Updated Audi A4 — 4+1 seater diesel sedan.',
          farePerDay: 9000,
          farePerKm: 38,
          ctaType: 'call',
        },
        {
          id: 'jaguar-xf',
          name: 'Jaguar XF (Indore)',
          image: img.jaguarXF,
          description: 'Jaguar XF luxury sedan — 4+1 seater, available in black.',
          farePerDay: 8900,
          farePerKm: 35,
          ctaType: 'call',
        },
        {
          id: 'jaguar-xe',
          name: 'Jaguar XE (Indore)',
          image: img.jaguarXE,
          description: 'Jaguar XE sedan under ₹9,999 — 4+1 seater.',
          farePerDay: 9900,
          farePerKm: 39,
          ctaType: 'call',
        },
      ],
      after:
        'To book any of the above 6 luxury cars in Mhow, call Rajpal Singh Rathore at +91 99930 80333 or +91 99930 80444, or WhatsApp for more images of the above car models.',
    },
    {
      id: '10000-19999',
      heading: 'Luxury cars rental in Mhow from ₹10,000 to ₹19,999',
      lead: 'Below we have shared a list of luxury cars available on rent in Mhow for ₹10,000 to ₹19,999 per day rental.',
      vehicles: [
        {
          id: 'mercedes-c',
          name: 'Mercedes C-Class (Indore)',
          image: img.mercedesC,
          description: 'Popular sedan luxury model — 4+1 seater.',
          farePerDay: 11000,
          farePerKm: 45,
          ctaType: 'call',
        },
        {
          id: 'mercedes-s',
          name: 'Mercedes S-Class (Indore)',
          image: img.mercedesS,
          description:
            'Luxury S-Class in 3 variants (S 350, S 450 and S 500) — rental range reflects model.',
          farePerDay: 12000,
          farePerKm: 48,
          ctaType: 'call',
        },
        {
          id: 'bmw-2-gc',
          name: 'BMW 2 Series Gran Coupé (Indore)',
          image: img.bmw2Series,
          description: 'Petrol engine, 4+1 seater.',
          farePerDay: 12000,
          farePerKm: 45,
          ctaType: 'call',
        },
        {
          id: 'bmw-x1',
          name: 'BMW X1 (Indore)',
          image: img.bmwX1,
          description: 'Luxury BMW X1 SUV — 4+1 seater.',
          farePerDay: 12500,
          farePerKm: 47,
          ctaType: 'call',
        },
        {
          id: 'bmw-3',
          name: 'BMW 3 Series (Indore)',
          image: img.bmw3,
          description: 'Strong VIP pick & drop choice — 4+1 diesel sedan.',
          farePerDay: 14000,
          farePerKm: 60,
          ctaType: 'call',
        },
        {
          id: 'bmw-5-daily',
          name: 'BMW 5 Series (Indore)',
          image: img.bmw5,
          description: 'Premium sedan — white and carbon blue.',
          farePerDay: 17500,
          farePerKm: 70,
          ctaType: 'call',
        },
        {
          id: 'audi-a5',
          name: 'Audi A5 (Indore)',
          image: img.audiA5,
          description: 'Audi A5 luxury sedan — white, 4+1 seater.',
          farePerDay: 12000,
          farePerKm: 40,
          ctaType: 'call',
        },
        {
          id: 'audi-q5',
          name: 'Audi Q5 (Indore)',
          image: img.audiQ5,
          description: '5 seater SUV — white, grey.',
          farePerDay: 14000,
          farePerKm: 55,
          ctaType: 'call',
        },
        {
          id: 'audi-a6-daily',
          name: 'Audi A6 (Indore)',
          image: img.audiA6,
          description: 'Premium luxury sedan — white and carbon blue.',
          farePerDay: 18000,
          farePerKm: 55,
          ctaType: 'call',
        },
        {
          id: 'vellfire',
          name: 'Toyota Vellfire (Indore)',
          image: img.toyotaVellfire,
          description: 'Large comfortable SUV — 7+1 seater, white only.',
          farePerDay: 15000,
          farePerKm: 60,
          ctaType: 'call',
        },
        {
          id: 'jaguar-fpace',
          name: 'Jaguar F-Pace (Indore)',
          image: img.jaguarFPace,
          description: 'Jaguar F-Pace SUV — white, carbon blue & black.',
          farePerDay: 12000,
          farePerKm: 45,
          ctaType: 'call',
        },
        {
          id: 'limo',
          name: 'Limo rental (Indore)',
          image: '/images/cars/limo.jpeg',
          description:
            'Modified limo for marriages & events in Mhow only — made in India with best interiors and lighting.',
          fareLineOverrides: ['₹12,500/day', 'N/A for outstation'],
          ctaType: 'call',
        },
      ],
      after:
        'The above 12 sedans, SUVs and our modified limo are our mid-range luxury cars which you can rent for a day or an outstation trip from Mhow from ₹10,000 to ₹19,999 per day.',
    },
    {
      id: '20000-50000',
      heading: 'Luxury cars rental in Mhow from ₹20,000 to ₹50,000',
      lead: 'Below we have shared our premium luxury cars which you can rent in Mhow from ₹20,000 to ₹50,000 a day. All our luxury cars have proper insurance and highly trained chauffeurs.',
      vehicles: [
        {
          id: 'maybach-s-daily',
          name: 'Mercedes Maybach S-Class (Indore)',
          image: img.mercedesMaybach,
          description: 'Premium luxury sedan.',
          farePerDay: 25000,
          farePerKm: 85,
          ctaType: 'call',
        },
        {
          id: 'mercedes-gle',
          name: 'Mercedes GLE 250 / 350D (Indore)',
          image: img.mercedesGLE,
          description: 'Premium luxury SUVs from Mercedes-Benz.',
          farePerDay: 40000,
          farePerKm: 140,
          ctaType: 'call',
        },
        {
          id: 'bmw-m340i',
          name: 'BMW M340i (Indore)',
          image: img.bmwM340i,
          description: 'Sports luxury — 2 seater.',
          farePerDay: 20000,
          farePerKm: 85,
          ctaType: 'call',
        },
        {
          id: 'audi-q7',
          name: 'Audi Q7 (Indore)',
          image: img.audiQ7,
          description: 'Latest SUV model on rental in Mhow.',
          farePerDay: 20000,
          farePerKm: 84,
          ctaType: 'call',
        },
        {
          id: 'audi-a8',
          name: 'Audi A8 (Indore)',
          image: img.audiA8,
          description: 'Latest premium sedan.',
          farePerDay: 25000,
          farePerKm: 90,
          ctaType: 'call',
        },
        {
          id: 'audi-q8',
          name: 'Audi Q8 (Indore)',
          image: img.audiQ8,
          description: 'Latest Audi SUV — 5 seater.',
          farePerDay: 40000,
          farePerKm: 125,
          ctaType: 'call',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'What is the starting fare for a luxury car rental in Mhow?',
      a: 'The starting fare is around ₹5,000 to ₹6,000 for our Toyota Fortuner 7-seater. For ₹8,000 to ₹10,000, you can book entry-level luxury sedan cars such as Audi, Mercedes-Benz, and Jaguar.',
    },
    {
      q: 'I want a luxury car for a wedding. Which will be the best one?',
      a: 'For weddings, we recommend premium luxury cars such as Rolls-Royce Phantom, Mercedes-Maybach S-Class, Bentley Continental GT, and Audi A8. These cars fall under our ₹20,000 to ₹50,000 per-day rental category. You can also choose luxury cars from our ₹9,999 to ₹20,000 category, where models like Mercedes-Benz E-Class, BMW 5 Series, and Jaguar XE are frequently booked as wedding cars in Mhow.',
    },
    {
      q: 'Is the luxury car fare inclusive of the driver?',
      a: 'No, the driver allowance is separate and is usually ₹500 per day. However, you can always ask for a discounted all-inclusive fare, where this ₹500 driver allowance is included.',
    },
    {
      q: 'What is the minimum and maximum duration for which I can rent a luxury car in Mhow?',
      a: 'It depends on the car model. For cars priced between ₹6,000 and ₹20,000, the minimum rental duration is usually 4 to 8 hours. For ultra-luxury cars priced between ₹20,000 and ₹50,000, we offer packages of 2 to 4 hours. We also provide a 2-hour package for airport pickup and drop, which is our VIP luxury car transfer service.',
    },
    {
      q: 'Do you provide luxury cars for airport pickup and drop near Mhow?',
      a: 'From Indore Airport (Devi Ahilya Bai Holkar Airport), roughly 45–60 minutes from Mhow, you can book our 2-hour VIP pickup and drop package. Prices start from ₹5,000 to ₹12,000 for premium luxury cars.',
    },
    {
      q: 'If we hire a luxury car for a wedding in Mhow, is decoration included?',
      a: 'For weddings, we provide basic ribbon decoration, which is included in the car rental. For live flower decoration, the cost is separate. We will share the contact details of a florist who will explain the available decoration options and pricing. Flower decoration is done at your booked venue.',
    },
    {
      q: 'Can I book your luxury car for an outstation trip from Mhow?',
      a: 'Yes, more than 75% of our luxury car models listed above are available for outstation travel, except for a few models that are reserved for local use only, such as limousines and Bentley cars.',
    },
    {
      q: 'Do all your luxury cars have insurance?',
      a: 'Yes, all our cars are fully insured, covering all three parties.',
    },
    {
      q: 'What is your booking and cancellation policy?',
      a: 'As per our booking policy, we require a minimum of 19% as a booking advance, with the remaining payment due on the booking date. If you cancel your booking at least 20 days in advance, we will refund the full booking advance.',
    },
    {
      q: 'Can I visit your office to see the car before booking?',
      a: `Yes, you are most welcome to visit us in Mhow. Our address is Mhow, Indore. You can contact our manager at +91 99930 80333 or +91 99930 80444.`,
    },
    {
      q: 'Do you accept luxury car rental booking for farewell in Mhow?',
      a: 'Yes — apart from our premium luxury cars, we accept farewell at school & college luxury car bookings.',
    },
    {
      q: 'Are there any additional charges apart from all inclusive fare?',
      a: 'No — our all inclusive fare for Mhow luxury car rental is inclusive of fuel, parking, driver allowance. Only if you are taking the car for an outstation trip, charges like toll tax and parking are extra and guests can pay them directly on the trip.',
    },
  ],
  relatedSlugs: ['tempo-traveller-mhow', 'wedding-car-mhow', 'urbania-rental-mhow'],
}
