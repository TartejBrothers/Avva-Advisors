import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/contactform.css";
export default function CompanyRegistrationForm() {
  return (
    <div className="contactform registerform">
      <div className="contactformtop">
        <h2>Company Registration</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          perferendis?
        </p>
      </div>
      <div className="registerformbody">
        {/* <div className="contactformbodyleft">
          <h2>Why Register?</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur cumque asperiores qui! Sunt adipisci, esse eaque aliquid
            enim iusto saepe repudiandae! Quidem consequuntur laboriosam,
            aspernatur quo qui ducimus atque aperiam.
          </p>
        </div> */}
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
                  required
                  placeholder="eg: 1234567890"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="phone">Whats Your Budget?</label>
                <input
                  type="number"
                  name="phone"
                  required
                  placeholder="eg: $500"
                />
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="message">What Is the Company Type?</label>
                <textarea
                  name="message"
                  placeholder="eg: Private Limited Company"
                ></textarea>
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivfull">
                <label htmlFor="message">
                  Any Other Important Information?
                </label>
                <textarea
                  name="message"
                  placeholder="eg: I want to register a company with 2 directors"
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
