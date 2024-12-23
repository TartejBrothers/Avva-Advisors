import React from "react";
import "../styles/home.css";
import HomeRightImage from "../images/homeright.svg";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div className="homemain">
      <Navbar />
      <div className="homeheader">
        <div className="homeheadermain">
          <h1>
            AVVA <br />
            ADVISORS
          </h1>
          <p>
            At AVVA Tax and Immigration, we are dedicated to providing
            comprehensive, reliable, and efficient services to individuals and
            businesses navigating the complex landscapes of taxation,
            immigration, personal finance advisory, and company registration in
            Ireland. Our firm stands out through its commitment to excellence,
            personalized approach, and a deep understanding of both local and
            international regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
