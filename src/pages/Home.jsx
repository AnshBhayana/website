import Hero from "../components/Hero.jsx";
import Impact from "../components/Impact.jsx";
import Services from "../components/Services.jsx";
import Experience from "../components/Experience.jsx";
import Gallery from "../components/Gallery.jsx";
import Brands from "../components/Brands.jsx";
import WhyMe from "../components/WhyMe.jsx";
import Contact from "../components/Contact.jsx";
import { usePageTitle } from "../hooks.js";

export default function Home() {
  usePageTitle("Ansh Bhayana | Content Creator, Producer & Strategist");
  return (
    <>
      <Hero />
      <Gallery />
      <Impact />
      {/* <Experience /> */}
      <Brands />
      <Services />
      <WhyMe />
      <Contact />
    </>
  );
}