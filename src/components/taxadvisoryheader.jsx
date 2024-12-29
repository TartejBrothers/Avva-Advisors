import React from "react";
import TaxAdvisoryRight from "../images/taxadvisory.svg";
export default function TaxAdvisoryHeader() {
  return (
    <div className="taxadvisoryheaderbg">
      <div className="taxadvisoryheader">
        <div className="taxadvisoryheaderleft">
          <h2>Tax Advisory</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            perferendis?
          </p>
        </div>
        <div className="taxadvisoryheaderright">
          <img src={TaxAdvisoryRight} alt="Tax Advisory" />
        </div>
      </div>
    </div>
  );
}
