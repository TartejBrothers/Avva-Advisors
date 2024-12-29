import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/contact.css";
import ContactForm from "../components/contactform";
import CompanyRegistrationRight from "../images/companyregistration.svg";
export default function Contact() {
  return (
    <div className="contactus">
      <Navbar />
      <div className="companyregistrationbg">
        <div className="taxadvisoryheader">
          <div className="taxadvisoryheaderleft">
            <h2>Company Registration</h2>
            <p>
              Company registration in Ireland involves choosing a business
              structure, such as a private limited company or sole trader, and
              filing necessary documents with the Companies Registration Office.
              This process ensures legal recognition and compliance with Irish
              law. Registering a company provides benefits like limited
              liability, access to tax incentives, and the ability to trade both
              domestically and internationally.
            </p>
          </div>
          <div className="taxadvisoryheaderright">
            <img src={CompanyRegistrationRight} alt="ImmigrationHeaderRight" />
          </div>
        </div>
      </div>
      <div className="taxadvisorybody">
        <h1>Company Registration in Ireland</h1>

        <p>
          Company Registration in Ireland refers to the legal process of
          establishing a business entity under Irish law. This involves choosing
          a suitable company structure, such as a private limited company,
          public limited company, or sole trader, and registering it with the
          Companies Registration Office (CRO). Proper registration ensures that
          the company is recognized as a legal entity and can operate within
          Ireland and internationally.
        </p>

        <h2>Key Features of Company Registration</h2>
        <ul>
          <li>
            <h3>Types of Business Structures</h3>
            <p>
              Depending on the nature of the business, the choice of structure
              can vary. Common options include a private limited company (LTD),
              a public limited company (PLC), and sole trader. Each has distinct
              legal, financial, and tax implications.
            </p>
          </li>
          <li>
            <h3>Process</h3>
            <p>
              The company registration process includes reserving a unique
              company name, preparing and filing the necessary documents such as
              the constitution or memorandum and articles of association, and
              paying the required registration fee. Companies must also appoint
              directors and shareholders, and maintain records and statutory
              books.
            </p>
          </li>
          <li>
            <h3>Legal Requirements</h3>
            <p>
              Companies must comply with all legal requirements, including tax
              registration, annual financial reporting, and adherence to Irish
              company law. They are also required to submit annual returns to
              the CRO and pay any relevant fees.
            </p>
          </li>
          <li>
            <h3>Advantages</h3>
            <p>
              Registering a company in Ireland provides benefits such as limited
              liability for shareholders, access to government grants and
              incentives, a structured corporate framework, and the ability to
              legally operate and trade in Ireland and abroad.
            </p>
          </li>
        </ul>

        <p>
          At Avva Advisors, we provide expert guidance and support throughout
          the company registration process in Ireland. Our team assists with
          name reservation, document preparation, compliance with legal
          requirements, and filing with the CRO.
        </p>
      </div>
      <div className="contactusmainbody">
        <div className="contactformbodybg">
          <ContactForm mail={"startup@avvadvisors.com"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
