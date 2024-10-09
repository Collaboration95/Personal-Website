"use client";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import SectionDivider from "@/components/section-divider";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
// import ThemeToggleComponent from "@/components/test-theme";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context";




export default function Home() {
  const { theme } = useTheme();
  console.log("theme at page is ", theme);
  return (
    <main   
  className="flex flex-col items-center px-4"
    
    >
         <div
        className={clsx(
          "absolute top-0 left-0 h-270rem] w-full -z-20 rounded-lg", // Positioned behind everything
          {
            "bg-gray-900": theme === "dark", // Dark background for dark mode
            "bg-white": theme === "light", // Light background for light mode
          }
        )}
      ></div>
      
      <div 
        className={clsx(
          "absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]",
          {
            "text-gray-950 bg-[#946263]": theme === "dark",
            "bg-[#fbe2e3] text-white": theme === "light",
          }
        )}
      ></div>
      
      <div 
        className={clsx(
          "absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]",
          {
            "text-gray-950 bg-[#676394]": theme === "dark",
            "bg-[#dbd7fb] text-white": theme === "light",
          }
        )}
      ></div>
      {/* <div 
      className={clsx(" absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] ",
      {
        " text-gray-950 bg-[#946263]": theme == "dark",
        "bg-[#fbe2e3] text-white": theme == "light"
      }
      )}
        ></div>
      <div className={clsx("bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:",
      {
        " text-gray-950 bg-[#676394]": theme == "dark",
        "bg-[#dbd7fb] text-white": theme == "light"
      }        
      )}></div> */}
        
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
// dark:bg-gray-950 dark:text-gray-300