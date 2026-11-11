import { whyModel } from "../content.js";

export default function WhyMe() {
  return (
    <section className="section why" aria-labelledby="why-title">
      <h2 id="why-title" className="sectionTitle whyTitle">
  {whyModel.title.split("|").map((line) => (
    <span key={line}>{line}</span>
  ))}
</h2>
      <p className="whyIntro">{whyModel.intro}</p>
      <div className="whyCols">
        {whyModel.items.map((it) => (
          <div key={it.title}>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
