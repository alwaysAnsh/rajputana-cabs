'use client'

import Image, { type ImageProps } from 'next/image'
import { useCallback, useState } from 'react'

type Props = Omit<ImageProps, 'onLoad' | 'onError'> & {
  onLoad?: ImageProps['onLoad']
  onError?: ImageProps['onError']
  /** Shown centered until the image finishes loading. */
  loadingMessage?: string
  /** Extra classes for the loading layer (e.g. dark hero background). */
  loadingLayerClassName?: string
  /** Classes when load completes (default `opacity-100`). Use e.g. `opacity-40` for a dimmed hero. */
  loadedRevealClassName?: string
}

export function ImageWithLoading({
  className = '',
  loadingMessage = 'Loading image…',
  loadingLayerClassName = '',
  loadedRevealClassName = 'opacity-100',
  onLoad,
  onError,
  alt,
  ...imageProps
}: Props) {
  const [loaded, setLoaded] = useState(false)

  const handleLoad: NonNullable<ImageProps['onLoad']> = useCallback(
    (e) => {
      setLoaded(true)
      onLoad?.(e)
    },
    [onLoad],
  )

  const handleError: NonNullable<ImageProps['onError']> = useCallback(
    (e) => {
      setLoaded(true)
      onError?.(e)
    },
    [onError],
  )

  const isFill = Boolean(imageProps.fill)

  if (isFill) {
    return (
      <>
        {!loaded ? (
          <div
            className={`absolute inset-0 z-[1] flex items-center justify-center bg-surface text-sm font-medium text-text-secondary motion-safe:animate-pulse dark:bg-zinc-800 dark:text-zinc-400 ${loadingLayerClassName}`}
            aria-busy="true"
            aria-live="polite"
          >
            {loadingMessage}
          </div>
        ) : null}
        <Image
          {...imageProps}
          alt={alt ?? ''}
          className={`${className} ${loaded ? loadedRevealClassName : 'opacity-0'} transition-opacity duration-500`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </>
    )
  }

  return (
    <span className="relative inline-block max-w-full">
      {!loaded ? (
        <span
          className={`absolute inset-0 z-[1] flex min-h-[5rem] w-full items-center justify-center bg-surface text-sm font-medium text-text-secondary motion-safe:animate-pulse dark:bg-zinc-800 dark:text-zinc-400 ${loadingLayerClassName}`}
          aria-busy="true"
          aria-live="polite"
        >
          {loadingMessage}
        </span>
      ) : null}
      <Image
        {...imageProps}
        alt={alt ?? ''}
        className={`${className} ${loaded ? loadedRevealClassName : 'opacity-0'} transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </span>
  )
}
