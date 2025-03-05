import contact3D from "../../assets/3d-contact.webp";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <center>
        <h1>Contact Me</h1>
      </center>
      <div className="contactLayout">
        <div>
          <img src={contact3D} alt="contact image" className="contactImage" />
        </div>
        <div className="contactForm">
          <form>
            <div className="formElements">
              <label>Name:</label>
              <input type="text" placeholder="Enter your Name..." />
            </div>
            <div className="formElements">
              <label>Email:</label>
              <input type="text" placeholder="abc123@gmail.com"/>
            </div>
            <div className="formElements">
              <label>Message:</label>
              <textarea rows={4} placeholder="Enter the message..."/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
