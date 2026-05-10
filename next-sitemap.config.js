/** @type {import('next-sitemap').IConfig} */
const DESTINATION_SLUGS = [
  'mhow-to-indore-taxi',
  'mhow-to-dhar-taxi',
  'mhow-to-mandu-taxi',
  'mhow-to-ujjain-taxi',
  'mhow-to-omkareshwar-taxi',
  'mhow-to-maheshwar-taxi',
  'mhow-to-bhopal-taxi',
  'mhow-airport-taxi',
]

const MHOW_SERVICE_SLUGS = [
  'luxury-car-rental-mhow',
  'wedding-car-mhow',
  'tempo-traveller-mhow',
  'urbania-rental-mhow',
  'char-dham-yatra-mhow',
]

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rajputanacabsmhow.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const paths = []
    for (const slug of DESTINATION_SLUGS) {
      paths.push(await config.transform(config, `/${slug}`))
    }
    for (const slug of MHOW_SERVICE_SLUGS) {
      paths.push(await config.transform(config, `/mhow/${slug}`))
    }
    return paths
  },
}
