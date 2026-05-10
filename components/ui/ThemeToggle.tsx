'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      suppressHydrationWarning
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-surface text-text-primary transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-primary"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
    </button>
  )
}
