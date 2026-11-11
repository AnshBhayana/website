import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import PageHero from "./components/PageHero.jsx";
import Home from "./pages/Home.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import { usePageTitle } from "./hooks.js";
import ContactPage from "./pages/ContactPage.jsx";
import Ticker from "./components/Ticker.jsx";


// Scrolls to the top on a new page, or to the #hash target when there is one.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(null);
  useEffect(() => {
    const newPage = prevPath.current !== pathname;
    prevPath.current = pathname;
    if (!hash) {
      if (newPage) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
    const go = () =>
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
    const t1 = setTimeout(go, 60);
    // Images above the target can shift the layout after a fresh page load, so retry once.
    const t2 = newPage ? setTimeout(go, 600) : null;
    return () => {
      clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  usePageTitle("Page not found | Ansh Bhayana");
  return <PageHero eyebrow="404" title="Page not found" text="That page doesn't exist, but the homepage does." />;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <div className="page">
        <Nav />
        <Ticker /> 
        <main id="main" key={pathname} className="pageEnter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}