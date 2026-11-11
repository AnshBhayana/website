import { experience } from "../content.js";

export default function Experience() {
  return (
    <section className="section" id="about" aria-labelledby="exp-title">
      <div className="sectionHead">
        <h2 id="exp-title" className="sectionTitle">
          {experience.title}
        </h2>
      </div>
      <ol className="timeline">
        {experience.items.map((e) => (
          <li className="tlItem" key={e.name}>
            <div className="tlMeta">
              <h3>{e.name}</h3>
              <p className="tlRole">{e.role}</p>
              {e.period && <p className="tlPeriod">{e.period}</p>}
            </div>
            <ul className="tlPoints">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <img className={`tlImg${e.fit === "contain" ? " isContain" : ""}`} src={e.image} alt={e.imageAlt} loading="lazy" decoding="async" />
          </li>
        ))}
      </ol>
    </section>
  );
}
