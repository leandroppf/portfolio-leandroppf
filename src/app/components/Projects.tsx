import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import ProjectData from '@/data/project.json'
import type { Project } from '@/models/project'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = ProjectData as Project[]

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        {projects.length &&
          projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
      <Link
        href="https://github.com/leandroppf?tab=repositories"
        aria-label="Leandro Pedroso Github projects link"
        target="_blank"
        className="group inline-flex h-10 items-center gap-2 text-sm text-secondary underline underline-offset-2"
      >
        View more projects
        <ArrowUpRight
          size={14}
          className="invisible -mt-2 text-primary transition-all duration-300 group-hover:visible group-hover:-mt-4 group-hover:ml-2"
        />
      </Link>
    </div>
  )
}
