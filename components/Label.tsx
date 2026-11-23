// Section label in the template's style: "↳ WHO WE ARE _"
export default function Label({ text }: { text: string }) {
  const [first, ...rest] = text.split(" ");
  return (
    <p className="label">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 2v7h10M10 6l3 3-3 3" /></svg>
      <span>{first}</span>
      {rest.length > 0 && <span className="label-accent">{rest.join(" ")}</span>}
      <span className="label-accent label-cursor">_</span>
    </p>
  );
}
