import React from "react";

export default function ServiceCard({ icon: Icon, header, content }) {
  return (
    <div className="aboutservicecard">
      <div className="aboutservicecardicon">
        <Icon />
      </div>
      <div className="aboutservicecardcontent">
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
