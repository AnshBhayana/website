import { navLinks } from "../content.js";

export default function Nav() {
  return (
    <nav>
      <div className="navlinks">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
