import {
  Skillset,
  Projects,
  Hero,
  Experience,
  About,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <Hero />
      <About />
      <Skillset />
      <Experience />
      <Projects />
    </main>
  );
}
