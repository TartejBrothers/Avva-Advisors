import React from "react";
import TaxAdvisoryRight from "../images/taxadvisory.svg";
export default function TaxAdvisoryHeader() {
  return (
    <div className="taxadvisoryheaderbg">
      <div className="taxadvisoryheader">
        <div className="taxadvisoryheaderleft">
          <h2>Tax Advisory</h2>
          <p>
            At Avva Tax &amp; Immigration, we specialize in delivering seamless,
            personalized solutions for all your tax and immigration needs in
            Ireland. Our team of experienced tax agents and financial advisors
            is dedicated to simplifying complex processes, helping individuals
            and businesses achieve compliance, optimize finances, and unlock
            opportunities. From income tax filings and corporate tax planning to
            VAT compliance and cross-border taxation, we provide expert guidance
            tailored to your unique circumstances. For expatriates, we offer
            strategic tax planning and residency advice to ensure smooth
            transitions and maximize benefits under Ireland’s tax and Double
            Taxation Treaties.
          </p>
        </div>
        <div className="taxadvisoryheaderright">
          <img src={TaxAdvisoryRight} alt="Tax Advisory" />
        </div>
      </div>
    </div>
  );
}
