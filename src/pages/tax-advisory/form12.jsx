import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TaxAdvisoryHeader from "../../components/taxadvisoryheader";
import "../../styles/taxadvisory.css";
import ContactForm from "../../components/contactform";
export default function Form12() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <TaxAdvisoryHeader />
      <div className="taxadvisorybody">
        <h1>What is Form 12?</h1>
        <p>
          Form 12 is the tax return used by PAYE (Pay As You Earn) employees in
          Ireland who need to declare additional income or claim tax reliefs not
          processed through their employer. It is primarily intended for
          employees with straightforward tax situations, including income from
          employment, pensions, or modest additional sources such as rental
          income, dividends, or foreign income.
        </p>

        <h2>Who Should File Form 12?</h2>
        <ul>
          <li>
            You have PAYE income but also earn additional income, such as rental
            income or dividends, under €5,000.
          </li>
          <li>
            You wish to claim additional tax credits or reliefs (e.g., medical
            expenses, tuition fees, or flat-rate expenses).
          </li>
          <li>
            You are a PAYE worker who wants to review your tax position or
            correct an underpayment or overpayment.
          </li>
        </ul>

        <h2>Key Features of Form 12 Filing</h2>
        <h3>1. Income Reporting:</h3>
        <ul>
          <li>Declare PAYE income (from employment or pensions).</li>
          <li>
            Report small amounts of non-PAYE income under €5,000, such as rental
            income, foreign income, or dividends.
          </li>
        </ul>

        <h3>2. Claiming Reliefs:</h3>
        <ul>
          <li>
            Apply for tax credits like Home Carer Credit, medical expense
            relief, or tuition fees.
          </li>
          <li>
            Ensure that your tax position is optimized by claiming all eligible
            deductions.
          </li>
        </ul>

        <h3>3. Simplified Process:</h3>
        <ul>
          <li>
            Form 12 is designed for individuals with simple tax situations,
            making it more streamlined than Form 11.
          </li>
          <li>
            Most employees can file Form 12 online using Revenue’s MyAccount
            system for faster processing.
          </li>
        </ul>

        <h2>Important Dates</h2>
        <ul>
          <li>
            Filing Deadline: October 31st (same as Form 11), with extended
            deadlines for online filing.
          </li>
        </ul>

        <h2>How Avva Tax &amp; Immigration Can Assist</h2>
        <p>
          At Avva, we make Form 12 filing easy and hassle-free. Our tax advisors
          ensure your tax return is accurate, claim all eligible credits and
          reliefs, and identify opportunities for tax savings. Whether you’re
          filing for the first time or need support reviewing your tax position,
          our team is here to help you achieve compliance and peace of mind.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"tax@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
