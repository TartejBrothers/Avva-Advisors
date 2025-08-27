import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import CompanyRegistration from "./pages/companyregistration";
import Form11 from "./pages/tax-advisory/form11";
import Form12 from "./pages/tax-advisory/form12";
import FinancialAdvisory from "./pages/tax-advisory/financial-advisory";
import PensionsAdvisory from "./pages/tax-advisory/pensions-advisory";
import Csep from "./pages/work-permit/csep";
import Gep from "./pages/work-permit/gep";
import Stamp1g from "./pages/work-permit/stamp-1g";
import Stamp0 from "./pages/immigration/stamp-0";
import Vfs from "./pages/immigration/vfs";
import Stamp5 from "./pages/immigration/stamp-5";
import Stamp6 from "./pages/immigration/stamp-6";
import AdultNaturalisation from "./pages/immigration/adult-naturalisation";
import ChildNaturalisation from "./pages/immigration/child-naturalisation";
import CitizenshipBirth from "./pages/immigration/citizenship-birth";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/form11" element={<Form11 />} />
        <Route path="/form12" element={<Form12 />} />
        <Route path="/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/pensions-advisory" element={<PensionsAdvisory />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/csep" element={<Csep />} />
        <Route path="/gep" element={<Gep />} />
        <Route path="/stamp-1g" element={<Stamp1g />} />
        <Route path="/stamp-0" element={<Stamp0 />} />
        <Route path="/vfs-application-support" element={<Vfs />} />
        <Route path="/stamp-5" element={<Stamp5 />} />
        <Route path="/stamp-6" element={<Stamp6 />} />
        <Route path="/adult-naturalisation" element={<AdultNaturalisation />} />
        <Route path="/child-naturalisation" element={<ChildNaturalisation />} />
        <Route path="/citizenship-by-birth" element={<CitizenshipBirth />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
