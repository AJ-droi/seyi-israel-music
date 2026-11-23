import Label from "./Label";
import Photo from "./Photo";
import { about } from "@/content/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="intro-grid">
          <Label text={about.label} />
          <h2 className="h-lead reveal">{about.lead}</h2>
        </div>
        <div className="about-grid">
          <figure className="about-photo reveal">
            <Photo file="seyi-israel.jpg" alt="Portrait of Seyi Israel" />
            <figcaption>
              <strong>{about.founder.name}</strong>
              <span>{about.founder.role}</span>
            </figcaption>
          </figure>
          <div className="about-copy reveal">
            <p className="p-lg">{about.body}</p>
            <p>{about.platform}</p>
            <ul className="tags" aria-label="Areas of work">
              {about.tags.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
            <a href="#services" className="btn btn-dark">What We Do <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  );
}
