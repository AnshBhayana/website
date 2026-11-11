import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "../content.js";

const waLink = site.phone
  ? `https://wa.me/${site.phone}?text=${encodeURIComponent(
      "Hi Ansh, I found your website and would like to talk about a project."
    )}`
  : "#contact"; // falls back to the contact section if no number is set

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);
  const onLogo = () => {
    close();
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`nav${stuck ? " navStuck" : ""}${open ? " navOpen" : ""}`}>
      <div className="navInner">
        <Link className="navLogo" to="/" onClick={onLogo}>
          {site.name}®
        </Link>
        <nav className="navLinks" id="primary-nav" aria-label="Primary">
          {navLinks.map((l) =>
            l.to ? (
              <NavLink key={l.to} to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            ) : (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            )
          )}
          <a
  className="navCta"
  href={waLink}
  target={site.phone ? "_blank" : undefined}
  rel="noopener noreferrer"
  onClick={close}
>
  Let&rsquo;s work together
</a>
        </nav>
        <button
          className="navToggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="srOnly">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="navBars" />
        </button>
      </div>
    </header>
  );
}