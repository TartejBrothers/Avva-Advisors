import React from "react";
import ImmigrationHeaderRight from "../images/immigration.svg";
export default function ImmigrationHeader() {
  return (
    <div className="immigrationheaderbg">
      <div className="taxadvisoryheader">
        <div className="taxadvisoryheaderleft">
          <h2>Immigration Stamps</h2>
          <p>
            Navigating the immigration process in Ireland can be complex, but
            Avva Advisors is here to simplify it for you. Our expert team
            provides comprehensive immigration application support to
            individuals and businesses, ensuring a smooth and efficient
            experience. Whether you are applying for a visa, work permit,
            residence permit, or family reunification, we guide you through
            every step of the process.
          </p>
        </div>
        <div className="taxadvisoryheaderright">
          <img src={ImmigrationHeaderRight} alt="Tax Advisory" />
        </div>
      </div>
    </div>
  );
}
