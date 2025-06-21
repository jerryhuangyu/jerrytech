import SkillBadge from "@/src/components/SkillBadge"

type ExperienceDetailProps = {
  timestamp: string
  title: string
  detail: string
  skills: string[]
}

const ExperienceDetail = ({ timestamp, title, detail, skills }: ExperienceDetailProps) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h3 className="text mr-6 min-w-40 text-sm text-secondary dark:text-secondary-dark">{timestamp}</h3>
      <div className="flex flex-col gap-2">
        <h3 className="text text-primary dark:text-primary-dark xl:text-[17px]">{title}</h3>
        <p className="text font-light text-secondary dark:text-secondary-dark brightness-95 xl:text-[15px]">{detail}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map(skill => (
            <SkillBadge key={skill} skill={skill} highlight animate={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetail
