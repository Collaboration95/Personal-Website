import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/lib/data";
export default function SiteFooter() {
  return (
    <footer
      className="site-footer page-width"
      id="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="site-footer__top">
        <div className="site-footer__photo">
          <Image
            src={siteContent.hero.images[6].image}
            alt={siteContent.hero.images[6].alt}
            sizes="220px"
          />
          <span>Sometimes, away from the keyboard.</span>
        </div>
        <div>
          <p className="eyebrow">That’s the story so far.</p>
          <h2 id="contact-title">
            What are you
            <br />
            <em>working on?</em>
          </h2>
          <p className="site-footer__copy">
            An interesting problem, a small idea, or something you’re figuring
            out. I’d like to hear about it.
          </p>
          <a
            className="contact-link"
            href={`mailto:${siteContent.contact.email}`}
          >
            {siteContent.contact.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>{siteContent.name} · Singapore</p>
        <nav aria-label="Footer links">
          {siteContent.socials.map((social) => (
            <a
              href={social.href}
              key={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
          <Link href="/journal">Journal</Link>
          <a href="/feed.xml">RSS</a>
        </nav>
        <p>Still making things. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
