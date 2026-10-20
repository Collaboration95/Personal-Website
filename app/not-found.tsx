import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="collection-main page-width"
      >
        <header className="collection-header">
          <p className="eyebrow">404 / a loose end</p>
          <h1>
            This page
            <br />
            <em>wandered off.</em>
          </h1>
          <p>The project or note you’re looking for isn’t here.</p>
          <Link className="text-link" href="/journal">
            Find a note ↗
          </Link>
        </header>
      </main>
      <SiteFooter />
    </>
  );
}
