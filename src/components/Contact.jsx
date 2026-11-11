import { Link } from "react-router-dom";
import { contact, site } from "../content.js";

const hasPhone = Boolean(site.phone);
const waText = encodeURIComponent("Hi Ansh, I found your website and would like to talk about a project.");

// On desktop, open Gmail's compose window with the "To" address filled in.
// On phones, fall back to the normal mailto: link, which opens the visitor's mail app.
const isTouch = () => window.matchMedia("(pointer: coarse)").matches;
const gmailCompose = () => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;

const phonePath =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <g transform="translate(7.2 7.2) scale(0.4)">
        <path d={phonePath} strokeWidth="3.5" />
      </g>
    </svg>
  ),
  call: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={phonePath} />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

function Option({ href, label, detail, icon, external, pending, onClick }) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={`cOpt${pending ? " cOptPending" : ""}`} href={href} onClick={onClick} {...props}>
      <span className="cTop">
        <span className="cLabel">{label}</span>
        <span className="cIcon">{icon}</span>
      </span>
      <span className="cDetail">{detail}</span>
    </a>
  );
}

export default function Contact({ page = false }) {
  const Heading = page ? "h1" : "h2";

  return (
    <section className={`contact${page ? " contactPage" : ""}`} id="contact" aria-labelledby="contact-title">
      <div className="contactPanel">
        {page && (
          <Link className="pageBack" to="/">
            <span aria-hidden="true">←</span> Back to home
          </Link>
        )}
        <Heading id="contact-title" className="contactTitle">
          {contact.title}
        </Heading>
        <p className="contactText">{contact.text}</p>

        <div className="cGrid">
          <Option href={site.instagram} label="Instagram" detail="@anshbhayana" icon={icons.instagram} external />
          <Option
            href={hasPhone ? `https://wa.me/${site.phone}?text=${waText}` : "#contact"}
            label="WhatsApp"
            detail={hasPhone ? site.phoneDisplay || `+${site.phone}` : "Number coming soon"}
            icon={icons.whatsapp}
            external={hasPhone}
            pending={!hasPhone}
          />
          <Option
  href={`mailto:${site.email}`}
  label="Email"
  detail={site.email}
  icon={icons.email}
  onClick={(e) => {
    e.preventDefault();
    if (!isTouch()) {
      window.open(gmailCompose(), "_blank", "noopener,noreferrer");
      return;
    }
    // Phones: try the mail app first. If the page is still visible a moment later,
    // no mail app took over, so open Gmail in the browser instead.
    window.location.href = `mailto:${site.email}`;
    setTimeout(() => {
      if (!document.hidden) window.location.href = gmailCompose();
    }, 1200);
  }}
/>
        </div>

        {site.formUrl && (
          <div className="briefBar">
            <div>
              <h3>Prefer to share the details first?</h3>
              <p>Tell me about your project in a short form.</p>
            </div>
            <a className="btn btnDark" href={site.formUrl} target="_blank" rel="noopener noreferrer">
              Fill the project brief
              <span className="srOnly"> (opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}