"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";

export default function ThemeToggleComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-container ${theme}`}>
      <h1 className="theme-heading">Current Theme: {theme}</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <style jsx>{`
        .theme-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          transition: background-color 0.3s, color 0.3s;
        }

        .theme-container.light {
          background-color: #fff;
          color: #000;
        }

        .theme-container.dark {
          background-color: #333;
          color: #fff;
        }

        .theme-heading {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .theme-toggle-button {
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .theme-toggle-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
