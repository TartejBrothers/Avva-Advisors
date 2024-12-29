import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WorkPermitHeader from "../../components/workpermitheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";
export default function Gep() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <WorkPermitHeader />
      <div className="taxadvisorybody">
        <h1>General Employment Permit</h1>
        <p>
          The General Employment Permit is a work permit that allows employers
          in Ireland to hire non-EEA (European Economic Area) and Swiss
          nationals for roles that cannot be filled by an Irish or EEA national.
          This permit is designed for positions that require a certain level of
          skills and qualifications but do not meet the criteria for a Critical
          Skills Employment Permit.
        </p>

        <h2>Key Features of the General Employment Permit</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <ul>
              <li>Applicants must have a job offer from an Irish employer.</li>
              <li>
                Minimum annual salary requirements:
                <ul>
                  <li>€30,000 for jobs in Dublin and major cities.</li>
                  <li>€27,000 for jobs outside Dublin and major cities.</li>
                </ul>
              </li>
              <li>
                The role should be in a skill shortage area or contribute
                positively to the Irish economy.
              </li>
            </ul>
          </li>

          <li>
            <h3>Employer Requirements</h3>
            <ul>
              <li>
                The employer must provide evidence of actively seeking an Irish
                or EEA national for the role but being unable to find a suitable
                candidate.
              </li>
            </ul>
          </li>

          <li>
            <h3>Duration</h3>
            <ul>
              <li>The permit is initially issued for two years.</li>
              <li>
                After two years, holders may apply for a renewal or a Stamp 4
                residence permit.
              </li>
            </ul>
          </li>
        </ul>

        <h2>How Avva Advisors Can Help</h2>
        <p>
          At Avva Advisors, we assist both employers and employees in navigating
          the General Employment Permit process. Our team provides expert advice
          on eligibility, documentation, and application submission to ensure
          compliance with Irish immigration laws and a smooth transition to work
          in Ireland.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"permits@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
