import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import CompanyRegistration from "./pages/companyregistration";
import Form11 from "./pages/tax-advisory/form11";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/form11" element={<Form11 />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
