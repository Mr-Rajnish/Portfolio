import React from "react";
import "./Contact.css";
import contactImage from '../../assets/contact-us.webp'

const Contact = () => {
  return (
    <> 
    <div className="contact-section1">
      {/* Left Side: Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Contact Illustration" />
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
