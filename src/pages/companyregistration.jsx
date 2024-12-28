import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/contact.css";
import ContactForm from "../components/contactform";
import CompanyRegistrationForm from "../components/companyregistrationform";
export default function Contact() {
  return (
    <div className="contactus">
      <Navbar />
      <div className="contactusmainbody">
        <div className="contactformbodybg">
          <CompanyRegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
