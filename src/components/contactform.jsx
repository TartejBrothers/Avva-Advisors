import React, { useState, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/contactform.css";
import emailjs from "@emailjs/browser";
import { IoTimeSharp } from "react-icons/io5";
export default function ContactForm({ mail }) {
  const [selectedIssue, setSelectedIssue] = useState("");
  const formRef = useRef();
  const handleChange = (event) => {
    setSelectedIssue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert(
            "Thanks for contacting us. Our AVVA Advisor will reach out to you."
          );
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <div className="contactform">
      <div className="contactformtop">
        <h2>Contact Us</h2>
        <p>
          We’re here to assist you with all your financial, tax, and immigration
          needs in Ireland. Whether you need advice on tax filing, company
          registration, immigration support, or any other financial advisory
          services, our experienced team is ready to help.
        </p>
      </div>
      <div className="contactformbody">
        <div className="contactformbodyleft">
          <h2>Contact Information</h2>
          <div className="contactinformationrow">
            <div className="contactinformationbox">
              <FaPhoneAlt />
            </div>
            <p>0892241645</p>
          </div>
          <div className="contactinformationrow">
            <div className="contactinformationbox">
              <IoMail />
            </div>

            <p>{mail ?? "contact@avvadvisors.com"}</p>
          </div>
          <div className="contactinformationrow">
            <div className="contactinformationbox">
              <FaLocationDot />
            </div>
            <p>Newcastle Village, Dublin 22, Ireland</p>
          </div>
          <div className="contactinformationrow">
            <div className="contactinformationbox">
              <IoTimeSharp />
            </div>
            <p>
              Monday - Friday: 6:00 PM - 8:00 PM
              <br />
              Saturday - Sunday: 10:00 AM - 2:00 PM <br />
            </p>
          </div>
          <button className="contactleftbutton">
            <FaWhatsapp />
            <p>us At 0892241645</p>
          </button>
        </div>
        <div className="contactformbodyright">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="inputdiv">
              <div className="inputdivhalf">
                <label htmlFor="from_first_name">First Name</label>

                <input
                  type="text"
                  name="from_first_name"
                  placeholder="eg: Josh"
                  required
                />
              </div>
              <div className="inputdivhalf">
                <label htmlFor="from_last_name">Last Name</label>
                <input
                  type="text"
                  name="from_last_name"
                  placeholder="eg: Brown"
                  required
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="from_email">Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="inputdivfull"
                  required
                  placeholder="eg: joshbrown@gmail.com"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="from_phone">Phone Number</label>
                <input
                  type="number"
                  name="from_phone"
                  className="inputdivfull"
                  required
                  placeholder="eg: 1234567890"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="from_issue">Issue Type</label>
                <select
                  id="issueType"
                  name="from_issue"
                  value={selectedIssue}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose An Issue
                  </option>
                  <option value="stamps">Stamps</option>
                  <option value="work-permits">Work Permits</option>
                  <option value="taxes">Taxes</option>
                  <option value="startup">Startup</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="issue">Message</label>
                <textarea
                  name="issue"
                  required
                  placeholder="eg: Help with taxes"
                ></textarea>
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
