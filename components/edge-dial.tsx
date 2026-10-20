"use client";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { eraNavigation } from "@/lib/eras";
import Companion from "@/components/companion";

export default function EdgeDial() {
  const [activeId, setActiveId] = useState<string>();
  const active =
    eraNavigation.find((item) => item.id === activeId) ?? eraNavigation[0];
  useEffect(() => {
    const targets = eraNavigation.flatMap(({ id }) => {
      const target = document.getElementById(id);
      return target ? [target] : [];
    });
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.35, 300);
      let current = targets[0];
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= readingLine) current = target;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = targets[targets.length - 1];
      }
      if (current) setActiveId(current.id);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    observer?.observe(document.body);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      observer?.disconnect();
    };
  }, []);
  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    if (event.detail === 0) target.focus({ preventScroll: true });
    setActiveId(id);
  }
  return (
    <nav
      className="edge-dial"
      aria-label="Explore the eras"
      data-era={active.theme}
    >
      <div className="edge-dial__companion">
        <Companion key={active.theme} theme={active.theme} size={64} compact />
      </div>
      <ol className="edge-dial__list">
        {eraNavigation.map(({ id, label }, index) => (
          <li key={id}>
            <a
              className="edge-dial__link"
              href={`#${id}`}
              aria-current={activeId === id ? "location" : undefined}
              aria-label={`Jump to ${label}`}
              onClick={(event) => navigate(event, id)}
            >
              <span className="edge-dial__label">{label}</span>
              <span className="edge-dial__number" aria-hidden="true">
                {index === 0 ? "↟" : index === 5 ? "↗" : `0${index}`}
              </span>
            </a>
          </li>
        ))}
      </ol>
      <span className="edge-dial__caption" aria-hidden="true">
        {active.label}
      </span>
    </nav>
  );
}
