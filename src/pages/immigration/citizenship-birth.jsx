import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function CitizenshipBirth() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>Citizenship by Birth</h1>

        <p>
          Citizenship by Birth is the automatic acquisition of Irish citizenship
          for a child born in Ireland. This principle is based on the jus soli,
          meaning that anyone born on Irish soil is automatically entitled to
          Irish citizenship, regardless of the nationality of their parents.
          This right is enshrined in the Irish Constitution and allows
          individuals to claim Irish nationality from birth.
        </p>

        <h2>Key Features of Citizenship by Birth</h2>
        <ul>
          <li>
            <h3>Eligibility</h3>
            <p>
              Any child born in Ireland, regardless of whether their parents are
              Irish citizens or non-EEA nationals, automatically becomes an
              Irish citizen. This principle applies to all children born within
              the territory of the state.
            </p>
          </li>
          <li>
            <h3>Rights</h3>
            <p>
              Children born in Ireland enjoy the same rights as Irish nationals,
              including access to public services, education, and the right to
              live, work, and travel freely within the European Union. They may
              also have the option to apply for an Irish passport in the future.
            </p>
          </li>
          <li>
            <h3>Duration</h3>
            <p>
              The acquisition of citizenship by birth is immediate upon the
              child’s birth in Ireland. There is no application process
              required, as citizenship is granted automatically by law.
            </p>
          </li>
          <li>
            <h3>Application for Documentation</h3>
            <p>
              Although citizenship is automatic, parents may wish to apply for
              an Irish birth certificate or a passport for their child to
              formally establish and document their Irish nationality. This can
              be done through the Irish Naturalisation and Immigration Service
              (INIS).
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we provide support to parents in understanding the
          rights associated with citizenship by birth and the steps needed to
          obtain official documentation, such as birth certificates or
          passports, for their children.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
