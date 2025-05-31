interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div id="position-skills" className="mt-2 inline-flex flex-wrap gap-2">
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
