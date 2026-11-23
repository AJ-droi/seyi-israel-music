"use client";

import { useEffect, useState } from "react";

// Live local time for the company's city, like the template's nav clock.
export default function Clock({ label, timeZone }: { label: string; timeZone: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return (
    <span className="clock">
      {label}
      <span className="clock-time" suppressHydrationWarning>{time || "--:--:--"}</span>
    </span>
  );
}
