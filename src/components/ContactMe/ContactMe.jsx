import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-header">Contact Me</h1>

      <div className="contacts">
        <div className="icons">
        <a
          href="mailto:vedarthselat17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="email-link" // Add a class to style the anchor if needed
        >
          <img src="./assets/images/email.png" className="email-image"/>
        </a>

        <a
          href="https://github.com/vedarthselat"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/images/github.png" className="github-image" />
        </a>

        <a href="https://www.linkedin.com/in/vedarth-selat-7096b230b" className="linkedin-link" target="_blank" rel="noopener noreferrer"><img src="./assets/images/linkedin.png" className="linkedin-image"/></a>
        <a
          href=""
          className="phone-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/images/phone.png" className="phone-image" />
        </a>
        </div>
        <div className="email-content">
          <p>vedarthselat17@gmail</p>
        </div>
        <div className="github-content">
          <p>https://github.com/vedarthselat</p>
        </div>
        <div className="linkedin-content">
          <p>https://www.linkedin.com/in/vedarth-selat-7096b230b</p>
        </div>
        <div className="phone-content">
          <p>+1(647)-524-4762</p>
        </div>

      </div>

      {/* <div className="contact-content">
        <div style={{flex: 1}}>
        <a
            href="mailto:vedarthselat17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link" // Add a class to style the anchor if needed
          >
            <ContactInfoCard
              iconUrl="./assets/images/email.png"
              text="Email: vedarthselat17@gmail.com"
            />
          </a>

<a href="https://github.com/vedarthselat" target="_blank" rel="noopener noreferrer">
            <ContactInfoCard
              iconUrl="./assets/images/github.png"
              text="GitHub: https://github.com/vedarthselat"
            />
          </a>
          
        </div>

        <div style={{flex: 1}}>
        <ContactInfoCard
            iconUrl="./assets/images/phone.png"
            text="Phone: +1(647)-524-4762"
          />
          <a href="https://www.linkedin.com/in/vedarth-selat-7096b230b" target="_blank" rel="noopener noreferrer">
  <ContactInfoCard
    iconUrl="./assets/images/linkedin.png"
    text="LinkedIn: https://www.linkedin.com/in/vedarth-selat-7096b230b"
  />
</a>

        </div>
      </div> */}
    </section>
  );
};

export default ContactMe;
