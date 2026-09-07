import Image from "next/image";

import type { CaseStudy } from "@/lib/data";

function BenchmarkVisual() {
  return (
    <div className="benchmark-visual" role="img" aria-label="Benchmark comparison: Apple Health import improved from 26 minutes to 9.77 seconds">
      <div className="benchmark-visual__header">
        <span>same export / new shape</span>
        <span>documented test</span>
      </div>
      <div className="benchmark-visual__bars">
        <div className="benchmark-bar">
          <div className="benchmark-bar__label">
            <span>XML tree</span>
            <strong>26 min</strong>
          </div>
          <div className="benchmark-bar__track">
            <span className="benchmark-bar__fill benchmark-bar__fill--slow" />
          </div>
        </div>
        <div className="benchmark-bar">
          <div className="benchmark-bar__label">
            <span>mmap + shards</span>
            <strong>9.77 s</strong>
          </div>
          <div className="benchmark-bar__track">
            <span className="benchmark-bar__fill benchmark-bar__fill--fast" />
          </div>
        </div>
      </div>
      <div className="benchmark-visual__footer">
        <span>626 MB export</span>
        <span>1.35M records</span>
        <span>Parquet → DuckDB</span>
      </div>
    </div>
  );
}

function FitbackVisual() {
  return (
    <div className="fitback-visual" role="img" aria-label="Fitback flow: two photos and a retailer sizing chart become a fit recommendation">
      <div className="fitback-visual__inputs">
        <span className="visual-chip">photo 01</span>
        <span className="visual-chip">photo 02</span>
        <span className="visual-chip visual-chip--chart">size chart</span>
      </div>
      <div className="fitback-visual__connector" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="fitback-visual__engine">
        <span className="fitback-visual__engine-mark">17</span>
        <span>keypoints<br />+ OCR</span>
      </div>
      <span className="fitback-visual__arrow" aria-hidden="true">→</span>
      <div className="fitback-visual__result">
        <span className="fitback-visual__result-label">recommended</span>
        <strong>standard fit</strong>
        <span>retailer-aware</span>
      </div>
    </div>
  );
}

function SystemsVisual() {
  return (
    <div className="systems-visual" role="img" aria-label="A system traced from a dashboard through APIs and an IoT service to a documented boundary">
      <p className="systems-visual__eyebrow">from screen to device</p>
      <div className="systems-visual__grid">
        <div className="systems-node">
          <span>01</span>
          <strong>dashboard</strong>
          <small>CRUD + widgets</small>
        </div>
        <div className="systems-node">
          <span>02</span>
          <strong>REST API</strong>
          <small>auth + state</small>
        </div>
        <div className="systems-node">
          <span>03</span>
          <strong>IoT service</strong>
          <small>sensor data</small>
        </div>
        <div className="systems-node systems-node--accent">
          <span>04</span>
          <strong>boundary</strong>
          <small>docs + handoff</small>
        </div>
      </div>
      <span className="systems-visual__note">client details omitted / boundaries kept visible</span>
    </div>
  );
}

export default function CaseStudyVisual({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.visual === "benchmark") return <BenchmarkVisual />;
  if (caseStudy.visual === "fitback") return <FitbackVisual />;
  if (caseStudy.visual === "systems") return <SystemsVisual />;

  return (
    <div className={`case-study-visual case-study-visual--${caseStudy.visual}`}>
      {caseStudy.image ? (
        <Image
          src={caseStudy.image}
          alt={caseStudy.imageAlt ?? ""}
          fill
          sizes="(max-width: 720px) calc(100vw - 5rem), (max-width: 1100px) 42vw, 31rem"
        />
      ) : null}
      <p className="case-study-visual__caption">
        {caseStudy.visual === "provenance"
          ? "Same-looking request. Different lineage. Different outcome."
          : "A timestamp becomes a useful filename while the image stays local."}
      </p>
    </div>
  );
}
