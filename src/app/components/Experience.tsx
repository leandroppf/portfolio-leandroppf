import type { Experience } from '@/models/experience'
import ExperienceCard from './ExperienceCard'

export default async function Experience() {
  const data = await fetch('http://localhost:3000/api/experience', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const { experiences } = (await data.json()) as { experiences: Experience[] }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company.name} experience={experience} />
      ))}
    </div>
  )
}
