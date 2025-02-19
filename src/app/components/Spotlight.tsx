'use client'

import { useEffect } from 'react'

export default function Spotlight() {
  useEffect(() => {
    const abortController = new AbortController()

    document.body.addEventListener(
      'mousemove',
      (event: MouseEvent) => {
        const SpotlightElement =
          document.querySelector<HTMLDivElement>('#spotlight')
        if (SpotlightElement)
          SpotlightElement.setAttribute(
            'style',
            `background: radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 75%);`,
          )
      },
      { signal: abortController.signal },
    )

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <div
      id="spotlight"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      aria-hidden
    ></div>
  )
}
