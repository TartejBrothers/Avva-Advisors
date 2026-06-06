import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/software-development.css";
import ContactForm from "../components/contactform";
import SoftwareServiceCard from "../components/software-servicecard";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function SoftwareDevelopment() {
  const softwareServices = [
    {
      header: "Business Management Systems",
      subheader:
        "Centralise your operations through custom-built systems designed to streamline processes and improve efficiency.",
      points: [
        "Customer management",
        "Sales tracking",
        "Job management",
        "Service delivery",
        "Team collaboration",
        "Task management",
        "Reporting and analytics",
      ],
    },
    {
      header: "Customer Portals",
      subheader:
        "Provide customers with secure access to important information and self-service capabilities.",
      points: [
        "Documents",
        "Service requests",
        "Project updates",
        "Invoices",
        "Support tickets",
        "Communication history",
      ],
    },
    {
      header: "ERP and Workflow Systems",
      subheader:
        "Integrate multiple business functions into a single platform to improve visibility and reduce duplication.",
      points: [
        "Finance",
        "Operations",
        "Procurement",
        "Inventory",
        "Sales",
        "Reporting",
      ],
    },
    {
      header: "Data Analytics & Reporting",
      subheader:
        "Turn business data into actionable insights with powerful reporting and analytics tools.",
      points: [
        "Interactive dashboards",
        "KPI tracking",
        "Sales analysis",
        "Financial reporting",
        "Operational performance monitoring",
        "Forecasting and trend analysis",
      ],
    },
    {
      header: "System Integrations",
      subheader:
        "Connect your existing systems and eliminate manual data entry through seamless integrations.",
      points: [
        "Xero",
        "QuickBooks",
        "Microsoft 365",
        "Google Workspace",
        "CRM platforms",
        "E-commerce platforms",
        "Payroll systems",
        "Banking platforms",
      ],
    },
    {
      header: "Mobile and Web Applications",
      subheader:
        "Develop custom applications that empower teams and customers from anywhere.",
      points: [
        "Employees",
        "Customers",
        "Suppliers",
        "Field teams",
        "Management teams",
        "Accessible anytime, anywhere",
      ],
    },
  ];
  const whyChooseUs = [
    {
      header: "Business-First Approach",
      content:
        "We focus on solving real business challenges and delivering practical software solutions that create measurable value.",
    },
    {
      header: "Affordable Development",
      content:
        "Cost-effective software solutions tailored to the needs, priorities, and budgets of small and medium-sized businesses.",
    },
    {
      header: "Scalable Platforms",
      content:
        "Flexible systems designed to support your current operations while adapting to future business growth.",
    },
    {
      header: "Ongoing Support",
      content:
        "Reliable maintenance, enhancements, and technical support to ensure your systems continue to perform effectively.",
    },
    {
      header: "Local Expertise",
      content:
        "Deep understanding of Irish business requirements, compliance considerations, and the challenges faced by SMEs.",
    },
    {
      header: "Tailored Software",
      content:
        "Custom portals, dashboards, and business applications designed to streamline operations and drive growth.",
    },
  ];
  return (
    <div className="software-development-page">
      <Navbar />
      <div className="software-development-bg">
        <div className="taxadvisoryheader">
          <div className="taxadvisoryheaderleft">
            <h2>Custom Software Development for Small Businesses</h2>
            <h5>Practical Software Solutions Built Around Your Business</h5>
            <p>
              Many small businesses rely on spreadsheets, manual processes, and
              disconnected systems that limit growth and create unnecessary
              administrative work.
              <br />
              At Avva Advisors, we develop affordable, scalable software
              solutions that help businesses automate operations, improve
              efficiency, and gain better visibility into their performance.
            </p>
          </div>
        </div>
      </div>
      <div className="taxadvisorybody">
        <h1>Our Software Development Services</h1>
        <h3>
          <b>AI Chatbots & Agentic AI Solutions -</b> Intelligent Digital
          Employees for Your Business
        </h3>
        <p>
          Move beyond traditional software with AI-powered assistants that can
          interact with customers, automate business processes, retrieve
          information, and perform tasks across multiple systems.
          <br /> Unlike standard chatbots that simply answer questions, Agentic
          AI systems can understand objectives, make decisions within defined
          rules, and complete multi-step business workflows.
        </p>
      </div>
      <div className="homegraybg">
        <div className="aboutourservices">
          <h1 className="homeheadertext">
            Enterprise Software & Workflow Solutions
          </h1>
          <div className="aboutservicesrow agentic-service-card">
            {softwareServices.map((service, index) => (
              <SoftwareServiceCard
                key={index}
                header={service.header}
                subheader={service.subheader}
                points={service.points}
              />
            ))}
          </div>
          <div className="w-[100%] flex justify-center">
            <a href="#contact">
              <button className="callout-button">
                <p> Request a Proposal</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="taxadvisorybody">
        <h1 className="text-center">
          Why Small Businesses Choose Avva Advisors
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          initialSlide={2}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {whyChooseUs.map((reason, index) => (
            <SwiperSlide key={index}>
              <div className="why-choose-us-card">
                <h2>{reason.header}</h2>
                <p>{reason.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="homecontactbg" id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
