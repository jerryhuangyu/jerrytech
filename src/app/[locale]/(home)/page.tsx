import FloatBtn from '@/src/components/FloatBtn';
import {
  Skillset,
  Projects,
  Hero,
  Experience,
  About,
  Footer,
  Navbar
} from '@/src/sections';

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
      <FloatBtn />
    </main>
  );
}
