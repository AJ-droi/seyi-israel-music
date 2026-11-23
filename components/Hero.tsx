import Photo from "./Photo";
import { hero } from "@/content/site";

export default function Hero() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <Photo file="hero.jpg" alt="Seyi Israel leading worship on stage" className="hero-bg" priority />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-top">
          <div className="hero-kicker">
            {hero.kicker.map((k) => (
              <span key={k}>{k}</span>
            ))}
            <small>{hero.kickerNote}</small>
          </div>
          <a href="#contact" className="hero-card" aria-label={hero.marquee}>
            <span className="hero-card-head">
              <span className="hero-card-dot" />
              <span className="hero-card-lines" aria-hidden="true"><i /><i /></span>
            </span>
            <span className="marquee" aria-hidden="true">
              <span className="marquee-track">
                {items.map((i) => (
                  <span key={i}>{hero.marquee}<b>✦</b></span>
                ))}
              </span>
            </span>
          </a>
        </div>
        <div className="hero-bottom">
          <p className="hero-lead">
            {hero.lead} <span>{hero.leadAccent}</span>
          </p>
          <h1 className="hero-word">
            <span className="sr-only">Seyi Israel Music — </span>
            {hero.word}
          </h1>
        </div>
      </div>
    </section>
  );
}
