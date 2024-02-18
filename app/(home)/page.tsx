import {
  Skillset,
  Projects,
  Hero,
  Experience,
  About,
  Footer,
  Navbar,
} from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-around">
      <Navbar />
      <Hero />
      <About />
      <Skillset />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
