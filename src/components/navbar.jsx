import React from "react";
import Logo from "../images/icons/logo.svg";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarleft">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbarright">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Tax Advisory</li>
          <li>Work Permits</li>
          <li>Immigration Stamps</li>
          <li>Company Registration </li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
