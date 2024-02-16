import {
  Skillset,
  Projects,
  Hero,
  Experience,
  About,
  Footer,
} from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <Hero />
      <About />
      <Skillset />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
