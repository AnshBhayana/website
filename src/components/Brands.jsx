import { useState } from "react";
import { brands } from "../content.js";

// Fisher-Yates shuffle on a copy, so content.js stays untouched.
function shuffled(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Wide logos are capped by width, tall ones by height, so they all feel the same size.
function logoWidth({ width, height }) {
  const aspect = width / height;
  return Math.min(Math.pow(aspect, 0.6), 1.15 * aspect).toFixed(3);
}

function Logo({ logo, hidden }) {
  return (
    <li className="brandItem" aria-hidden={hidden || undefined}>
      <img
        src={logo.src}
        alt={hidden ? "" : logo.name}
        width={logo.width}
        height={logo.height}
        style={{ "--logo-w": logoWidth(logo) }}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </li>
  );
}

export default function Brands() {
  // New random order each time the section mounts (page load / returning to Home).
  // The initializer runs once, so the order doesn't jump around on re-renders.
  const [logos] = useState(() => shuffled(brands.logos));

  return (
    <section className="section brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="sectionTitle">
        {brands.title}
      </h2>

      <div className="strip">
        <div className="stripViewport">
          <ul className="stripTrack brandTrack" style={{ "--strip-duration": `${brands.speed}s` }}>
            {[0, 1].map((half) =>
              [0, 1].map((rep) =>
                logos.map((l) => (
                  <Logo logo={l} key={`${half}-${rep}-${l.src}`} hidden={half === 1 || rep === 1} />
                ))
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}