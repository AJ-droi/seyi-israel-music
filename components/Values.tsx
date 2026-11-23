import Label from "./Label";
import { values } from "@/content/site";

export default function Values() {
  return (
    <section className="section section-dark" id="values">
      <div className="container">
        <Label text={values.label} />
        <ul className="values-list">
          {values.items.map((v, i) => (
            <li key={v.title} className="value reveal">
              <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-text">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
