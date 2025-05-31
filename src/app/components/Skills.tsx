interface SkillsProps {
  skills: string[]
}

import { useId } from 'react';

export default function Skills({ skills }: SkillsProps) {
  const uniqueId = useId();
  return (
    <div id={`position-skills-${uniqueId}`} className="mt-2 inline-flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="rounded-full bg-foreground px-3 py-1 text-xs text-primary"
        >
          {skill}
        </div>
      ))}
    </div>
  )
}
