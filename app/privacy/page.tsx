import type { Metadata } from "next";
import { privacy } from "@/content/privacy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${privacy.title} | ${site.name}`,
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

// Turns "{email}" into the company's email (or a placeholder until it's set in content/site.ts),
// and makes the email and the ICO complaints address clickable.
function Rich({ text }: { text: string }) {
  const email = site.email || "[add email address]";
  const parts = text.replace(/\{email\}/g, email).split(/(\S+@\S+\.[a-z]+|ico\.org\.uk\/make-a-complaint)/gi);
  return (
    <>
      {parts.map((p, i) => {
        if (site.email && p === site.email) return <a key={i} href={`mailto:${p}`}>{p}</a>;
        if (p.toLowerCase() === "ico.org.uk/make-a-complaint")
          return <a key={i} href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">{p}</a>;
        return p;
      })}
    </>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function PrivacyPage() {
  return (
    <article className="legal">
      <header className="legal-head">
        <div className="container">
          <p className="legal-kicker">Legal</p>
          <h1>{privacy.title}</h1>
          <p className="legal-updated">Last updated: {privacy.lastUpdated}</p>
        </div>
      </header>
      <div className="container legal-grid">
        <nav className="legal-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {privacy.sections.map((s) => (
              <li key={s.heading}><a href={`#${slug(s.heading)}`}>{s.heading}</a></li>
            ))}
          </ol>
        </nav>
        <div className="legal-body">
          <p className="p-lg">{privacy.intro}</p>
          {privacy.sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)}>
              <h2>{s.heading}</h2>
              {s.blocks.map((b, i) =>
                Array.isArray(b) ? (
                  <ul key={i}>{b.map((li) => <li key={li}><Rich text={li} /></li>)}</ul>
                ) : (
                  <p key={i}><Rich text={b} /></p>
                )
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
