export const site = {
  businessName: 'Rajputana Cabs Mhow',
  tagline: 'Trusted Taxi Service in Mhow & Nearby Cities',
  contactName: 'Rajpal Singh Rathore',
  phones: ['+91 99930 80333', '+91 99930 80444'] as const,
  phoneTel: ['+919993080333', '+919993080444'] as const,
  whatsappE164: '919993080333',
  email: 'rajpalsinghrathore@gmail.com',
  addressLine: 'Mhow, Indore',
  mapsUrl: 'https://maps.google.com/?q=Mhow%2C%20Indore',
  domain: 'https://rajputanacabsmhow.in',
  baseCity: 'Mhow, Madhya Pradesh',
  nearbyCities: ['Dhar', 'Indore', 'Pithampur', 'Ujjain', 'Omkareshwar', 'Maheshwar', 'Bhopal'] as const,
  geo: { latitude: 22.5557, longitude: 75.7612 },
} as const

export function waHref(message?: string) {
  const base = `https://wa.me/${site.whatsappE164}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function telHref(index: 0 | 1 = 0) {
  return `tel:${site.phoneTel[index].replace(/\s/g, '')}`
}
