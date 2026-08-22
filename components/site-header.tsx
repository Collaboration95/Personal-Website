import { siteContent } from "@/lib/data";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#top" aria-label="Guru Prasath — back to start">
          <span className="wordmark__mark" aria-hidden="true">
            GP
          </span>
          <span>{siteContent.shortName}</span>
        </a>

        <nav className="site-header__nav" aria-label="Top-level navigation">
          <a href="#work">Work</a>
          <a href="#work-archive">Archive</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="site-header__resume" href="/FinalResume.pdf">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
