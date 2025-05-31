'use client'

import { useEffect, useState } from 'react'
import NavigationLink from './NavigationLink'

const sections = [
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
]

export default function Navigation() {
  const [locationHash, setLocationHash] = useState<string>('')

  useEffect(() => {
    const handleHashChange = () => {
      setLocationHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll('section h3')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            window.location.hash !== `#${entry.target.id}`
          ) {
            window.location.hash = `#${entry.target.id}`
          }
        })
      },
      { threshold: 1 },
    )

    window.addEventListener(
      'scroll',
      () => {
        sectionHeadings.forEach((heading) => {
          observer.observe(heading)
        })
      },
      { once: true },
    )

    return () => {
      sectionHeadings.forEach((heading) => {
        observer.unobserve(heading)
      })
    }
  }, [])

  return (
    <div className="flex flex-col gap-4 p-4">
      {sections.map((section) => (
        <NavigationLink
          key={section.id}
          href={`#${section.id}`}
          active={locationHash === `#${section.id}`}
        >
          {section.title}
        </NavigationLink>
      ))}
    </div>
  )
}
