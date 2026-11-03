import { services } from "../content.js";
import SectionHead from "./SectionHead.jsx";

export default function Services() {
  return (
    <section id="services">
      <SectionHead title={services.title} intro={services.intro} />
      <div className="grid">
        {services.items.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
