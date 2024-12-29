import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TaxAdvisoryHeader from "../../components/taxadvisoryheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";
export default function Form11() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <TaxAdvisoryHeader />
      <div className="homecontactbg">
        <ContactForm mail={"tax@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
