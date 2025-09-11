import HeroAsset from "@/src/components/HeroAssetDynamic"
import { useTranslations } from "next-intl"

const Hero = () => {
  const t = useTranslations("Index.hero")
  return (
    <div className="flex h-screen items-center" id="home">
      <div className="mt-36 flex aspect-[2/1] w-screen flex-col justify-center">
        <div className="mx-auto flex flex-col items-center md:gap-1 z-20">
          <h1 className="text-4xl text-primary dark:text-primary-dark xs:text-5xl md:text-8xl">{t("title1")}</h1>
          <h1 className="text-3xl text-purple-400 xs:text-4xl md:text-7xl">{t("title2")}</h1>
          <p className="text max-w-[330px] text-center text-sm font-light text-secondary dark:text-secondary-dark xs:max-w-[400px] md:max-w-[750px] md:text-xl">
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
