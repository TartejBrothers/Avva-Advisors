import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TaxAdvisoryHeader from "../../components/taxadvisoryheader";
import "../../styles/taxadvisory.css";
import ContactForm from "../../components/contactform";
export default function FinancialAdvisory() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <TaxAdvisoryHeader />
      <div className="taxadvisorybody">
        <h1>Financial Advisory</h1>
        <p>
          At Avva Advisors, we empower individuals and families to achieve their
          financial goals through expert guidance in savings and investment
          planning. Whether you&#39;re looking to build an emergency fund, plan
          for retirement, or grow your wealth, our tailored strategies ensure
          your money works smarter for you. We specialize in creating balanced
          investment portfolios, optimizing tax savings, and providing practical
          advice to align with your unique financial aspirations. From beginner
          investors to seasoned professionals, we help you navigate the
          complexities of personal finance with confidence. Let Avva Advisors be
          your partner in securing a brighter financial future.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"tax@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
