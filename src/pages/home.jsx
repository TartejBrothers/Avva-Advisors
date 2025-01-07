import React from "react";
import "../styles/home.css";

import Navbar from "../components/navbar";
import WhyUsImage from "../images/whyus.jpeg";
import TestimonialCard from "../components/testimonialcard";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="homemain">
      <Navbar />
      <div className="homeheader">
        <div className="homeheadermain">
          <h1>
            AVVA <br />
            ADVISORS
          </h1>
          <p>
            At AVVA Tax and Immigration, we are dedicated to providing
            comprehensive, reliable, and efficient services to individuals and
            businesses navigating the complex landscapes of taxation,
            immigration, personal finance advisory, and company registration in
            Ireland. Our firm stands out through its commitment to excellence,
            personalized approach, and a deep understanding of both local and
            international regulations.
          </p>
          <div className="buttonrow mt-7">
            <a href="https://calendly.com/contact-avvaadvisors" target="_blank">
              <button>Book Consulation</button>
            </a>
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="homebody">
        <div className="homebodywhyusbg">
          <div className="homebodywhyus">
            <div className="homebodywhyusleft">
              <h1 className="homeheadertext">Why Us?</h1>
              <ul>
                <li>
                  <strong>Expertise and Experience:</strong> Our team’s
                  extensive knowledge and experience in both tax and immigration
                  laws ensure that our clients receive the most accurate and
                  effective advice.
                </li>
                <li>
                  <strong>Personalized Service:</strong> We understand that
                  every client’s situation is unique. We offer personalized
                  solutions tailored to meet individual and business-specific
                  needs.
                </li>
                <li>
                  <strong>Client-Centered Approach:</strong> At AVVA, we
                  prioritize our clients' goals and concerns, working closely
                  with them to achieve successful outcomes.
                </li>
                <li>
                  <strong>Integrity and Transparency:</strong> We maintain the
                  highest standards of integrity, ensuring transparent and
                  ethical practices in all our services.
                </li>
              </ul>
            </div>
            <div className="homebodywhyusright">
              <div className="homebodywhyusrightrow">
                <img src={WhyUsImage} alt="Why Us" />
              </div>
            </div>
          </div>
        </div>
        <div className="hometestiomonailsbg ">
          <div className="hometestiomonials">
            <h1 className="homeheadertext">Client Testimonials</h1>
            <div className="testimonialsrow">
              <TestimonialCard
                content="Avva Advisors made the daunting process of tax filing effortless and stress-free. Their team was incredibly knowledgeable, answering all my queries with patience and professionalism. They maximized my tax benefits while ensuring compliance with regulations. I couldn’t have asked for a better experience—highly recommended."
                user="Shravanth"
                rating={5}
              />
              <TestimonialCard
                content="The expert advice from Avva Advisors completely transformed my financial planning. Their personalized strategies helped me secure my retirement while staying on track with my short-term goals. Their attention to detail and ability to simplify complex financial concepts were truly impressive. I now feel confident about my financial future!"
                user="Kiran"
                rating={5}
              />
              <TestimonialCard
                content="Avva Advisors provided exceptional guidance for my dependent visa application from India. They patiently addressed all my concerns, ensuring the documentation was thorough and accurate. Their proactive updates and personalized support made the entire process smooth and stress-free. Thanks to their expertise, my visa was approved without a hitch. I can’t thank them enough for their incredible service."
                user="Sid"
                rating={5}
              />
              <TestimonialCard
                content="Avva Advisors made my work permit filing process seamless and hassle-free. Their expertise and attention to detail ensured all my documents were in perfect order, and they kept me updated at every step. Their professional approach gave me peace of mind, and my application was approved without any delays. I highly recommend their services to anyone navigating permit filing."
                user="Deniz"
                rating={5}
              />
            </div>
          </div>
        </div>
        <div className="homeourservices">
          <h1 className="homeheadertext">Our Services</h1>
          <div className="servicecardrow">
            <div className="servicecard">
              <div className="servicecardtop">
                <h2>Tax Advisory</h2>
                <ul>
                  <li onClick={() => navigate("/form11")}>Form 11</li>
                  <li onClick={() => navigate("/form12")}>Form 12</li>
                  <li onClick={() => navigate("/financial-advisory")}>
                    Financial Advisory
                  </li>{" "}
                  <li onClick={() => navigate("/pensions-advisory")}>
                    Pensions Advisory
                  </li>
                </ul>
              </div>
              <button onClick={() => navigate("/form11")}>Learn More</button>
            </div>

            <div className="servicecard">
              <div className="servicecardtop">
                <h2>Work Permits</h2>
                <ul>
                  <li onClick={() => navigate("/csep")}>CSEP</li>
                  <li onClick={() => navigate("/gep")}>GEP</li>
                  <li onClick={() => navigate("/stamp-1g")}>
                    Stamp 1G Extension
                  </li>
                </ul>
              </div>

              <button onClick={() => navigate("/csep")}>Learn More</button>
            </div>
            <div className="servicecard">
              <div className="servicecardtop">
                <h2>Immigration Stamps</h2>
                <ul>
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
              </div>

              <button onClick={() => navigate("/stamp-0")}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="homecontactbg">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
