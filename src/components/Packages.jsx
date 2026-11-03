import { packages } from "../content.js";
import SectionHead from "./SectionHead.jsx";

export default function Packages() {
  return (
    <section id="packages">
      <SectionHead title={packages.title} intro={packages.intro} />
      <div className="packages">
        {packages.items.map((pkg) => (
          <div className={pkg.featured ? "package featured" : "package"} key={pkg.name}>
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price}</div>
            {pkg.priceNote && <div className="priceNote">{pkg.priceNote}</div>}
            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
