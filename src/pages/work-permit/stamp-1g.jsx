import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WorkPermitHeader from "../../components/workpermitheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";
export default function Stamp1g() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <WorkPermitHeader />
      <div className="taxadvisorybody">
        <h1>Stamp 1G Extension</h1>
        <p>
          A Stamp 1G Extension is a temporary residency permit in Ireland that
          allows non-EEA (European Economic Area) students to stay in the
          country after completing their course of study. This permit provides
          additional time to find work or gain professional experience in their
          field of study.
        </p>

        <h2>Key Features of the Stamp 1G Extension</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <ul>
              <li>
                Students must have completed an approved course of study at an
                Irish higher education institution.
              </li>
              <li>Must hold a valid Irish student visa.</li>
              <li>
                Must have a job offer in a highly skilled occupation or be
                actively seeking employment within their field of study.
              </li>
            </ul>
          </li>

          <li>
            <h3>Duration</h3>
            <ul>
              <li>
                The extension is usually granted for a period of up to 12
                months.
              </li>
              <li>
                This allows graduates to seek work opportunities and apply for
                the Critical Skills Employment Permit if they secure a
                qualifying job.
              </li>
            </ul>
          </li>

          <li>
            <h3>Benefits</h3>
            <ul>
              <li>
                Provides time for graduates to find employment and develop their
                careers.
              </li>
              <li>
                Helps graduates gain valuable professional experience in
                Ireland.
              </li>
              <li>
                Makes it easier to transition to long-term residency options if
                desired.
              </li>
            </ul>
          </li>
        </ul>

        <h2>How Avva Advisors Can Help</h2>
        <p>
          At Avva Advisors, we guide students through the Stamp 1G Extension
          application process, ensuring they meet all the necessary requirements
          and submit accurate documentation. We also provide advice on job
          search strategies, employment rights, and career development to help
          graduates make the most of their extended stay in Ireland.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"permits@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
