import { ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import HeroAsset from "@/src/components/HeroAsset"
import HeroMatrixBackground from "@/src/components/HeroMatrixBackground"
import TypingText from "@/src/components/TypingText"

const HERO_TYPING_WORDS = [" Thinking...", " Tabbing...", " Shipping..."]
const HERO_TYPING_COLORS = ["#3b82f6DD", "#8b5cf6DD", "#06b6d4DD"]

type HeroTechTagsProps = {
  techTags: ReadonlyArray<string>
}

type HeroStatsProps = {
  stats: ReadonlyArray<string>
}

type HeroCopyProps = {
  intro: string
  techTags: ReadonlyArray<string>
  title: string
}

const HeroTypingLine = () => {
  return (
    <div className="mt-4 flex h-8 items-center">
      <span className="font-mono text-xs tracking-[0.2em] text-primary/50 dark:text-primary-dark/50 md:text-sm">
        {"< "}
      </span>
      <span className="font-mono text-xs font-medium tracking-[0.15em] text-primary/70 dark:text-primary-dark/70 md:text-sm">
        Who loves{" "}
      </span>
      <TypingText
        as="span"
        text={HERO_TYPING_WORDS}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorClassName="max-h-3.5 h-3.5 relative -top-0.5 bg-black dark:bg-white/70"
        className="font-mono text-xs font-medium tracking-[0.15em] md:text-sm"
        textColors={HERO_TYPING_COLORS}
        variableSpeed={{ min: 50, max: 120 }}
      />
      <span className="font-mono text-xs tracking-[0.2em] text-primary/50 dark:text-primary-dark/50 md:text-sm">
        {"/>"}
      </span>
    </div>
  )
}

const HeroTechTags = ({ techTags }: HeroTechTagsProps) => {
  return (
    <div className="mt-6 flex max-w-xl flex-wrap gap-2">
      {techTags.map(tech => (
        <span
          key={tech}
          className="rounded-none border border-primary/25 px-3 py-1 font-mono text-[11px] font-medium tracking-[0.18em] text-primary/75 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-primary-dark/20 dark:text-primary-dark/70 dark:hover:border-primary-dark dark:hover:bg-primary-dark dark:hover:text-stone-950"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

const HeroCopy = ({ intro, techTags, title }: HeroCopyProps) => {
  return (
    <div className="flex max-w-3xl flex-col items-start md:gap-1 lg:gap-3">
      <h1 className="text-4xl font-extrabold text-primary dark:text-primary-dark xs:text-5xl md:text-8xl">{title}</h1>
      <HeroTypingLine />
      <p className="text max-w-75 mt-2 text-start text-xs font-light text-secondary dark:text-secondary-dark xs:max-w-87.5 md:max-w-162.5 md:text-lg">
        {intro}
      </p>
      <HeroTechTags techTags={techTags} />
    </div>
  )
}

const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <div className="absolute bottom-10 right-6 z-10 hidden md:block md:right-24">
      <div className="text-right font-mono text-xs leading-relaxed font-medium text-primary/60 dark:text-primary-dark/60">
        {stats.map(stat => (
          <p key={stat}>{stat}</p>
        ))}
      </div>
    </div>
  )
}

const HeroScrollIndicator = () => {
  return (
    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
      <ChevronDown className="h-5 w-5 animate-bounce text-primary/60 dark:text-primary-dark/60" />
    </div>
  )
}

const Hero = () => {
  const t = useTranslations("Index.hero")
  const techTags = t.raw("techTags") as string[]
  const stats = t.raw("stats") as string[]

  return (
    <section className="relative flex min-h-screen w-full self-stretch items-center overflow-hidden" id="home">
      <HeroMatrixBackground density={1} />
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-white/30 via-transparent to-white/70 dark:from-stone-950/20 dark:via-transparent dark:to-stone-950/55" />
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto flex w-full max-w-5xl flex-col">
          <HeroCopy title={t("title1")} intro={t("intro")} techTags={techTags} />
        </div>
        <div className="relative -z-10 -mt-20 h-64 md:-mt-20 md:h-80">
          <HeroAsset />
        </div>
      </div>
      <HeroStats stats={stats} />
      <HeroScrollIndicator />
    </section>
  )
}
export default Hero
