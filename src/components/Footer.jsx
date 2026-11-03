import { site } from "../content.js";

export default function Footer() {
  return (
    <footer>
      <span>{site.footerName}</span>
      <span>{site.footerTagline}</span>
    </footer>
  );
}
