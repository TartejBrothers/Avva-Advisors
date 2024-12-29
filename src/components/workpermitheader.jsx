import React from "react";
import WorkPermitRight from "../images/workpermit.svg";
export default function WorkPermitHeader() {
  return (
    <div className="workpermitheaderbg">
      <div className="taxadvisoryheader">
        <div className="taxadvisoryheaderleft">
          <h2>Work Permit</h2>
          <p>
            At Avva Advisors, we provide expert guidance on securing work
            permits in Ireland, ensuring a smooth process for individuals and
            businesses navigating the country’s employment and immigration
            regulations. Ireland offers various types of work permits designed
            to meet the needs of skilled professionals, employers, and
            international talent, including the Critical Skills Employment
            Permit, General Employment Permit, and permits for intra-company
            transfers.
          </p>
        </div>
        <div className="taxadvisoryheaderright">
          <img src={WorkPermitRight} alt="Tax Advisory" />
        </div>
      </div>
    </div>
  );
}
