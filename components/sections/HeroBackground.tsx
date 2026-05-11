'use client'

import { useEffect, useState } from 'react'
import { ImageWithLoading } from '@/components/ui/ImageWithLoading'

const SLIDES = [
  { src: '/images/hero-bg.jpeg', alt: 'Rajputana Cabs taxi service in Mhow and Indore region' },
  { src: '/images/hero-bg-2.jpeg', alt: 'Rajputana Cabs fleet and road travel in Madhya Pradesh' },
] as const

const ROTATE_MS = 7000

export function HeroBackground() {
  const [active, setActive] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    if (mq.matches) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  if (reduceMotion) {
    return (
      <div className="absolute inset-0">
        <ImageWithLoading
          src={SLIDES[0].src}
          alt={SLIDES[0].alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          loadingMessage="Loading image…"
          loadingLayerClassName="bg-secondary text-white/80"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? 'z-[0] opacity-100' : 'z-[-1] opacity-0'
          }`}
          aria-hidden={index !== active}
        >
          <ImageWithLoading
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            loadingMessage="Loading image…"
            loadingLayerClassName="bg-secondary text-white/80"
          />
        </div>
      ))}
    </div>
  )
}
