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
            <label>Name:</label>
            <input type="text" /><br/>
            <label>Email:</label>
            <input type="text" /><br/>
            <label>Message:</label>
            <textarea rows={4}/>
        </form>
      </div>
        </div>
    </div>
  );
};

export default Contact;
