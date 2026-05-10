import { CallButton } from '@/components/ui/CallButton'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export type FareRowCarPage = {
  key: string
  destination: string
  distanceKm: number
  oneWay: number
}

export type FareRowDestinationPage = {
  key: string
  carName: string
  capacity: number
  oneWay: number
  /** Optional label for the fare column (e.g. route package range) */
  fareDisplay?: string
}

type CarTableProps = {
  variant: 'car'
  rows: FareRowCarPage[]
  bookMessagePrefix: string
}

type DestinationTableProps = {
  variant: 'destination'
  rows: FareRowDestinationPage[]
  bookMessagePrefix: string
}

type Props = CarTableProps | DestinationTableProps

export function FareTable(props: Props) {
  const minFare = Math.min(...props.rows.map((r) => r.oneWay))
  const formatINR = (value: number) => `₹${value.toLocaleString('en-IN')}`

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-card dark:shadow-card-dark">
      <table className="min-w-[480px] w-full border-collapse text-left text-sm">
        <thead className="sticky top-0 z-[1] bg-surface text-text-primary shadow-sm dark:bg-zinc-800/95">
          {props.variant === 'car' ? (
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Destination</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Distance</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Round Trip</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Book</th>
            </tr>
          ) : (
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Car</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Capacity</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Round Trip</th>
              <th className="whitespace-nowrap px-4 py-3 font-heading font-semibold">Book</th>
            </tr>
          )}
        </thead>
        <tbody>
          {props.variant === 'car' &&
            props.rows.map((row, i) => {
              const highlight = row.oneWay === minFare
              const priceText = formatINR(row.oneWay)
              const line = `${row.destination} (${row.distanceKm} km), ${priceText}`
              return (
                <tr
                  key={row.key}
                  className={`border-t border-border ${i % 2 === 1 ? 'bg-surface/80 dark:bg-zinc-800/50' : 'bg-white dark:bg-zinc-900'} ${
                    highlight ? 'bg-emerald-50 ring-1 ring-inset ring-success/30 dark:bg-emerald-950/40 dark:ring-emerald-700/40' : ''
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-text-primary">{row.destination}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.distanceKm} km</td>
                  <td className="px-4 py-3 font-semibold text-text-primary">{priceText}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <CallButton size="sm" label="Call" className="!min-h-[44px]" />
                      <WhatsAppButton size="sm" label="WA" message={line} className="!min-h-[44px]" />
                    </div>
                  </td>
                </tr>
              )
            })}
          {props.variant === 'destination' &&
            props.rows.map((row, i) => {
              const highlight = row.oneWay === minFare
              const priceText = row.fareDisplay ?? formatINR(row.oneWay)
              const line = `${row.carName}, ${props.bookMessagePrefix}, ${priceText}`
              return (
                <tr
                  key={row.key}
                  className={`border-t border-border ${i % 2 === 1 ? 'bg-surface/80 dark:bg-zinc-800/50' : 'bg-white dark:bg-zinc-900'} ${
                    highlight ? 'bg-emerald-50 ring-1 ring-inset ring-success/30 dark:bg-emerald-950/40 dark:ring-emerald-700/40' : ''
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-text-primary">{row.carName}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.capacity}</td>
                  <td className="px-4 py-3 font-semibold text-text-primary">{priceText}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <CallButton size="sm" label="Call" className="!min-h-[44px]" />
                      <WhatsAppButton size="sm" label="WA" message={line} className="!min-h-[44px]" />
                    </div>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
