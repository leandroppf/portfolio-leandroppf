import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  headingId: string
  headingTitle: string
}

export default function Section({
  children,
  headingId,
  headingTitle,
}: SectionProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6">
      <h3 id={headingId} className="text-xl font-semibold">
        {headingTitle}
      </h3>
      {children}
    </section>
  )
}
