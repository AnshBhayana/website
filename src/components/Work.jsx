import { useEffect, useRef } from "react";
import { work } from "../content.js";
import { useInView, reducedMotion } from "../hooks.js";

function Project({ item, index }) {
  const [ref, seen] = useInView(0.2);
  const mediaRef = useRef(null);

  // Gentle image parallax. Skipped when the visitor prefers reduced motion.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el || reducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.setProperty("--py", `${(-p * 36).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <article
      id={`project-${item.number}`}
      className={`project${index % 2 ? " projectFlip" : ""}${seen ? " isSeen" : ""}`}
      ref={ref}
    >
      <div className={`projectMedia${item.fit === "contain" ? " isContain" : ""}`} ref={mediaRef}>
        <div className="projectPx">
          <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="projectBody">
        <span className="projectNum" aria-hidden="true">
          {item.number}
        </span>
        <h2>{item.title}</h2>
        <p className="projectRole">{item.role}</p>
        <p>{item.text}</p>
        <ul className="chips" aria-label="Results">
          {item.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <div className="projectLinks">
          {item.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
              <span className="srOnly"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" aria-label="Projects">
      <div className="projects">
        {work.items.map((item, i) => (
          <Project item={item} index={i} key={item.number} />
        ))}
      </div>
    </section>
  );
}