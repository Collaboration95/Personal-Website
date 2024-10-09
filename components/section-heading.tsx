import React, { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context";
interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  const { theme } = useTheme();
  return (
    <h2 
    
    className={clsx("text-3xl font-medium capitalize mb-8 text-center",
      {
        "text-gray-950": theme === "light",
        "text-white": theme === "dark",
      }
    )}
    >
      {children}
    </h2>
  );
}
