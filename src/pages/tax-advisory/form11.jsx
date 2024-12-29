import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TaxAdvisoryHeader from "../../components/taxadvisoryheader";
import "../../styles/taxadvisory.css";
import ContactForm from "../../components/contactform";
export default function Form11() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <TaxAdvisoryHeader />
      <div className="taxadvisorybody">
        <h1>Form 11</h1>
        <p>
          Form 11 is the self-assessment income tax return used by self-employed
          individuals, landlords, company directors, and others with non-PAYE
          income in Ireland. It is filed annually with the Revenue Commissioners
          to report income, claim tax credits, and calculate tax liabilities.
          Completing Form 11 accurately is crucial to ensuring compliance with
          Irish tax laws and avoiding penalties.
        </p>

        <h2>Who Should File Form 11?</h2>
        <h3>You are required to file Form 11 if:</h3>
        <ul>
          <li>You are self-employed or a sole trader.</li>
          <li>You earn rental income or other non-PAYE income.</li>
          <li>You are a proprietary director of a company.</li>
          <li>
            You are an individual with foreign income or investment income
            exceeding €5,000.
          </li>
        </ul>

        <h2>Key Features of Form 11 Filing</h2>
        <h3>1. Income Disclosure</h3>
        <p>Report all sources of income, including:</p>
        <ul>
          <li>Trading or professional income.</li>
          <li>Rental income.</li>
          <li>Dividend and investment income.</li>
          <li>Foreign income.</li>
        </ul>

        <h3>2. Tax Credits and Reliefs</h3>
        <p>Claim eligible tax credits and deductions, such as:</p>
        <ul>
          <li>Medical expenses.</li>
          <li>Tuition fees.</li>
          <li>Pension contributions.</li>
          <li>Capital allowances for business-related expenses.</li>
        </ul>

        <h3>3. USC and PRSI Contributions</h3>
        <p>
          Calculate Universal Social Charge (USC) and Pay Related Social
          Insurance (PRSI) based on your income.
        </p>

        <h2>Important Dates</h2>
        <ul>
          <li>
            <strong>Filing Deadline:</strong> Typically October 31st each year
            (or mid-November if filed online via Revenue's ROS system).
          </li>
        </ul>

        <h2>How Avva Tax & Immigration Can Help</h2>
        <p>
          At Avva, we simplify Form 11 tax filing, ensuring accuracy and
          compliance while maximizing your tax savings. Whether you need help
          gathering documentation, claiming reliefs, or navigating Revenue's
          online system, our experienced advisors are here to guide you every
          step of the way.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"tax@avvaadvisors.com"} />

      </div>
      <Footer />
    </div>
  );
}
