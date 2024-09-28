import Projects from "@/components/projects";
import About from "@/components/about";
import SectionDivider from "@/components/section-divider";
import Intro from "@/components/intro";
export default function Home() {
  return <main className="flex flex-col items-center px-4">
     <Intro/>
     <SectionDivider/>
     <About/>
     <Projects/>
  </main>;
}
