import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImmigrationHeader from "../../components/immigrationheader";
import ContactForm from "../../components/contactform";
import "../../styles/taxadvisory.css";

export default function Vfs() {
  return (
    <div className="taxadvisorymain">
      <Navbar />
      <ImmigrationHeader />
      <div className="taxadvisorybody">
        <h1>VFS Application Support</h1>

        <p>
          At Avva Advisors, we provide expert VFS (Visa Facilitation Services)
          application support to individuals applying for visas to Ireland.
          Whether you are applying for a tourist visa, student visa, work visa,
          or family reunification visa, we guide you through the entire process,
          ensuring a smooth and efficient experience from start to finish.
        </p>

        <h2>Types of Visas We Support</h2>
        <ul>
          <li>Dependent Stamp 1G</li>
          <li>Student Stamp 2</li>
          <li>Employment Permit Stamp 1</li>
          <li>Children Stamp 3</li>
        </ul>

        <h2>Key Services Include:</h2>
        <ul>
          <li>
            <h3>Document Preparation</h3>
            <p>
              We assist you in gathering, organizing, and preparing all
              necessary documents required by VFS for visa applications. This
              includes proof of identity, financial stability, employment or
              study details, and any other supporting documents specific to your
              visa type.
            </p>
          </li>
          <li>
            <h3>Form Filling and Submission</h3>
            <p>
              Our team helps you complete visa application forms accurately and
              submits them to VFS on your behalf. We ensure that all information
              is filled correctly to avoid delays or rejections.
            </p>
          </li>
          <li>
            <h3>Appointment Scheduling</h3>
            <p>
              We can help schedule appointments with VFS for biometric data
              collection and visa interviews. This includes ensuring you have
              all necessary documentation and are prepared for the appointment.
            </p>
          </li>
          <li>
            <h3>Follow-Up and Status Monitoring</h3>
            <p>
              We keep track of your application status, follow up with VFS if
              necessary, and provide timely updates on the progress of your visa
              application.
            </p>
          </li>
        </ul>

        <p>
          Our goal is to simplify the VFS application process for you, making
          sure that every step is handled efficiently so you can focus on other
          important aspects of your relocation to Ireland. Whether you are
          applying for yourself or as a family, Avva Advisors is here to provide
          reliable VFS application support.
        </p>
      </div>
      <div className="homecontactbg">
        <ContactForm mail={"stamps@avvaadvisors.com"} />
      </div>
      <Footer />
    </div>
  );
}
