"use client";

import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";

import { dialChapters } from "@/lib/data";

export default function EdgeDial() {
  const [activeId, setActiveId] = useState<string>(dialChapters[0].id);

  useEffect(() => {
    const targets = dialChapters
      .map(({ id }) => document.getElementById(id))
      .filter((target): target is HTMLElement => Boolean(target));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-38% 0px -50% 0px",
        threshold: [0, 0.2, 0.5, 0.8, 1],
      },
    );

    targets.forEach((target) => observer.observe(target));

    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      const target = targets.find((candidate) => candidate.id === hash);
      if (!target) return;

      setActiveId(hash);
      const navigationEntry = window.performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      if (navigationEntry?.type !== "reload") {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);
    onHashChange();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
    };
  }, []);

  function navigateTo(
    id: string,
    event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>,
    keyboardActivation = false,
  ) {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    setActiveId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", `#${id}`);

    if (keyboardActivation || event.detail === 0) {
      window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  }

  return (
    <nav className="edge-dial" aria-label="Page chapters">
      <span className="sr-only">Jump to a chapter</span>
      <ol className="edge-dial__list">
        {dialChapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              className="edge-dial__link"
              href={`#${chapter.id}`}
              aria-current={activeId === chapter.id ? "true" : undefined}
              aria-label={`Jump to ${chapter.label}`}
              onClick={(event) => navigateTo(chapter.id, event, event.detail === 0)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  navigateTo(chapter.id, event, true);
                }
              }}
            >
              <span className="edge-dial__label">{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
