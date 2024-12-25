import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/contactform.css";
export default function ContactForm() {
  return (
    <div className="contactform">
      <div className="contactformtop">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          perferendis?
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
            <p>email@gmail.com</p>
          </div>
          <div className="contactinformationrow">
            <div className="contactinformationbox">
              <FaLocationDot />
            </div>
            <p>123, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
