import { useTranslations } from "next-intl"
import HeroAsset from "@/src/components/HeroAsset"
import TypingText from "@/src/components/TypingText"

const Hero = () => {
  const t = useTranslations("Index.hero")

  return (
    <div className="flex h-screen items-center" id="home">
      <div className="mt-36 flex aspect-2/1 w-screen flex-col justify-center">
        <div className="mx-auto flex flex-col items-start md:gap-1 z-20 lg:gap-3">
          <h1 className="text-4xl text-primary font-extrabold dark:text-primary-dark xs:text-5xl md:text-8xl">
            {t("title1")}
          </h1>
          <p className="text-white text-xl font-bold text-start max-w-2xl mt-3 xs:text-2xl md:text-4xl">
            Who loves&nbsp;
            <TypingText
              as="span"
              text={["Thinking...", "Tabbing...", "Shipping..."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorClassName="h-8 bg-black dark:bg-white"
              textColors={["#3b82f6DD", "#8b5cf6DD", "#06b6d4DD"]}
              variableSpeed={{ min: 50, max: 120 }}
            />
          </p>
          <p className="text max-w-[300px] text-start text-xs font-light text-secondary dark:text-secondary-dark xs:max-w-[350px] md:max-w-[650px] md:text-lg">
            {t("intro")}
          </p>
        </div>
        <div className="-mt-8 h-80 z-10">
          <HeroAsset />
        </div>
      </div>
    </div>
  )
}
export default Hero
