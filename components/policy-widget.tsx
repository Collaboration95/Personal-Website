"use client";

import { useEffect, useState } from "react";

const paths = {
  support: {
    source: "Support request",
    result: "CRM case",
    verdict: "Allowed",
    explanation: "The source is inside the permitted support-data boundary.",
    allowed: true,
  },
  payment: {
    source: "Payment-failure data",
    result: "CRM case",
    verdict: "Denied",
    explanation:
      "The same destination, but a different data lineage. Stop before the tool runs.",
    allowed: false,
  },
};

export default function PolicyWidget() {
  const [selection, setSelection] = useState<keyof typeof paths>("support");
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);
  const path = paths[selection];
  return (
    <div className="policy-widget">
      <div className="instrument-label">
        <span>MandateFlow / policy sketch</span>
        <span aria-hidden="true">● ● ●</span>
      </div>
      <div
        className="policy-widget__controls"
        aria-label="Choose an illustrative data route"
        hidden={!enhanced}
      >
        <button
          type="button"
          aria-pressed={selection === "support"}
          onClick={() => setSelection("support")}
        >
          Support request
        </button>
        <button
          type="button"
          aria-pressed={selection === "payment"}
          onClick={() => setSelection("payment")}
        >
          Payment data
        </button>
      </div>
      <div className="policy-widget__route" aria-hidden="true">
        <span>{path.source}</span>
        <i>→</i>
        <span className="policy-widget__gate">M</span>
        <i>→</i>
        <span>{path.result}</span>
      </div>
      <div
        className="policy-widget__result"
        data-allowed={path.allowed}
        aria-live="polite"
        aria-atomic="true"
      >
        <strong>
          {path.allowed ? "✓" : "×"} {path.verdict}
        </strong>
        <p>{path.explanation}</p>
      </div>
      <p className="widget-caption">
        An illustrative route through the policy—not a live request.
      </p>
      <noscript>
        <p className="widget-caption">
          The support-derived CRM request is allowed. A payment-derived request
          to the same destination is denied because its data lineage crosses the
          policy boundary.
        </p>
      </noscript>
    </div>
  );
}
