import React from "react";
import "../styles/about.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutImage1 from "../images/aboutpage/1.jpg";
import AboutImage2 from "../images/aboutpage/2.avif";
import ServiceCard from "../components/servicecard";
import { TbTax } from "react-icons/tb";
import { FaGlobe, FaBuilding } from "react-icons/fa";
import ContactForm from "../components/contactform";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutmain">
      <Navbar />
      <div className="aboutmainheader">
        <div className="aboutmainheaderleft">
          <h1> ABOUT US</h1>
        </div>
        <div className="aboutmainheaderright">
          <p>
            AVVA Tax and Immigration is a premier consultancy firm based in
            Ireland, composed of a team of highly skilled professionals with
            extensive experience in tax law and immigration services. Our team
            includes certified financial advisors, experienced immigration
            consultants, tax agents all working together to deliver tailored
            solutions that meet the unique needs of our clients.
          </p>
          <button
            className="contactusbutton"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="aboutmainbody">
        <div className="aboutmainbodyleft">
          <h1 className="homeheadertext">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            possimus et officiis id voluptatem dolor qui architecto beatae
            tenetur aliquid facilis, ullam odit nulla eum consequuntur mollitia
            fugiat quos quae, laborum natus corporis. Atque unde pariatur est
            ducimus voluptatem labore, excepturi aliquid architecto, reiciendis
            quia, nulla non? Saepe repellendus totam ad odio in accusamus,
            facere recusandae vero facilis rem magnam nostrum, maiores
            voluptatibus ex cumque laudantium omnis aspernatur alias ab nesciunt
            quae dolorum! Ut eaque nostrum placeat a velit eligendi esse ratione
            reiciendis minima repellat ab architecto atque, odio magnam ullam
            adipisci dicta accusantium rerum consequuntur nihil! Iusto, est in!
          </p>
          <img src={AboutImage1} alt="" />
        </div>
        <div className="aboutmainbodyright">
          <h1 className="homeheadertext">Why Choose Us?</h1>
          <ul>
            <li>
              <strong>Expertise and Experience:</strong> Our team’s extensive
              knowledge and experience in both tax and immigration laws ensure
              that our clients receive the most accurate and effective advice.
            </li>
            <li>
              <strong>Personalized Service:</strong> We understand that every
              client’s situation is unique. We offer personalized solutions
              tailored to meet individual and business-specific needs.
            </li>
            <li>
              <strong>Client-Centered Approach:</strong> At AVVA, we prioritize
              our clients' goals and concerns, working closely with them to
              achieve successful outcomes.
            </li>
            <li>
              <strong>Integrity and Transparency:</strong> We maintain the
              highest standards of integrity, ensuring transparent and ethical
              practices in all our services.
            </li>
          </ul>
          <img src={AboutImage2} alt="" />
        </div>
      </div>
      <div className="aboutourmission">
        <h1 className="homeheadertext ">Our Mission</h1>
        <p>
          Our mission is to simplify the intricacies of tax and immigration
          processes for our clients, ensuring compliance with all relevant laws
          while maximizing their financial and personal opportunities. We strive
          to provide clarity, confidence, and peace of mind, allowing our
          clients to focus on what they do best.
        </p>
      </div>
      <div className="homegraybg">
        <div className="aboutourservices">
          <h1 className="homeheadertext">What We Offer</h1>

          <div className="aboutservicesrow">
            <ServiceCard
              icon={TbTax}
              header="Individual Tax Services"
              content="Personalized tax planning, filing, and advisory services to
help individuals optimize their tax liabilities."
            />
            <ServiceCard
              icon={FaBuilding}
              header="Corporate Tax Solutions"
              content="Comprehensive support for businesses, including tax
compliance, strategic planning, and representation in tax disputes."
            />
            <ServiceCard
              icon={FaGlobe}
              header="International Taxation"
              content="Expertise in cross-border tax issues, helping clients navigate
the complexities of international tax regulations and treaties."
            />
          </div>
        </div>
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
}
