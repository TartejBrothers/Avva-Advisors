import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/agentic-ai.css";
import ContactForm from "../components/contactform";
import CompanyRegistrationRight from "../images/companyregistration.svg";
import CheckboxPoints from "../elements/checkbox-points";
import ServiceCard from "../components/servicecard";
import { MdSupportAgent } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
export default function AgenticAI() {
  const checkboxPoints = [
    "Understand client requests",
    "Retrieve relevant information",
    "Execute multi-step workflows",
    "Generate documents and reports",
    "Interact with business systems",
    "Escalate complex cases to human advisors",
    "Learn from organisational knowledge bases",
  ];
  return (
    <div className="agentic-ai-page">
      <Navbar />
      <div className="agentic-ai-bg">
        <div className="taxadvisoryheader">
          <div className="taxadvisoryheaderleft">
            <h2>Agentic AI Solutions for Tax Agents and Accountants</h2>
            <h5>Transform Your Tax Practice with AI-Powered Automation</h5>
            <p>
              At Avva Advisors, we develop intelligent Agentic AI solutions
              specifically designed for tax agents, accountants, bookkeeping
              firms, and financial advisors. Our AI agents can automate
              repetitive administrative tasks, assist with client interactions,
              streamline tax workflows, and improve operational efficiency while
              allowing professionals to focus on higher-value advisory services.
            </p>
          </div>
        </div>
      </div>
      <div className="taxadvisorybody">
        <h1>What is an Agentic AI?</h1>
        <h3>Unlike traditional chatbots, Agentic AI systems can:</h3>
        <div className="checkbox-points">
          {checkboxPoints.map((point, index) => (
            <CheckboxPoints key={index} point={point} />
          ))}
        </div>
      </div>
      <div className="homegraybg">
        <div className="aboutourservices">
          <h1 className="homeheadertext">Solutions We Offer</h1>

          <div className="aboutservicesrow agentic-service-card">
            <ServiceCard
              icon={MdSupportAgent}
              header="Client Support AI Agent"
              subheader="Provide instant responses to common client queries such as:"
              points={[
                "Income Tax Returns",
                "Form 11 submissions",
                "Form 12 submissions",
                "Tax credits and reliefs",
                "CGT obligations",
                "Help to Buy Scheme",
                "First Home Scheme",
                "ROS registration support",
                "PAYE and self-assessment guidance",
              ]}
            />

            <ServiceCard
              icon={FaFileSignature}
              header="Client Onboarding Agent"
              subheader="Automate the onboarding process by:"
              points={[
                "Collecting client information",
                "Requesting required documents",
                "Performing compliance checks",
                "Generating engagement documents",
                "Creating client records",
                "Scheduling consultations",
                "Reduce onboarding time significantly while maintaining compliance standards",
              ]}
            />

            <ServiceCard
              icon={GrDocumentConfig}
              header="Tax Documentation Assistant"
              subheader="Automate document management activities including:"
              points={[
                "Document collection",
                "Information extraction",
                "Categorisation of receipts and invoices",
                "Tax document validation",
                "Missing document identification",
                "Client reminders",
              ]}
            />

            <ServiceCard
              icon={FaNetworkWired}
              header="Workflow Automation Agent"
              subheader="Automate routine operational tasks such as:"
              points={[
                "Annual return reminders",
                "Tax deadline notifications",
                "Client follow-ups",
                "Revenue correspondence tracking",
                "Internal task management",
                "Case status updates",
              ]}
            />

            <ServiceCard
              icon={GiGiftOfKnowledge}
              header="Internal Knowledge Agent"
              subheader="Provide your team with immediate access to:"
              points={[
                "Tax legislation references",
                "Revenue guidance",
                "Internal procedures",
                "Compliance checklists",
                "Practice knowledge bases",
                "Standard operating procedures",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="taxadvisorybody">
        <h1>Benefits for Tax Practices</h1>
        <h3>Increased Productivity</h3>
      </div>
      <div className="homecontactbg">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
