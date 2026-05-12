import type { SubService } from './subServices'
import { subServiceImage as img } from './subServiceAssets'

/**
 * Main content mirrored from rajputanacabs.in/indore/tempo-traveller-indore/urbania-on-rent-indore/
 * localized to Mhow and Rajputana Cabs Mhow contact (Rajpal Singh Rathore).
 */
export const urbaniaRentalPartial: Omit<SubService, 'id' | 'title' | 'slug'> = {
  vehicles: [],
  shortDesc:
    'Force Urbania on rent in Mhow from Rajputana Cabs — 14 & 17 seater plus luxury Maharaja Urbania, from ₹30/km. GST-registered, insured fleet.',
  startingFare: '₹30/km',
  heroImage: img.toyotaVellfire,
  introHeading: 'Urbania on rent in Mhow & Indore, M.P.',
  intro:
    'Rajputana Cabs serves Mhow and nearby Indore with tourist transport and taxis.\n\nWe offer Tempo Traveller on rent in Mhow and also provide our premium Force Urbania on rent in Mhow, starting from about ₹30 per km.\n\nOur standard Tempo Travellers are available at fares ranging from ₹22 to ₹26 per km, and we offer three Force Urbania options in Mhow, like:',
  availabilityListTitle: 'Available Urbania on rent in Mhow',
  availabilityList: [
    '14 Seater Force Urbania',
    '17 Seater Force Urbania',
    'Modified Luxury Maharaja Force Urbania',
  ],
  introClosing:
    'You can view the fare details for all Force Urbania rentals below.\n\nFor booking or for more details about our Urbania rental service in Mhow, Madhya Pradesh, please call Rajpal Singh Rathore at the numbers below, or visit us in person in Mhow.\n\nYou can also meet us and see our Urbania vehicles by appointment.',
  vehicleSections: [
    {
      id: 'urbania-models',
      heading: 'Urbania on rent in Mhow & Indore, M.P.',
      vehicles: [
        {
          id: 'urbania-14',
          name: '14 Seater Force Urbania on rent in Mhow & Indore',
          image: '/images/sub-services/tempo-16.jpeg',
          description:
            'Our mid-size Force Urbania is a 14 seater model which you can rent in Mhow for local or nearby sightseeing or an outstation trip from Madhya Pradesh.',
          fareLineOverrides: [
            'Models: Force Urbania',
            'Seating capacity: 14+1 people',
            'Local 1 day fare: ₹6,400',
            'Outstation fare: ₹30–31/km',
          ],
          ctaType: 'call',
        },
        {
          id: 'urbania-17',
          name: '17 Seater Force Urbania on rent in Mhow & Indore',
          image: '/images/services/urbania.jpg',
          description:
            'The 17 seater Force Urbania is the biggest Force Urbania model, mostly booked for outstation trips — also available for local hire, weddings and events.',
          fareLineOverrides: [
            'Models: Force Urbania',
            'Seating capacity: 17+1 people',
            'Local 1 day fare: ₹7,400',
            'Outstation fare: ₹32–34/km',
          ],
          ctaType: 'call',
        },
        {
          id: 'luxury-urbania',
          name: 'Luxury Force Urbania on rent in Mhow & Indore',
          image: '/images/services/tempo.jpg',
          description:
            'Our luxury Force Urbania models are modified tempo travellers (PKN style) with sofa seats, AC blower on all seats, LED TV and attractive interiors.',
          fareLineOverrides: [
            'Models: Force Urbania',
            'Seating capacity: 9 seater',
            'Local 1 day fare: ₹9,000',
            'Outstation fare: ₹35–40/km',
          ],
          ctaType: 'call',
        },
      ],
    },
  ],
  additionalContent: {
    whyBook: {
      title: 'Why book/rent an Urbania in Mhow from Rajputana Cabs?',
      bullets: [
        'A GST-registered travel agency.',
        'Local base in Mhow — come and see the Urbania in person.',
        'All Force Urbania vehicles have valid third-party insurance.',
        'A fleet of 50+ cars and Tempo Travellers serving Mhow and Indore region.',
        'Pay-on-trip option available.',
      ],
      after:
        'Plus, you can also check our Force Motor Tempo Traveller on rent in Mhow, available at ₹22 to ₹28 per km for 12, 16 and 20 seater tempo travellers, and the luxury Maharaja 9 seater tempo traveller at ₹25 per km.',
    },
    rentFor: {
      title: 'Rent our Urbania in Mhow for:',
      cases: [
        {
          id: 'airport',
          title: '1. Indore Airport pick & drop',
          body:
            'Hire our Urbania Tempo Traveller from Mhow for pick-up or drop at Indore Airport, starting at about ₹3,000 all-inclusive for suitable group transfers. Indore airport name is Devi Ahilya Bai Holkar Airport (IATA: IDR). Final fare depends on group size and exact pickup/drop points.',
        },
        {
          id: 'sightseeing',
          title: '2. Sightseeing (Mhow / Indore region)',
          body:
            'Hire our Urbania for a day and visit popular attractions — for example a full Indore city circuit from Mhow at about ₹7,000 all-inclusive. Visit Rajwada Palace, Lal Bagh Palace and more (itinerary-dependent).',
        },
        {
          id: 'temple',
          title: '3. Temple visit from Mhow',
          body:
            'Hire our Urbania on rent from Mhow and visit Omkareshwar Jyotirlinga, followed by Mahakaleshwar Temple in Ujjain. You can visit both famous temples in a single long day; indicative fare is about ₹7,000 to ₹8,000 in our Force Urbania.',
        },
        {
          id: 'char-dham',
          title: '4. Char Dham Yatra from Mhow',
          body:
            'From April to October, the gates of the Char Dham temples open in Uttarakhand. We offer our Urbania on rent from Mhow for about a 13-day Char Dham Yatra, with per-day packages from around ₹9,999 (route and inclusions on quotation). Total distance from Mhow is often roughly 3,500 km — share your dates for an exact plan.',
        },
        {
          id: 'rajasthan',
          title: '5. Urbania on rent for Rajasthan tour from Mhow',
          body:
            'Rajputana Cabs is part of a Rajasthan-rooted network with deep experience on Rajasthan circuits. We offer Urbania rentals, experienced drivers and professional guides for Rajasthan tours from Mhow, which you can plan for 6 days, 9 days or 14 days.',
        },
        {
          id: 'goa',
          title: '6. Urbania on rent for Goa tour from Mhow',
          body:
            'Plan a trip to Goa from Mhow by hiring our Urbania on rent at a minimum of about ₹28 per km. Goa is approximately a 24-hour drive from Mhow, so we suggest leaving by noon on Day 1 and arriving in Goa by noon on Day 2. From Day 2 to Day 5, stay in Goa and explore local sightseeing comfortably in our Force Urbania. On Day 5, check out from your Goa hotel and depart for Mhow, reaching by noon on Day 6.',
        },
      ],
      footer:
        'Plus, contact Rajpal Singh Rathore anytime at +91 99930 80333 or +91 99930 80444, or WhatsApp us. For an in-person meeting or to see Urbania vehicles in Mhow, call first to confirm time and location.',
    },
    policyNotes: {
      title: 'Note',
      bullets: [
        'All our Force Urbania vehicles are provided with a driver; self-drive is not available.',
        'We strictly allow seating only as per local transport rules; over-seating is not permitted.',
        'Force Urbania rentals for all outstation trips are charged on a per-km basis, except for Char Dham Yatra, which is often quoted on a per-day package basis.',
        'AC charges are included in all Urbania rentals; however, the AC may be switched off while driving in hilly or mountainous areas as per safety norms.',
        'Smoking and consumption of alcohol are strictly prohibited inside the Force Urbania.',
        'If the rental is agreed on a per-km basis, toll tax, state tax, driver allowance and parking charges are usually paid separately by the guest as per actuals during the trip unless you choose an all-inclusive quote.',
      ],
    },
    comparisonTable: {
      title: 'Quick view on Urbania rental in Mhow, M.P.',
      caption: 'Scroll horizontally on small screens to see the full table.',
      headers: ['Taxi / van', 'Seating capacity', 'Per km fare', 'Local fare (1 day)'],
      rows: [
        ['14 seater Urbania', '15', '₹30–31/km', '₹6,400'],
        ['17 seater Urbania', '18', '₹32–34/km', '₹7,400'],
        ['Luxury Urbania (Maharaja)', '10', '₹35–40/km', '₹9,000'],
      ],
    },
    tempoAlternatives: {
      intro: 'Apart from the three Force Urbania options above, you can also hire our Tempo Traveller in Mhow at:',
      bullets: [
        '₹22/km and ₹5,000 local for 12 seater Tempo Traveller',
        '₹24/km and ₹5,500 local for 16 seater Tempo Traveller',
        '₹28/km and ₹7,000 local for 20 seater Tempo Traveller',
        '₹26/km and ₹6,000 local for Maharaja Tempo Traveller',
      ],
    },
  },
  faqs: [
    {
      q: 'What will be the minimum rental for your Urbania in Mhow?',
      a: 'Our starting fare for Urbania rental from Mhow on the 14 seater Force Urbania is about ₹30 per km outstation and around ₹6,400 for local 1 day. Fares for 17 seater and luxury Urbania are shared above — call or WhatsApp Rajpal Singh Rathore at +91 99930 80333 or +91 99930 80444.',
    },
    {
      q: 'What are the inclusions of hiring your Force Urbania in Mhow for local sightseeing and for outstation trips?',
      a: 'When you rent our Force Urbania for local Mhow / nearby places under about 25 km, we usually quote an all-inclusive fare (tempo fare and parking). When you hire our Urbania for outstation from Mhow, per km fare is charged for the Urbania rental, plus about ₹300–500 per day driver allowance, toll tax, parking and state tax if you travel outside Madhya Pradesh. For outstation, you can share your full tour itinerary and we can offer an all-inclusive discounted price.',
    },
    {
      q: 'How many people can sit in Force Urbania?',
      a: 'In 14 seater, up to 15 people as per layout; in 17 seater up to 18; in our modified PKN luxury Force Urbania about 9–10 guests depending on configuration. We do not allow over-seating beyond permit.',
    },
    {
      q: 'I want to hire your Force Urbania for long distance travel to Himachal, Jammu & Kashmir or southern India — is this vehicle suitable?',
      a: 'Urbania is a modern tempo traveller from Force Motors, different from older 12 / 17 / 20 seater tempo designs. These models come with company-fit pushback seats, strong performance and AC on all seats — a strong choice for a group of about 14 to 18 people planning a long trip from Mhow to any region of India.',
    },
    {
      q: 'Is Force Urbania a good vehicle for wedding transportation in Mhow?',
      a: 'Yes — you can hire a Force Urbania for pick and drop from airport, railway station and from your hotel to the venue. Force Urbania is a popular choice for destination wedding transport across M.P. and nearby states; many guests hire multiple Urbanias for resort and venue shuttles.',
    },
    {
      q: 'Is your Force Urbania properly insured?',
      a: 'Yes — all our Force Urbania vans and our fleet of Tempo Travellers and taxi cabs have third-party insurance, and guests can verify details before travel.',
    },
    {
      q: 'How do I rent your Force Urbania in Mhow?',
      a: 'For booking we need WhatsApp or email confirmation and minimum about 10% advance. The remaining amount is paid across the trip days as agreed — for example on a 4-day hire totalling ₹20,000 all inclusive, about ₹2,000 advance and the balance split over the four days as per mutual schedule.',
    },
    {
      q: 'What if I want to cancel or postpone my Force Urbania rental booking?',
      a: 'To postpone, share new dates and itinerary on SMS, email or WhatsApp. If you cancel your Force Urbania trip, you are eligible for a full refund of advance if cancellation is at least 14 days before the trip date (confirm at booking).',
    },
  ],
  relatedSlugs: ['tempo-traveller-mhow', 'luxury-car-rental-mhow', 'char-dham-yatra-mhow'],
}
