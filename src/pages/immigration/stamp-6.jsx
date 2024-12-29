import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function Stamp6() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Stamp 6</h1>

        <p>
          Stamp 6 is a type of immigration permission in Ireland that provides
          full unrestricted residency rights to non-EEA nationals, allowing them
          to live, work, study, or retire in Ireland without any restrictions.
          This stamp is typically granted to those who have established
          significant connections to Ireland through family ties, long-term
          residency, or other exceptional circumstances.
        </p>

        <h2>Key Features of Stamp 6</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              Stamp 6 is typically granted to individuals who have held Stamp 5
              status for an extended period or have demonstrated exceptional
              integration into Irish society. It is often awarded to long-term
              residents, family members of Irish citizens or permanent
              residents, or those with humanitarian protection.
            </p>
          </li>
          <li>
            <h3>Rights</h3>
            <p>
              Holders of Stamp 6 enjoy the same rights as Irish citizens,
              including unrestricted access to the labor market, healthcare,
              social welfare, and public services. They are free to work, study,
              or retire in Ireland without the need for any further permits or
              visas.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              Stamp 6 does not have a set duration and is granted indefinitely,
              reflecting a permanent residency status. It allows individuals to
              remain in Ireland for as long as they wish.
            </p>
          </li>
          <li>
            <h3>Application Process</h3>
            <p>
              Applying for Stamp 6 involves submitting comprehensive
              documentation that demonstrates long-term residency, good conduct,
              and integration into Irish society. The application process
              requires an assessment by immigration authorities to ensure that
              the individual meets all criteria for unrestricted residency.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we provide expert guidance and support to
          individuals seeking Stamp 6 status. Our team assists with the
          preparation of documentation, completion of forms, and ensures that
          all legal requirements are met to facilitate a successful application.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
