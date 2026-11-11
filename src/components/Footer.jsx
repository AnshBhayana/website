import { site } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        {site.name}® {new Date().getFullYear()}
      </span>
      <span>{site.footerTagline}</span>
    </footer>
  );
}
