import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import CelebStrip from "./components/CelebStrip.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import WhyModel from "./components/WhyModel.jsx";
import Packages from "./components/Packages.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
//set
export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <main>
        <Hero />
        <CelebStrip />
        <Services />
        <Work />
        <WhyModel />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
