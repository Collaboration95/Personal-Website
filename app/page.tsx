import EdgeDial from "@/components/edge-dial";
import Hero from "@/components/hero";
import Principles from "@/components/principles";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <EdgeDial />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Principles />
        <Timeline />
      </main>
      <SiteFooter />
    </>
  );
}
