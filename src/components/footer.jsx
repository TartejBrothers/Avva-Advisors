import React from "react";
import Logo from "../images/icons/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="footermain">
      <div className="footertop">
        <div className="footertopleft">
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
            dignissimos accusantium nesciunt quod dolor iure deserunt hic?
            Expedita quisquam beatae dolor magnam vitae doloribus?
          </p>
        </div>
        <div className="footertopcenter">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Tax Advisory</li>
            <li>Work Permits</li>
            <li>Immigration Stamps</li>
            <li>Company Registration </li>
          </ul>
        </div>
        <div className="footertopright">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FaPhoneAlt />
              +1234567890
            </li>
            <li>
              <IoMail />
              email@gmail.com
            </li>
          </ul>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="footerbottom">
        <div className="footerbottomcontent">
          <p>© 2024 All Rights Reserved</p>
          <div className="footerbottomright">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
