import React, { useState, useEffect } from "react";
import Logo from "../images/icons/logo.svg";
import "../styles/navbar.css";
import { FaGripLines } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setTriggerAnimation(true);
      } else {
        setTriggerAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    if (showDropdown) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowDropdown(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setShowDropdown(true);
    }
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  return (
    <div
      className={`navbar ${triggerAnimation ? "animatenavbar" : ""} 
       `}
    >
      <div className="navbarleft">
        <div className="animatedtextmain">
          <div className={`animatedtext ${triggerAnimation ? "animate" : ""}`}>
            <div className="a">AVVA</div>
          </div>
        </div>

        <div
          className={`animatedtextreplacement ${
            triggerAnimation ? "animate" : ""
          }`}
        >
          <div className="replacementtext">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="navbarright">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li>
            <div className="openablediv">
              Tax Advisory <IoIosArrowDown />
            </div>
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/form11")}>Form 11</li>
              <li onClick={() => navigate("/form12")}>Form 12</li>
              <li onClick={() => navigate("/financial-advisory")}>
                Financial Advisory
              </li>{" "}
              <li onClick={() => navigate("/pensions-advisory")}>
                Pensions Advisory
              </li>
            </ul>
          </li>
          <li>
            <div className="openablediv">
              Work Permits <IoIosArrowDown />
            </div>
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/csep")}>CSEP</li>
              <li onClick={() => navigate("/gep")}>GEP</li>
              <li onClick={() => navigate("/stamp-1g")}>Stamp 1G Extension</li>
            </ul>
          </li>
          <li>
            <div className="openablediv">
              Immigration Stamps <IoIosArrowDown />
            </div>
            <ul className="dropdown-menu">
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
          </li>
          <li onClick={() => navigate("/company-registration")}>
            Company Registration
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </li>
        </ul>
      </div>
      <div className="navbarrightmobile" onClick={toggleDropdown}>
        <FaGripLines />
      </div>
      {showDropdown && (
        <div className={`dropdown ${isAnimating ? "close" : "open"}`}>
          <div className="dropdowntop">
            <div className="dropdowntopleft">
              <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
            </div>
            <div className="navbarrightmobile" onClick={toggleDropdown}>
              <FaGripLines />
            </div>
          </div>
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
      )}
    </div>
  );
}
