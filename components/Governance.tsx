import Label from "./Label";
import { governance } from "@/content/site";

export default function Governance() {
  return (
    <section className="section section-soft" id="governance">
      <div className="container intro-grid">
        <Label text={governance.label} />
        <div className="reveal">
          <p className="p-lg">{governance.text}</p>
          <ul className="tags" aria-label="Business activities">
            {governance.activities.map((a) => (
              <li key={a} className="tag">{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
