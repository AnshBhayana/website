import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="pageHero" aria-labelledby="page-title">
      <div className="pageHeroPanel">
        <Link className="pageBack" to="/">
          <span aria-hidden="true">←</span> Back to home
        </Link>
        {eyebrow && <p className="heroEyebrow">{eyebrow}</p>}
        <h1 id="page-title" className="pageTitle">
          {title}
        </h1>
        {text && <p className="pageIntro">{text}</p>}
        {children}
      </div>
    </section>
  );
}