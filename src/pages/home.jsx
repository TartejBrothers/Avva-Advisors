import React from "react";
import "../styles/home.css";
import HomeRightImage from "../images/homeright.svg";
import Navbar from "../components/navbar";
import WhyUsImage from "../images/whyus.jpeg";
import TestimonialCard from "../components/testimonialcard";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
export default function Home() {
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
            <button>Book Consulation</button>
            <button>Contact Us</button>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illo, enim?
                </li>
                <li>
                  Iusto, eaque atque. Eligendi repellendus assumenda tenetur
                  distinctio dolore laudantium.
                </li>
                <li>
                  Nobis ratione iusto beatae quod, maxime amet minima. Eligendi,
                  exercitationem?
                </li>
                <li>
                  Nobis ratione iusto beatae quod, maxime amet minima. Eligendi,
                  exercitationem?
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
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={5}
              />
              <TestimonialCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={4}
              />
              <TestimonialCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={3}
              />
              <TestimonialCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={4}
              />
              <TestimonialCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={4}
              />
              <TestimonialCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                user="John Doe"
                rating={4}
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
                  <li>Form 11</li>
                  <li>Form 12</li>
                  <li>Financial Advisory</li>
                  <li>Pension Advisory</li>
                </ul>
              </div>
              <button>Learn More</button>
            </div>

            <div className="servicecard">
              <div className="servicecardtop">
                <h2>Work Permits</h2>
                <ul>
                  <li>CSEP</li>
                  <li>GEP</li>
                  <li>Stamp 1G Extension</li>
                </ul>
              </div>

              <button>Learn More</button>
            </div>
            <div className="servicecard">
              <div className="servicecardtop">
                <h2>Immigration Stamps</h2>
                <ul>
                  <li>Stamp 0</li>
                  <li>VFS Application Support</li>
                  <li>Stamp 5</li>
                  <li>Stamp 6</li>
                  <li>Adult Naturalisation</li>
                  <li>Child Naturalisation</li>
                  <li>Citizenship by Birth</li>
                </ul>
              </div>

              <button>Learn More</button>
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
