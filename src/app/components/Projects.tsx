import ProjectData from '@/data/project.json'
import type { Project } from '@/models/project'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = ProjectData as Project[]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      {projects.length &&
        projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </div>
  )
}
