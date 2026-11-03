import { hero, site } from "../content.js";

export default function Hero() {
  return (
    <section style={{ borderTop: 0, paddingTop: 50 }}>
      <div className="hero">
        <div>
          <div className="heroName">{site.name}</div>
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.title}</h1>
          <p>{hero.intro}</p>
          <a className="cta" href={hero.ctaHref}>
            {hero.ctaLabel}
          </a>
          <div className="statbox heroStats">
            {hero.stats.map((stat) => (
              <div className="statItem" key={stat.label}>
                <div className="stat">{stat.value}</div>
                <div className="statlabel">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="portrait">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="portraitCaption">
              <strong>{hero.captionTitle}</strong>
              <span>{hero.captionText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
