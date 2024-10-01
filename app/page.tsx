import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import SectionDivider from "@/components/section-divider";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
// import ThemeToggleComponent from "@/components/test-theme";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/* <ThemeToggleComponent/>  */}
      {/* // component for testing */}
      <Footer />
    </main>
  );
}
