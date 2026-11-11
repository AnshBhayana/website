import PageHero from "../components/PageHero.jsx";
import Packages from "../components/Packages.jsx";

import { packages } from "../content.js";
import { usePageTitle } from "../hooks.js";

export default function PackagesPage() {
  usePageTitle("Packages | Ansh Bhayana");
  return (
    <>
      <PageHero title={packages.title} text={packages.intro} />
      <Packages />
      
    </>
  );
}