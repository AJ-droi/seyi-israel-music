import Label from "./Label";
import Photo from "./Photo";
import { Arrow } from "./About";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section className="section section-dark" id="services">
      <div className="container">
        <div className="intro-grid">
          <Label text={services.label} />
          <div className="intro-row">
            <h2 className="h-lead reveal">{services.title}</h2>
            <a href="#contact" className="btn btn-light">Work With Us <Arrow /></a>
          </div>
        </div>
        <ol className="service-list">
          {services.items.map((s, i) => (
            <li key={s.title} className="service reveal">
              <div className="service-head">
                <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
              </div>
              <div className="service-body">
                {"intro" in s && s.intro && <p className="service-intro">{s.intro}</p>}
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tags tags-dark" aria-label="Focus">
                  {s.tags.map((t) => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              </div>
              <Photo file={s.image} alt={s.title} className="service-photo" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
