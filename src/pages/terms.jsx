import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/contact.css";

export default function Terms() {
  return (
    <div className="contactus">
      <Navbar />
      <div className="contactusmainbody">
        <div className="contactformbodybg taxadvisorybody">
          <h1 className="text-center">Terms of Service</h1>
          <p>
            By using the services of AVVA Tax and Immigration, you agree to our
            Terms of Service, which govern your use of our website and services.
            Our services include but are not limited to taxation, immigration,
            financial advisory, and company registration. We reserve the right
            to modify these terms at any time. You must provide accurate
            information and comply with all applicable laws when using our
            services. Our firm is not responsible for any issues arising from
            inaccurate data or non-compliance.
          </p>
          <h2>1. Introduction</h2>
          <p>
            Avva Tax and Immigration specializes in delivering comprehensive tax
            and immigration solutions tailored for both corporations and
            individuals. With over four years of industry experience, our
            consultancy is committed to providing personalized support and
            expertise in navigating the complex landscape of immigration law,
            particularly for the non-EU population in Ireland.
          </p>
          <h2>2. Services Provided</h2>
          <ul>
            <li>Tax Filing</li>
            <li>Immigration Services</li>
            <li>Financial Advisory</li>
            <li>Startup</li>
          </ul>
          <h2>3. Client Responsibilities</h2>
          <ul>
            <li>
              <strong>Provide Accurate Information:</strong> Furnish complete
              and accurate details regarding their immigration history, status,
              and any relevant personal information.
            </li>
            <li>
              <strong>Documentation:</strong> Supply all requested documentation
              promptly and maintain open communication regarding any
              developments in their circumstances.
            </li>
            <li>
              <strong>Cooperation:</strong> Respond to our inquiries in a timely
              manner and notify us of any changes that could affect their
              immigration applications.
            </li>
          </ul>
          <h2>4. Fees and Payment Terms</h2>
          <ul>
            <li>
              <strong>Service Fees:</strong> The fees for our services will be
              communicated clearly at the outset. We may offer a detailed
              breakdown of costs based on the specific services required.
            </li>
            <li>
              <strong>Payment Schedule:</strong> Payment is due upon acceptance
              of our proposal, unless otherwise agreed in writing. In certain
              cases, a deposit may be required before commencement of services.
            </li>
            <li>
              <strong>Refund Policy:</strong> All fees are non-refundable unless
              explicitly stated otherwise in writing. In cases where services
              cannot be rendered due to circumstances beyond our control, we may
              provide a partial refund at our discretion.
            </li>
          </ul>
          <h2>5. Confidentiality</h2>
          <p>
            We prioritize the privacy of our clients. All personal information
            and documentation provided to Avva Tax and Immigration will be
            treated as confidential. We will not disclose any client information
            to third parties without explicit consent, unless required by law or
            relevant authorities.
          </p>
          <h2>6. Limitation of Liability</h2>
          <p>
            While we aim for a 100% success rate in immigration applications, we
            cannot guarantee the outcome of any application. Avva Tax and
            Immigration shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of our
            services or from any delay or failure in the provision of services.
          </p>
          <h2>7. Termination of Services</h2>
          <p>
            Either party may terminate the service agreement with written notice
            if there is a breach of these Terms. In the event of termination,
            the client is responsible for payment of any outstanding fees for
            services rendered prior to the termination date.
          </p>
          <h2>8. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and construed in
            accordance with the laws of Ireland. Any disputes arising under or
            in connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of Ireland.
          </p>
          <h2>9. Amendments</h2>
          <p>
            Avva Tax and Immigration reserves the right to modify these Terms at
            any time. Clients will be notified of any significant changes.
            Continued use of our services following any modifications
            constitutes acceptance of the updated Terms.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
