"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { DependancyGraph } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { theme } = useTheme();
  const { ref } = useSectionInView({ sectionName: "Skills" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = (key: string) => {
    setHoveredSkill(key);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg !text-gray-800">
        {Object.entries(DependancyGraph).map(([key, value], index) => {
          // Split dependencies into an array for easier matching
          const dependencies = value ? value.split(", ") : [];

          return (
            <motion.li
              className={clsx(
                "bg-white shadow-lg borderBlack rounded-xl px-5 py-3 dark:bg-white/10 !dark:text-white/80 transition-colors delay-80",
                {
                  // Apply hover effect if skill is hovered or it's a dependency of the hovered skill
                  "hover:bg-black hover:text-white": theme === "light",
                  "!bg-black text-white":
                    hoveredSkill === key || dependencies.includes(hoveredSkill),
                }
              )}
              key={index}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              data-dependencies={value || "None"}
            >
              {key}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
