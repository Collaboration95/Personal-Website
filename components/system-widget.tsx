"use client";

import { useEffect, useState } from "react";
const steps = [
  {
    name: "Dashboard",
    mark: "01",
    detail:
      "A useful screen starts with state someone can understand: robot tasks, widgets, and the next action.",
  },
  {
    name: "API + auth",
    mark: "02",
    detail:
      "CRUD endpoints and JWT authentication connect the interface to the services behind it.",
  },
  {
    name: "Device",
    mark: "03",
    detail:
      "Python IoT services bring sensor information back into the software’s view of the world.",
  },
  {
    name: "Handoff",
    mark: "04",
    detail:
      "Documenting the boundaries makes the next change easier to trace through the system.",
  },
];

export default function SystemWidget() {
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);
  return (
    <div className="system-widget">
      <div className="instrument-label">
        <span>Trace a system</span>
        <span>R&D / notebook</span>
      </div>
      <div
        className="system-widget__nodes"
        aria-label="Explore system boundaries"
        hidden={!enhanced}
      >
        {steps.map((step, i) => (
          <button
            type="button"
            key={step.name}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <span>{step.mark}</span>
            <strong>{step.name}</strong>
          </button>
        ))}
      </div>
      <p
        className="system-widget__detail"
        aria-live="polite"
        aria-atomic="true"
      >
        {steps[active].detail}
      </p>
      <p className="widget-caption">
        Illustrative boundaries from the work. No proprietary screens or client
        data.
      </p>
      <noscript>
        <ol>
          {steps.slice(1).map((step) => (
            <li className="widget-caption" key={step.name}>
              <strong>{step.name}: </strong>
              {step.detail}
            </li>
          ))}
        </ol>
      </noscript>
    </div>
  );
}
