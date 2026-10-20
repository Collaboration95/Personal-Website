import EdgeDial from "@/components/edge-dial";
import Hero from "@/components/hero";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Timeline from "@/components/timeline";
export default function Home() {
  return (
    <div className="home-page">
      <SiteHeader />
      <EdgeDial />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Timeline />
      </main>
      <SiteFooter />
    </div>
  );
}
