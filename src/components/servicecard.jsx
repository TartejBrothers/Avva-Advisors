import React from "react";

export default function ServiceCard({
  icon: Icon,
  header,
  subheader,
  content,
  points,
}) {
  return (
    <div className="aboutservicecard">
      <div className="aboutservicecardicon">
        <Icon />
      </div>
      <div className="aboutservicecardcontent">
        <h4>{header}</h4>
        {subheader && <h5>{subheader}</h5>}
        {content ? (
          <p>{content}</p>
        ) : (
          points && (
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}
