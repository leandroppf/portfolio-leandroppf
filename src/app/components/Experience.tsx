import ExperienceData from '@/data/experience.json'
import type { Experience } from '@/models/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const experiences = ExperienceData as Experience[]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 id="experience">Experience</h3>
      {experiences.length &&
        experiences.map((experience) => (
          <ExperienceCard
            key={experience.company.name}
            experience={experience}
          />
        ))}
    </div>
  )
}
