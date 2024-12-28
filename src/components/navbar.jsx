import React, { useState, useEffect } from "react";
import Logo from "../images/icons/logo.svg";
import "../styles/navbar.css";
import { FaGripLines } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  return (
    <div className="navbar">
      <div className="navbarleft">
        <img src={Logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className="navbarright">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            Tax Advisory
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
            Work Permits{" "}
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/csep")}>CSEP</li>
              <li onClick={() => navigate("/gep")}>GEP</li>
              <li onClick={() => navigate("/stamp-1g")}>Stamp 1G Extension</li>
            </ul>
          </li>
          <li>
            Immigration Stamps{" "}
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
          <li>Company Registration</li>
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
            <li onClick={() => navigate("/")}>About</li>
            <li>Tax Advisory</li>
            <li>Work Permits</li>
            <li>Immigration Stamps</li>
            <li>Company Registration </li>
            <li>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
