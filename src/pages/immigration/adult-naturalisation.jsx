import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function AdultNaturalisation() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Adult Naturalisation</h1>

        <p>
          Adult Naturalisation is the process through which non-EEA nationals
          who have lived in Ireland for a significant period and have developed
          strong ties to the country can apply for Irish citizenship. It allows
          individuals to become Irish citizens and enjoy the same rights and
          responsibilities as Irish nationals, including the right to vote,
          work, and access public services.
        </p>

        <h2>Key Features of Adult Naturalisation</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              To qualify for adult naturalisation, applicants generally need to
              have resided in Ireland legally for a minimum of 5 years,
              including time spent on Stamp 4 or other relevant permissions.
              They must also demonstrate knowledge of the English or Irish
              language, an understanding of Irish culture, and an intention to
              continue living in Ireland. Additional criteria may include proof
              of income, tax compliance, and a good character requirement.
            </p>
          </li>
          <li>
            <h3>Rights</h3>
            <p>
              As Irish citizens, holders of naturalisation have full rights and
              entitlements similar to those of Irish citizens, including the
              right to live, work, and study in Ireland. They can also travel
              freely within the EU and may apply for an Irish passport.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              The naturalisation process usually takes around 6 to 12 months
              from application submission to decision. The application process
              involves an assessment by immigration authorities to verify the
              applicant’s eligibility and alignment with Irish law.
            </p>
          </li>
          <li>
            <h3>Application Process</h3>
            <p>
              Applying for adult naturalisation involves submitting a detailed
              application form along with supporting documents such as proof of
              residency, tax returns, employment history, language proficiency,
              and any relevant background checks. The process may also include
              an interview with immigration officials to confirm the applicant’s
              commitment to Ireland and understanding of the country’s culture
              and laws.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we offer expert guidance and support throughout the
          adult naturalisation process. Our team assists with documentation
          preparation, form filling, and provides advice on meeting all
          requirements for successful citizenship application.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
