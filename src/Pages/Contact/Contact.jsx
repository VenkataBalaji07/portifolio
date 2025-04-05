//import contact3D from "../../assets/3d-contact.webp";
import React, { useState } from "react";
import "./Contact.css";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [submitted, isSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitting = (e) => {
    e.preventDefault();
    alert("Submitted message successfully !");
    setName("");
    setEmail("");
    setMessage("");
  };

  const resetValues = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contactcomponent">
      <center>
        <h1>Contact Me</h1>
      </center>
      <div className="contactLayout">
        <div className="contactForm1">
          <a
            href="https://github.com/VenkataBalaji07"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub />
            {"  "}GitHub
          </a>
          <a
            href="mailto:yeah.9121921@gmail.com"
            target="_blank"
            style={{ color: "white" }}
          >
            <SiGmail />
            {"  "}GMail
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLinkedin />
            {"  "}LinkedIn
          </a>
          <a
            href="https://maps.app.goo.gl/nRBB45fuzULfxeDx6"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLocationDot />
            {"  "} Location
          </a>
        </div>
        {/*<div>
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "circInOut" }}
            src={contact3D}
            alt="contact image"
            className="contactImage"
          />
        </div>*/}
        <div className="contactForm">
          <form onSubmit={submitting}>
            <div className="formElements">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formElements">
              <label>Email:</label>
              <input
                type="text"
                placeholder="abc123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formElements">
              <label>Message:</label>
              <textarea
                rows={4}
                placeholder="Enter the message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="formButtons">
              <input type="button" onClick={resetValues} value="Reset" />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
