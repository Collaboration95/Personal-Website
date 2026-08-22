import Image from "next/image";

import { siteContent } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero__grid">
        <div className="hero__media">
          <figure className="portrait-frame">
            <Image
              src={siteContent.hero.image}
              alt={siteContent.hero.imageAlt}
              width={siteContent.hero.image.width}
              height={siteContent.hero.image.height}
              priority
              sizes="(max-width: 720px) 72vw, (max-width: 1100px) 30vw, 22rem"
            />
            <figcaption className="portrait-frame__caption">Singapore / 2024</figcaption>
          </figure>
        </div>

        <div className="hero__copy">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1 id="hero-title">
            I like building the <em>useful</em> parts of software.
          </h1>
          <p className="hero__lede">{siteContent.hero.paragraph}</p>

          <div className="hero__actions" aria-label="Social links">
            {siteContent.socials.map((social, index) => (
              <a
                className={`action-link ${index === 0 ? "action-link--primary" : "action-link--quiet"}`}
                href={social.href}
                key={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="hero__utility">
            <a href="/FinalResume.pdf">Read the résumé</a>
            <span className="hero__utility-separator" aria-hidden="true">
              /
            </span>
            <span>{siteContent.location}</span>
          </p>
        </div>
      </div>

      <div className="hero__footer" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="hero__footer-line" />
        <span>01—08</span>
      </div>
    </section>
  );
}
