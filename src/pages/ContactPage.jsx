import Contact from "../components/Contact.jsx";
import { usePageTitle } from "../hooks.js";

export default function ContactPage() {
  usePageTitle("Contact | Ansh Bhayana");
  return <Contact page />;
}