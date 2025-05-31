import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@/models/project'
import { cn } from '@/utils/cn'
import Skills from './Skills'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 overflow-hidden rounded-md border border-sky-900/10 bg-sky-900/10 shadow shadow-sky-900/10',
        'dark:border-sky-900/50 dark:shadow-sky-900/50',
        'md:flex-row',
      )}
    >
      <Image
        src={project.imageURL}
        alt={project.title}
        width={300}
        height={200}
        className={cn(
          'h-52 w-auto object-fill',
          'md:rounded-l-md md:object-cover',
        )}
        loading="lazy"
      />

      <div className={cn('flex flex-col gap-1 p-2 text-secondary')}>
        <span className="font-bold">{project.title}</span>
        <p
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <Skills skills={project.technologies} />

        <div className="mt-auto flex flex-row items-center gap-4">
          <Link
            href={project.githubURL}
            aria-label={[project.title, 'Github URL'].join(' ')}
            target="_blank"
          >
            <GithubLogo
              size={32}
              alt="Github Link"
              className="rounded p-1 hover:bg-foreground active:opacity-90"
            />
          </Link>
          <Link
            href={project.liveURL}
            aria-label={[project.title, 'Live URL'].join(' ')}
            target="_blank"
            className="group inline-flex h-10 items-center gap-2 text-sm text-secondary underline underline-offset-2"
          >
            View live
            <ArrowUpRight
              size={14}
              className="invisible -mt-2 text-primary transition-all duration-300 group-hover:visible group-hover:-mt-4 group-hover:ml-2"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
