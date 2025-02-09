import { Experience } from '@/models/experience'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link
      href={experience.company.website}
      target="_blank"
      className="group relative w-full rounded-md p-6 transition duration-300 hover:bg-foreground hover:shadow"
    >
      <span className="text-base">{experience.company.name}</span>

      <ArrowUpRight
        size={16}
        className="invisible absolute right-6 top-6 group-hover:visible"
      />

      <div className="flex flex-col gap-4">
        {experience.positions.map((position) => (
          <div
            key={position.startDate}
            className="flex flex-col gap-4 text-secondary lg:flex-row lg:gap-8"
          >
            <span className="text-nowrap text-sm">
              {[position.endDate, position.startDate].join(' - ')}
            </span>

            <div className="flex flex-col gap-1">
              <span className="font-bold">{position.title}</span>
              <p className="text-sm">{position.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}
