"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

import type { Theme } from "@/lib/types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  console.log(theme)
  const toggleTheme = () => {

    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
// "use client";

// import React, { createContext, useContext } from "react";

// import type { Theme } from "@/lib/types";

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void; // Still keeping the toggle function in case you want to add it later
// };

// const ThemeContext = createContext<ThemeContextType | null>(null);

// export default function ThemeContextProvider({
//   children,
// }: ThemeContextProviderProps) {
//   const theme: Theme = "light"; // Hardcoded to light
//   const toggleTheme = () => {
//     console.log("Theme is hardcoded to light mode. No toggling available.");
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (context === null) {
//     throw new Error("useTheme must be used within a ThemeContextProvider");
//   }

//   return context;
// }
