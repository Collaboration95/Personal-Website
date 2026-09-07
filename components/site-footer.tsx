import { siteContent } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="site-footer__top">
        <div>
          <p className="eyebrow">Keep in touch</p>
        </div>
        <div>
          <h2 id="contact-title">
            Have a problem worth making <em>smaller?</em>
          </h2>
          <p className="site-footer__copy">{siteContent.contact.body}</p>
          <a className="contact-link" href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>{siteContent.name} / {siteContent.location}</p>
        <nav className="site-footer__links" aria-label="Social links">
          {siteContent.socials.map((social) => (
            <a href={social.href} key={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
          <a
            href={siteContent.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteContent.resumeLabel}
          </a>
        </nav>
        <p>© {new Date().getFullYear()} — built with care</p>
      </div>
    </footer>
  );
}
