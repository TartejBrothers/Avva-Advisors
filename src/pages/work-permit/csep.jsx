import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WorkPermitHeader from "../../components/workpermitheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";
export default function Csep() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <WorkPermitHeader />
      <div className="taxadvisorybody">
        <h1>Critical Skills Employment Permit</h1>
        <p>
          The Critical Skills Employment Permit is designed to attract highly
          skilled professionals to Ireland, addressing skill shortages in key
          sectors and supporting the country’s economic growth. This permit is
          particularly aimed at roles in technology, engineering, healthcare,
          and finance, among others, offering significant benefits for both
          employees and employers.
        </p>

        <h2>Key Features of the Critical Skills Employment Permit</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <ul>
              <li>
                Applicants must have a job offer in a highly skilled occupation.
              </li>
              <li>
                Minimum annual salary requirements:
                <ul>
                  <li>€38,000 for roles requiring a relevant degree.</li>
                  <li>€64,000 for other eligible roles.</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h3>Employer Requirements</h3>
            <ul>
              <li>
                The employer must be registered and compliant with Irish tax and
                employment laws.
              </li>
            </ul>
          </li>

          <li>
            <h3>Benefits</h3>
            <ul>
              <li>
                Permit holders can apply for immediate family reunification.
              </li>
              <li>
                After two years, permit holders are eligible to apply for
                residency.
              </li>
            </ul>
          </li>
        </ul>

        <h2>How Avva Advisors Can Help</h2>
        <p>
          At Avva Advisors, we simplify the application process, guiding both
          employees and employers through eligibility checks, document
          preparation, and submissions to ensure a seamless experience. Whether
          you’re a professional seeking opportunities in Ireland or an employer
          looking to hire global talent, our expert team ensures compliance with
          all requirements while maximizing your chances of approval.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"permits@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
