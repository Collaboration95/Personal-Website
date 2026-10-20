import Link from "next/link";
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href="/" aria-label="Guru Prasath — home">
          <span className="wordmark__mark" aria-hidden="true">
            g.
          </span>
          <span>
            guru<span className="wordmark__dot">.</span>
          </span>
        </Link>
        <nav className="site-header__nav" aria-label="Main navigation">
          <Link href="/#work">The eras</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/journal">Journal</Link>
        </nav>
        <a className="site-header__hello" href="/#contact">
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
