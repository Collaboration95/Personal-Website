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
            I build software that makes complex systems easier to <em>trust.</em>
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

          <div className="hero__education" aria-label="Education">
            {siteContent.hero.education.map((item) => (
              <p className="hero__education-item" key={item.institution}>
                <span className="hero__education-institution">{item.institution}</span>
                <span>{item.qualification}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__footer">
        <span>Scroll to explore</span>
        <span className="hero__footer-line" />
        <span>07 chapters</span>
      </div>
    </section>
  );
}
