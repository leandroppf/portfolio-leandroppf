import {
  ArrowUpRightIcon,
  GithubLogoIcon,
} from '@phosphor-icons/react/dist/ssr'
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
        'flex w-full flex-col gap-4 overflow-hidden rounded-md border border-sky-900/10 bg-sky-900/10 shadow-sm shadow-sky-900/10',
        'dark:border-sky-900/50 dark:shadow-sky-900/50',
        'md:flex-row',
      )}
    >
      <Image
        src={project.imageURL}
        alt={project.title}
        width={300}
        height={208}
        className={cn(
          'h-52 w-75 object-fill',
          'md:rounded-l-md md:object-cover',
        )}
        loading="lazy"
      />

      <div className={cn('text-secondary flex flex-col gap-1 p-2')}>
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
            <GithubLogoIcon
              size={32}
              alt="Github Link"
              className="hover:bg-foreground rounded-sm p-1 active:opacity-90"
            />
          </Link>
          <Link
            href={project.liveURL}
            aria-label={[project.title, 'Live URL'].join(' ')}
            target="_blank"
            className="group text-secondary inline-flex h-10 items-center gap-2 text-sm underline underline-offset-2"
          >
            View live
            <ArrowUpRightIcon
              size={14}
              className="text-primary invisible -mt-2 transition-all duration-300 group-hover:visible group-hover:-mt-4 group-hover:ml-2"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
