import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/contactform.css";
export default function ContactForm({ mail }) {
  const [selectedIssue, setSelectedIssue] = useState("");

  const handleChange = (event) => {
    setSelectedIssue(event.target.value);
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
            <p>+1234567890</p>
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
            <p>
              Monday - Friday: 6:00 PM - 8:00 PM
              <br />
              Saturday - Sunday: 10:00 AM - 2:00 PM <br />
            </p>
          </div>
          <button className="contactleftbutton">
            <FaWhatsapp />
            <p>us At 911234567890</p>
          </button>
        </div>
        <div className="contactformbodyright">
          <form>
            <div className="inputdiv">
              <div className="inputdivhalf">
                <label htmlFor="firstname">First Name</label>

                <input
                  type="text"
                  name="firstname"
                  placeholder="eg: Josh"
                  required
                />
              </div>
              <div className="inputdivhalf">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="eg: Brown"
                  required
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="inputdivfull"
                  required
                  placeholder="eg: joshbrown@gmail.com"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="inputdivfull"
                  required
                  placeholder="eg: 1234567890"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="issue">Issue Type</label>
                <select
                  id="issueType"
                  name="issueType"
                  value={selectedIssue}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Choose An Issue
                  </option>
                  <option value="stamps">Stamps</option>
                  <option value="work-permits">Work Permits</option>
                  <option value="taxes">Taxes</option>
                  <option value="startup">Startup</option>
                </select>
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
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
