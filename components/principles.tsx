import { siteContent } from "@/lib/data";

export default function Principles() {
  return (
    <section className="principles" id="approach" aria-labelledby="approach-title" tabIndex={-1}>
      <div className="principles__intro">
        <p className="eyebrow">A working method</p>
        <h2 id="approach-title">The question behind the <em>projects.</em></h2>
      </div>

      <ol className="principles__list">
        {siteContent.principles.map((principle, index) => (
          <li className="principle" key={principle.label}>
            <span className="principle__number" aria-hidden="true">
              0{index + 1}
            </span>
            <div className="principle__copy">
              <h3>{principle.label}</h3>
              <p>{principle.body}</p>
              <a href={principle.href}>
                {principle.related}
                <span aria-hidden="true"> ↘</span>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
