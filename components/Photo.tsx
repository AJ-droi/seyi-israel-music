import { publicImage } from "@/lib/images";

// Shows public/images/<file> if it exists; otherwise a dark placeholder labelled with
// what photo belongs there (see README → Photos).
export default function Photo({ file, alt, className = "", priority = false }: { file: string; alt: string; className?: string; priority?: boolean }) {
  const src = publicImage(file);
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`photo ${className}`} loading={priority ? "eager" : "lazy"} />;
  }
  return (
    <div className={`photo ph ${className}`} role="img" aria-label={`Photo placeholder: ${alt}`}>
      <svg className="ph-wave" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 40 }, (_, i) => {
          const h = 6 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)) * 48;
          return <rect key={i} x={i * 5 + 1} y={30 - h / 2} width="2.4" height={h} rx="1.2" />;
        })}
      </svg>
      <em>[{alt} · {file}]</em>
    </div>
  );
}
