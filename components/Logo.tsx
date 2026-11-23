// Placeholder wordmark until the client supplies a logo (TODO: swap for public/images/logo.svg).
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <svg className="logo-mark" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="6" fill="var(--accent)" />
        {[6, 10, 14, 18, 22].map((x, i) => {
          const h = [6, 12, 16, 10, 5][i];
          return <rect key={x} x={x - 1.25} y={14 - h / 2} width="2.5" height={h} rx="1.25" fill="#111" />;
        })}
      </svg>
      <span className="logo-text">
        Seyi Israel <span>Music</span>
      </span>
    </span>
  );
}
