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
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbarright">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li>About</li>
          <li>Tax Advisory</li>
          <li>Work Permits</li>
          <li>Immigration Stamps</li>
          <li>Company Registration </li>
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
              <img src={Logo} alt="Logo" />
            </div>
            <div className="navbarrightmobile" onClick={toggleDropdown}>
              <FaGripLines />
            </div>
          </div>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
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
