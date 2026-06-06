import React from "react";

export default function SoftwareServiceCard({ header, subheader, points }) {
  return (
    <div className="software-servicecard">
      <h2>{header}</h2>
      <h4>{subheader}</h4>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
