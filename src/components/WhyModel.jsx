import { whyModel } from "../content.js";
import SectionHead from "./SectionHead.jsx";

export default function WhyModel() {
  return (
    <section>
      <SectionHead title={whyModel.title} intro={whyModel.intro} />
      <div className="team">
        {whyModel.items.map((item) => (
          <div className="teambox" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
