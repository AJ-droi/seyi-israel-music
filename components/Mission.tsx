import Label from "./Label";
import { mission } from "@/content/site";

export default function Mission() {
  return (
    <section className="section" id="mission">
      <div className="container">
        <div className="intro-grid">
          <Label text={mission.label} />
          <h2 className="h-display reveal">{mission.title}</h2>
        </div>
        <ol className="mission-grid">
          {mission.items.map((m, i) => (
            <li key={m} className="mission-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="mission-num">{String(i + 1).padStart(2, "0")}</span>
              <p>{m}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
