import type { Destination } from '@/data/destinations'
import type { FaqItem } from '@/components/ui/FAQAccordion'

export const homeFaqs: FaqItem[] = [
  {
    question: 'What is the taxi fare from Mhow to Indore?',
    answer:
      'Mhow to Indore is 23km. Fare starts at ₹230 for sedan (Dzire) at ₹10/km. For SUV (Ertiga) it is ₹322.',
  },
  {
    question: 'Do you offer 24/7 taxi service in Mhow?',
    answer:
      'Yes, Rajputana Cabs offers 24/7 taxi service in Mhow for airport pickups, outstation trips and local travel.',
  },
  {
    question: 'What cars are available for taxi service in Mhow?',
    answer:
      'We offer Dzire, Etios (sedan), Ertiga, Carens (MUV), Innova Crysta, Fortuner and Tempo Traveller.',
  },
  {
    question: 'Are there any extra charges apart from fare?',
    answer:
      'Only toll, parking, and ₹200 driver allowance per night for outstation trips. No other hidden charges.',
  },
  {
    question: 'How to book taxi in Mhow?',
    answer: 'Simply call or WhatsApp on +91 99930 80333. Only ₹500 advance required, rest paid to driver.',
  },
]

export const servicesFaqs: FaqItem[] = [
  {
    question: 'What taxi services do you provide in Mhow?',
    answer:
      'We provide airport taxi, outstation taxi, Tempo Traveller, luxury cars, wedding transport, Urbania and Char Dham Yatra packages from Mhow.',
  },
  {
    question: 'How is fare calculated for outstation trips?',
    answer:
      'Outstation fare is primarily distance × per km rate for your chosen car. For trips above 150 km, ₹200/night driver allowance may apply.',
  },
  {
    question: 'Can I book a cab for same-day travel?',
    answer: 'Yes. Call or WhatsApp with your pickup time and destination — we confirm availability instantly.',
  },
  {
    question: 'Do you provide airport pickup from Indore Airport to Mhow?',
    answer:
      'Yes. We track flights and provide pickup/drop between Indore Airport (Devi Ahilyabai Holkar) and Mhow.',
  },
  {
    question: 'What payment modes are accepted?',
    answer: 'Cash, UPI and card payments are accepted as per trip agreement. ₹500 advance secures your booking.',
  },
]

export function destinationFaqs(dest: Destination): FaqItem[] {
  return [
    {
      question: `How long does Mhow to ${dest.name} take by taxi?`,
      answer: `Typical road time is around ${dest.distanceKm <= 50 ? '45–90 minutes' : dest.distanceKm <= 120 ? '2–3 hours' : '4+ hours'} depending on traffic and halts.`,
    },
    {
      question: `What is included in the Mhow to ${dest.name} taxi fare?`,
      answer:
        'Driver, fuel, AC and toll on outstation routes are included in the quoted per-km calculation. Parking and driver night allowance (if applicable) are extra.',
    },
    {
      question: 'Can I book a one-way taxi only?',
      answer: `Yes. One-way drops from Mhow to ${dest.name} are available. Round-trip fares are also listed for planning return journeys.`,
    },
    {
      question: 'How do I get the lowest fare on this route?',
      answer:
        'Sedan (Dzire/Etios) offers the lowest per-km rate. For larger groups, MUV/Tempo per-person cost is often better — compare in the fare table above.',
    },
  ]
}
