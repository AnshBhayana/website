import { useEffect, useRef } from "react";
import { hero } from "../content.js";
import { reducedMotion } from "../hooks.js";

// Layout order is locked by the brief:
// nav, ticker, orange panel > eyebrow, headline, copy, CTA, viewfinder stage, metadata row.
export default function Hero() {
  const stageRef = useRef(null);
  const tcRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion()) return; // reduced motion keeps the static version
    const cleanups = [];

    // Running timecode (desktop only), 24 frames per second
    if (window.matchMedia("(min-width: 801px)").matches && tcRef.current) {
      const t0 = performance.now();
      const id = setInterval(() => {
        if (document.hidden) return;
        const f = Math.floor((performance.now() - t0) / (1000 / 24));
        const p = (n) => String(n).padStart(2, "0");
        tcRef.current.textContent = `${p(Math.floor(f / 86400))}:${p(Math.floor(f / 1440) % 60)}:${p(
          Math.floor(f / 24) % 60
        )}:${p(f % 24)}`;
      }, 1000 / 24);
      cleanups.push(() => clearInterval(id));
    }

    // Mouse parallax (mouse devices only)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const area = stage.closest(".heroPanel") || stage;
      let raf = 0;
      let x = 0;
      let y = 0;
      const apply = () => {
        raf = 0;
        stage.style.setProperty("--mx", x.toFixed(3));
        stage.style.setProperty("--my", y.toFixed(3));
      };
      const move = (e) => {
        const r = area.getBoundingClientRect();
        x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
        y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const leave = () => {
        x = 0;
        y = 0;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      area.addEventListener("pointermove", move);
      area.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        area.removeEventListener("pointermove", move);
        area.removeEventListener("pointerleave", leave);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="heroPanel">
        <div className="heroText">
          <p className="heroEyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="heroTitle">
            {hero.title}
          </h1>
          <div className="heroCopyRow">
            <p className="heroCopy">
              {hero.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
            <a className="btn btnLight" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>

        <figure className="heroPhoto" ref={stageRef}>
          {/* Decorative viewfinder card: brackets, grid, lens disc, REC + specs */}
          <div className="heroFrame" aria-hidden="true">
            <span className="vfGrid" />
            <span className="vfDisc" />
            <span className="vfCorner vfTL" />
            <span className="vfCorner vfTR" />
            <span className="vfCorner vfBL" />
            <span className="vfCorner vfBR" />
            <span className="vfRec">
              <i className="vfDot" />
              REC
              <span className="vfTime" ref={tcRef}>
                00:00:00:00
              </span>
            </span>
            <span className="vfSpec">4K · 24FPS</span>
          </div>

          <img
            className="heroCutout"
            src={hero.image}
            alt={hero.imageAlt}
            width="176"
            height="397"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <figcaption className="heroSlate">
            <strong>ANSH BHAYANA</strong>
            <span>Content Partner</span>
          </figcaption>

          {/* Rotating badge with the AB camera logo */}
          <div className="heroBadge" aria-hidden="true">
            <svg className="heroBadgeRing" viewBox="0 0 120 120">
              <defs>
                <path id="badgeCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#badgeCircle" textLength="272" lengthAdjust="spacing">
                  STRATEGIST • PRODUCTION • PARTNER •
                </textPath>
              </text>
            </svg>
            <img className="heroBadgeLogo" src="/icon-192x192.png" alt="" width="192" height="192" decoding="async" />
          </div>
        </figure>

        <div className="heroMeta">
          <span>{hero.meta[0]}</span>
          <span>{hero.meta[1]}</span>
        </div>
      </div>
    </section>
  );
}