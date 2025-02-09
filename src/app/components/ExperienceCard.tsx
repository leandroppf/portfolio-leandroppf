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
      className={[
        'group relative w-full rounded-md border border-sky-900/10 bg-sky-900/10 p-2 shadow shadow-sky-900/10 transition duration-300 hover:border-sky-900/20 hover:shadow-sky-900/20 active:opacity-90',
        'dark:border-sky-900/50 dark:shadow-sky-900/50 dark:hover:border-sky-900/80 dark:hover:shadow-sky-900/80',
        'lg:border-none lg:bg-inherit lg:p-6 lg:shadow-none lg:hover:bg-sky-900/10 lg:hover:shadow',
      ].join(' ')}
    >
      <span className="text-base">{experience.company.name}</span>

      <ArrowUpRight
        size={16}
        className="absolute right-2 top-2 transition-all duration-300 group-hover:right-1 group-hover:top-1 lg:invisible lg:right-6 lg:top-6 lg:group-hover:visible lg:group-hover:right-4 lg:group-hover:top-4"
      />

      <div className="flex flex-col gap-4">
        {experience.positions.map((position) => (
          <div
            key={position.startDate}
            className="flex flex-col gap-4 text-secondary lg:flex-row lg:gap-8"
          >
            <span className="text-nowrap text-sm">
              {[position.startDate, position.endDate].join(' - ')}
            </span>

            <div className="flex flex-col gap-1">
              <span className="font-bold">{position.title}</span>
              <p className="text-sm">{position.description}</p>
              <div
                id="position-skills"
                className="mt-2 inline-flex flex-wrap gap-2"
              >
                {position.skills.map((skill) => (
                  <div
                    key={[experience.company.name, position.title, skill].join(
                      '-',
                    )}
                    className="rounded-full bg-foreground px-3 py-1 text-xs text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}
