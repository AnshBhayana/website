import { useEffect, useState } from "react";
import { impact } from "../content.js";
import { useInView, reducedMotion } from "../hooks.js";

function Counter({ value, decimals = 0, run }) {
  const [n, setN] = useState(reducedMotion() ? value : 0);
  useEffect(() => {
    if (!run || reducedMotion()) {
      if (run) setN(value);
      return;
    }
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);
  return <>{n.toFixed(decimals)}</>;
}

export default function Impact() {
  const [ref, seen] = useInView(0.3);
  return (
    <section className="section impact" aria-labelledby="impact-title">
      <h2 id="impact-title" className="sectionTitle">
        {impact.title}
      </h2>
      <dl className="impactGrid" ref={ref}>
        {impact.items.map((it) => (
          <div className="impactItem" key={it.label}>
            <dt className="srOnly">{it.label}</dt>
            <dd className="impactNum" aria-label={`${it.value}${it.suffix}`}>
              <span aria-hidden="true">
                <Counter value={it.value} decimals={it.decimals || 0} run={seen} />
                {it.suffix}
              </span>
            </dd>
            <dd className="impactLabel" aria-hidden="true">
              {it.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
