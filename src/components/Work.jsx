import { work } from "../content.js";
import SectionHead from "./SectionHead.jsx";

export default function Work() {
  return (
    <section id="work">
      <SectionHead title={work.title} intro={work.intro} />
      <div className="work">
        {work.items.map((item) => (
          <div className="workcard" key={item.number}>
            <div
              className={`workthumb ${item.thumbClass}${item.fit === "contain" ? " workthumbContain" : ""}${
                item.round ? " workthumbRound" : ""
              }`}
            >
              {item.fit === "contain" && (
                <img className="workthumbBg" src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              )}
              <img
                className="workthumbMain"
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="workbody">
              <div className="worknum">{item.number}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="worklinks">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
