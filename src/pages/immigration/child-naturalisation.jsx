import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function ChildNaturalisation() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Child Naturalisation</h1>

        <p>
          Child Naturalisation refers to the process through which children born
          outside Ireland can become Irish citizens, typically through their
          parents who are Irish or who have become Irish citizens themselves.
          This allows children to enjoy the same rights and privileges as Irish
          nationals, including access to public services, education, and the
          ability to live and work freely within the EU.
        </p>

        <h2>Key Features of Child Naturalisation</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              To apply for child naturalisation, children generally need to meet
              specific criteria, including being under the age of 18, being born
              outside of Ireland, and having at least one parent who is an Irish
              citizen or has acquired Irish citizenship through naturalisation.
              The child must have a valid immigration status in Ireland, such as
              a Stamp 4, Stamp 5, or Stamp 6.
            </p>
          </li>
          <li>
            <h3>Rights</h3>
            <p>
              Once naturalised, children become Irish citizens and are entitled
              to the same rights as any other Irish national. This includes the
              right to live, study, and work in Ireland without any immigration
              restrictions. They can also access Irish public services and
              education on the same basis as Irish children.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              The application process for child naturalisation typically takes a
              few months. It involves submitting an application form and
              supporting documents such as proof of residency, birth
              certificates, evidence of parental Irish citizenship, and any
              relevant immigration permissions. An interview may be required to
              verify the child’s eligibility.
            </p>
          </li>
          <li>
            <h3>Application Process</h3>
            <p>
              The naturalisation process for children is handled by the Irish
              Naturalisation and Immigration Service (INIS). The application
              must be carefully prepared to ensure all required documentation is
              submitted correctly. The INIS assesses each application to ensure
              compliance with Irish law and to confirm that the child has a
              genuine connection to Ireland.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we assist families through the child naturalisation
          process. Our team provides guidance on the documentation needed, helps
          with form filling, and ensures that the application meets all legal
          requirements for a successful outcome.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
