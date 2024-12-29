import React, { useState } from "react";
import Logo from "../images/icons/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "../styles/footer.css";

import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  const navigate = useNavigate();
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
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => toggleSubMenu("tax-advisory")}>
              <div className="openablediv">
                Tax Advisory
                <IoIosArrowDown
                  className={
                    activeMenu === "tax-advisory" ? "rotate180deg" : ""
                  }
                />
              </div>
              {activeMenu === "tax-advisory" && (
                <ul className="submenu">
                  <li onClick={() => navigate("/form11")}>Form 11</li>
                  <li onClick={() => navigate("/form12")}>Form 12</li>
                  <li onClick={() => navigate("/financial-advisory")}>
                    Financial Advisory
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSubMenu("work-permits")}>
              <div className="openablediv">
                Work Permits{" "}
                <IoIosArrowDown
                  className={
                    activeMenu === "work-permits" ? "rotate180deg" : ""
                  }
                />
              </div>
              {activeMenu === "work-permits" && (
                <ul className="submenu">
                  <li onClick={() => navigate("/csep")}>CSEP</li>
                  <li onClick={() => navigate("/gep")}>GEP</li>
                  <li onClick={() => navigate("/stamp-1g")}>
                    Stamp 1G Extension
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSubMenu("immigration-stamps")}>
              <div className="openablediv">
                Immigration Stamps
                <IoIosArrowDown
                  className={
                    activeMenu === "immigration-stamps" ? "rotate180deg" : ""
                  }
                />
              </div>
              {activeMenu === "immigration-stamps" && (
                <ul className="submenu">
                  <li onClick={() => navigate("/stamp-0")}>Stamp 0</li>
                  <li onClick={() => navigate("/vfs-application-support")}>
                    VFS Application Support
                  </li>
                  <li onClick={() => navigate("/stamp-5")}>Stamp 5</li>
                  <li onClick={() => navigate("/stamp-6")}>Stamp 6</li>
                  <li onClick={() => navigate("/adult-naturalisation")}>
                    Adult Naturalisation
                  </li>
                  <li onClick={() => navigate("/child-naturalisation")}>
                    Child Naturalisation
                  </li>
                  <li onClick={() => navigate("/citizenship-by-birth")}>
                    Citizenship by Birth
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => navigate("/company-registration")}>
              Company Registration
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="footertopright">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FaPhoneAlt />
              +353 (0)1 234 5678
            </li>
            <li>
              <IoMail />
              contact@avvadvisors.com
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
