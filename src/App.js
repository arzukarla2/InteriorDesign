import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Portofolios from "./pages/Portofolios";
import ContactUs from "./pages/ContactUs";
import OurTeams from "./pages/OurTeams";
import Sevices from "./pages/Sevices";
import AboutUs from "./pages/AboutUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/portofolios":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/our-teams":
        title = "";
        metaDescription = "";
        break;
      case "/sevices":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolios" element={<Portofolios />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/our-teams" element={<OurTeams />} />
      <Route path="/sevices" element={<Sevices />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
