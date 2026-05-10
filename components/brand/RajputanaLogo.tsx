import Link from 'next/link'

type Props = {
  className?: string
}

/** Wordmark logo — Rajputana (navy) + Cabs (orange). */
export function RajputanaLogo({ className = '' }: Props) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2 rounded-lg outline-none ring-primary/0 transition focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label="Rajputana Cabs Mhow — Home"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
        aria-hidden
      >
        <circle cx="20" cy="20" r="19" className="fill-secondary dark:fill-zinc-100" />
        <path
          d="M20 8 L24 16 L20 14 L16 16 Z M14 18 L26 18 L24 28 L16 28 Z"
          fill="#FF6B00"
          opacity="0.95"
        />
        <circle cx="20" cy="22" r="2.5" fill="#FF6B00" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-bold tracking-tight text-text-primary transition group-hover:text-primary">
          Rajputana
        </span>
        <span className="font-heading text-sm font-semibold tracking-wide text-primary">Cabs</span>
      </span>
    </Link>
  )
}
