import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/pricing.css";
import FeeCard from "../components/feecard";
import { useNavigate } from "react-router-dom";
export default function Pricing() {
  const navigate = useNavigate();
  return (
    <div className="pricingpage">
      <Navbar />
      <div className="pricingmainbody">
        <div className="pricingmainbodybg">
          <FeeCard />
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
