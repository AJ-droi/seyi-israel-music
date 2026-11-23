import { nav, services, site } from "@/content/site";

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h2 className="footer-h">Navigation</h2>
            <ul>{nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-h">What We Do</h2>
            <ul>{services.items.map((s) => <li key={s.title}><a href="/#services">{s.title}</a></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-h">Social</h2>
            {socials.length ? (
              <ul>{socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
            ) : (
              <p className="footer-muted">[Add social &amp; streaming links in content/site.ts]</p>
            )}
          </div>
          <div className="footer-address">
            <h2 className="footer-h">{site.name}</h2>
            <p>{site.address.join(", ")}</p>
            {site.email && <a className="footer-email" href={`mailto:${site.email}`}>{site.email}</a>}
          </div>
        </div>
        <p className="footer-word" aria-hidden="true">Seyi Israel</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. Registered in England and Wales.</span>
          <span className="footer-legal">
            <a href="/privacy">Privacy Notice</a>
            <a href="#">Back to top ↑</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
