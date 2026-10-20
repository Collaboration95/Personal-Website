import Link from "next/link";
import { siteContent } from "@/lib/data";
import PortraitReel from "@/components/portrait-reel";
export default function Hero() {
  const photos = [
    siteContent.hero.images[1],
    ...siteContent.hero.images.filter((_, index) => index !== 1),
  ];
  return (
    <section
      className="hero page-width"
      id="top"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className="hero__topline">
        <span>Guru Prasath · a personal collection</span>
        <span>
          Singapore <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> Software engineer. Curious by
            default.
          </p>
          <h1 id="hero-title">
            I build things.
            <br />
            Then I make
            <br />
            them <em>better.</em>
          </h1>
          <p className="hero__lede">
            I’m Guru. I make useful software—from computer vision and connected
            devices to local AI—and write about the decisions along the way.
          </p>
          <div className="hero__actions" aria-label="Social links">
            {siteContent.socials.map((social) => (
              <a
                className="action-link"
                href={social.href}
                key={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="hero__education">
            SUTD Computer Science &amp; Design graduate.
            <br />
            Now studying software engineering at NUS.
          </p>
        </div>
        <div className="hero__media">
          <span className="hero__orbit" aria-hidden="true" />
          <PortraitReel images={photos} />
          <span className="hero__keycap" aria-hidden="true">
            <span>⌘</span>
            <small>MAKE</small>
          </span>
          <span className="hero__sticker">
            a work
            <br />
            <em>in progress.</em>
          </span>
        </div>
      </div>
      <div className="hero__footer">
        <a href="#era-lab">
          Start in the present. Scroll back a little.{" "}
          <span aria-hidden="true">↓</span>
        </a>
        <Link href="/journal">
          Notes from the work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
