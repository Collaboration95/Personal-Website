import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export function useSectionInView({ sectionName }: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Debugging to see when sections come into view
    console.log("About section in view:", inView);

    // Update active section when in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return { ref };
}
