"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Clock from "./Clock";
import { nav, site } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Only the home page has a dark hero behind the nav; other pages get the solid nav straight away.
  const pathname = usePathname();
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav${solid ? " nav-solid" : ""}${open ? " nav-open" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label={`${site.shortName} home`} onClick={() => setOpen(false)}>
          <Logo light={!solid && !open} />
        </a>
        <nav className="nav-links" aria-label="Main">
          {nav.slice(0, 2).map((l) => (
            <a key={l.href} href={l.href} className="nav-link"><span data-text={l.label}>{l.label}</span></a>
          ))}
          <Clock label={site.location.label} timeZone={site.location.timeZone} />
          {nav.slice(2).map((l) => (
            <a key={l.href} href={l.href} className="nav-link"><span data-text={l.label}>{l.label}</span></a>
          ))}
        </nav>
        <a href="/#contact" className="nav-cta">
          <span>Work With Us</span>
          <span className="nav-cta-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
          </span>
        </a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="bar" /><span className="bar" />
        </button>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {nav.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="/#contact" className="btn btn-accent" onClick={() => setOpen(false)}>Work With Us</a>
        <Clock label={site.location.label} timeZone={site.location.timeZone} />
      </div>
    </header>
  );
}
