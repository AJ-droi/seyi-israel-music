import Photo from "./Photo";
import { vision } from "@/content/site";

export default function Vision() {
  return (
    <section className="vision" aria-labelledby="vision-title">
      <Photo file="vision.jpg" alt="Worship night audience with raised hands" className="vision-bg" />
      <div className="vision-shade" aria-hidden="true" />
      <div className="container vision-inner">
        <p className="vision-label">{vision.label}</p>
        <h2 id="vision-title" className="vision-text reveal">{vision.text}</h2>
      </div>
    </section>
  );
}
