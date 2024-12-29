import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function Stamp0() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Stamp 0 Immigration Permission in Ireland</h1>

        <p>
          A Stamp 0 is a type of immigration permission in Ireland that allows
          non-EEA nationals to stay in the country without engaging in
          employment. This permission is often used for individuals who are in
          Ireland for personal reasons, such as family reunification, study, or
          to pursue other non-employment related activities.
        </p>

        <h2>Key Features of the Stamp 0</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              Stamp 0 holders do not have the right to work in Ireland. It is
              typically issued to those who have been granted residency due to
              family ties, education, or as part of a humanitarian or
              compassionate grounds application.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              The duration of Stamp 0 is typically specified at the time of
              issuance, depending on the individual’s situation and the specific
              conditions attached to their permission. It can range from a few
              months to several years.
            </p>
          </li>
          <li>
            <h3>Conditions</h3>
            <p>
              Individuals with Stamp 0 are not permitted to engage in paid
              employment or self-employment. However, they may participate in
              non-employment related activities such as studies, volunteer work,
              or training courses, provided these do not interfere with their
              primary immigration status.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we assist clients in understanding the implications
          of Stamp 0 and provide advice on how to navigate its conditions.
          Whether you are reuniting with family, pursuing further education, or
          staying for personal reasons, we help you manage your immigration
          status and explore any opportunities that may align with your goals.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
