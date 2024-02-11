const Hero = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="flex aspect-[2/1] w-screen flex-col justify-center">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="md:text-7xl text-3xl xs:text-4xl">
            Hello. I'm Jerry.
          </h1>
          <h1 className="md:text-7xl text-3xl text-purple-400 xs:text-4xl">
            A front-end developer
          </h1>
          <p className="md:max-w-[750px] md:text-xl text-p max-w-[330px] text-center xs:max-w-[400px]">
            I'm passionate about creating experiences that are easy to use,
            accessible, and that meet the user's needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
