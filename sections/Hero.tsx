import HeroModelCanvas from '@/components/canvas/HeroModel';

const Hero = () => {
  return (
    <div className="flex h-screen items-center" id="home">
      <div className="mt-36 flex aspect-[2/1] w-screen flex-col justify-center">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-3xl text-primary xs:text-4xl md:text-7xl">
            Hello. I&apos;m Jerry.
          </h1>
          <h1 className="text-3xl text-purple-400 xs:text-4xl md:text-7xl">
            A front-end developer
          </h1>
          <p className="text max-w-[330px] text-center text-sm font-light text-secondary xs:max-w-[400px] md:max-w-[750px] md:text-xl">
            I&apos;m passionate about creating experiences that are easy to use,
            accessible, and that meet the user&apos;s needs.
          </p>
        </div>
        <div className="mt-8 h-60">
          <HeroModelCanvas />
        </div>
      </div>
    </div>
  );
};
export default Hero;
