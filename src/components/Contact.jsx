import { contact, site } from "../content.js";

export default function Contact() {
  return (
    <section id="contact" className="final">
      <div className="eyebrow">{contact.eyebrow}</div>
      <h2>{contact.title}</h2>
      <p>{contact.text}</p>
      <a className="cta" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </section>
  );
}
