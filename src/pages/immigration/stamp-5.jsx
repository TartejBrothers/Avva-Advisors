import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function Stamp5() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Stamp 5</h1>

        <p>
          Stamp 5 is a type of immigration permission in Ireland that grants
          indefinite residency rights to non-EEA nationals, allowing them to
          live, work, study, or retire in Ireland without restrictions. This is
          the most permanent form of residency available for non-EEA nationals
          in Ireland and provides similar rights to Irish citizens, except
          voting rights.
        </p>

        <h2>Key Features of Stamp 5</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              To qualify for Stamp 5, applicants generally need to have held a
              Stamp 4 status for at least 5 years and demonstrated an ongoing
              connection to Ireland through work, study, or family ties. They
              must also meet all immigration conditions and be in good standing
              with the immigration authorities.
            </p>
          </li>
          <li>
            <h3>Rights</h3>
            <p>
              Stamp 5 holders can live, work, study, or retire without needing
              to apply for any further permits or visas. They have unrestricted
              access to the Irish labor market, healthcare, social welfare, and
              public services. They can also sponsor family members for
              residency.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              Stamp 5 is granted indefinitely, reflecting long-term residency
              and the commitment to remain in Ireland permanently.
            </p>
          </li>
          <li>
            <h3>Application Process</h3>
            <p>
              Applying for Stamp 5 involves submitting the necessary
              documentation that proves residency status, financial stability,
              and integration into Irish society. The application process
              requires detailed proof of compliance with Irish immigration laws
              and often involves an assessment by the immigration authorities.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we assist clients in understanding the requirements
          and application process for Stamp 5. Our team provides expert guidance
          on preparing documentation, completing forms, and ensuring that all
          criteria are met for a successful application.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
