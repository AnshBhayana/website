import { useState } from "react";
import { services } from "../content.js";

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section servicesSection" id="services" aria-labelledby="services-title">
      <div className="sectionHead">
        <h2 id="services-title" className="sectionTitle">
          {services.title}
        </h2>
        <p>{services.intro}</p>
      </div>
      <div className="svcList">
        {services.categories.map((c, i) => {
          const isOpen = open === i;
          return (
            <div className={`svc${isOpen ? " svcOpen" : ""}`} key={c.title}>
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`svc-panel-${i}`}
                  id={`svc-btn-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setOpen(i)}
                >
                  <span className="svcIdx">{i + 1}</span>
                  <span className="svcName">{c.title}</span>
                  <span className="svcIcon" aria-hidden="true" />
                </button>
              </h3>
              <div className="svcPanel" id={`svc-panel-${i}`} role="region" aria-labelledby={`svc-btn-${i}`}>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
