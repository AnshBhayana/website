import { packages, site } from "../content.js";

const waLink = (message) =>
  site.phone ? `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}` : "/contact"; // fallback if no number is set

const customWaLink = waLink(
  "Hi Ansh, I found your website and would like to enquire about a custom project."
);

export default function Packages() {
  const c = packages.custom;
  return (
    <section className="section" aria-label="Packages">
      <div className="packages">
        {packages.items.map((pkg, i) => {
          return (
            <article
              className={`package${pkg.featured ? " packageFeatured" : ""}`}
              key={pkg.name}
            >
              <p className="packageNum">Package {String(i + 1).padStart(2, "0")}</p>
              <h3>{pkg.name}</h3>
              {pkg.tagline && <p className="packageTag">{pkg.tagline}</p>}
              <ul>
                {pkg.features.map((f) => {
                  const [lead, rest] = f.split(": ");
                  return (
                    <li key={f}>
                      {rest ? (
                        <>
                          <strong>{lead}</strong>
                          <span>{rest}</span>
                        </>
                      ) : (
                        f
                      )}
                    </li>
                  );
                })}
              </ul>
              <a
  className={`btn ${pkg.featured ? "btnLight" : "btnDark"}`}
  href={waLink(`Hi Ansh, I found your website and would like to enquire about the ${pkg.name} package.`)}
  target="_blank"
  rel="noopener noreferrer"
>
  Enquire about {pkg.name}
</a>
            </article>
          );
        })}
      </div>
      <div className="customBar">
        <div>
          <h3>{c.name}</h3>
          <p>{c.text}</p>
        </div>
        <a
          className="btn btnDark"
          href={customWaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.cta}
        </a>
      </div>
    </section>
  );
}