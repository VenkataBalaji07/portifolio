import React, { useState } from "react";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import baluPic from "../../assets/balu-photo.jpg";
import { IoBookSharp } from "react-icons/io5";
import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Skills from "../Skills/Skills";
import { motion } from "motion/react";
import TwinklingStars from "../../Components/TwinklingStars";
import { SiGmail } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Home = () => {
const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="homeContainer" id="homecomponent">
      <div className={navbarOpen?"hamburgerclose":"hamburgeropen"} onClick={()=>setNavbarOpen(!navbarOpen)} ><GiHamburgerMenu/></div>
      <div className={navbarOpen?"navbarHome":"navbarhome2"}>
        <IoBookSharp className="bookIcon" />
        <ImCross className="crossnav" onClick={()=>setNavbarOpen(!navbarOpen)} />
        <p className="navelement">
          <AnchorLink
            href="#homecomponent"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </AnchorLink>
        </p>
        <p className="navelement">
          <AnchorLink
            href="#educationcomponent"
            style={{ textDecoration: "none", color: "white" }}
          >
            Education
          </AnchorLink>
        </p>
        <p className="navelement">
          <AnchorLink
            href="#projectscomponent"
            style={{ textDecoration: "none", color: "white" }}
          >
            Projects
          </AnchorLink>
        </p>
        <p className="navelement">
          <AnchorLink
            href="#contactcomponent"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact Me
          </AnchorLink>
        </p>
      </div>
      <div className="titleSection">
        <div className="titleSectionLeft">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1.2 }}
          >
            <span className="name1">Venkata Balaji Boppudi</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Data Scientist
          </motion.h3>
          <p>
            I am a Data Scientist with a Bachelor's degree in Artificial
            Intelligence and Machine Learning. I am passionate about Data
            Science. Currently, I am focused on exploring data science
            techniques, building machine learning models, and working with
            Computer Vision, Deep Learning, and Generative AI to derive
            meaningful-insights.
          </p>
        </div>
        <div>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={baluPic}
            alt="Balu"
            className="profilePic"
          />
        </div>
      </div>
      <div className="headSectionButtons">
        <motion.button
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          title="GitHub"
        >
          <a
            href="https://github.com/VenkataBalaji07"
            target="_blank"
            style={{ color: "white" }}
          >
            <span className="github-button">
              <FaGithub />
            </span>
          </a>
        </motion.button>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          title="Gmail"
        >
          <a
            href="mailto:yeah.9121921@gmail.com"
            target="_blank"
            style={{ color: "white" }}
          >
            <span className="gmail-button">
              <SiGmail />
            </span>
          </a>
        </motion.button>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          title="LinkedIn"
        >
          <a
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248"
            target="_blank"
            style={{ color: "white" }}
          >
            <span className="linkedin-button">
              <FaLinkedin />
            </span>
          </a>
        </motion.button>
        <motion.button
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          title="Twitter"
        >
          <a
            href="https://x.com/Balaji4207?t=NGov0PEfCcGWFL_1G1WlEg&s=09"
            target="_blank"
            style={{ color: "white" }}
          >
            <span className="twitter-button">
              <FaTwitter />
            </span>
          </a>
        </motion.button>
        <a
          href="https://drive.google.com/file/d/1MZJtYqPF-bA2YvT2RTpC93y83AIGNSCS/view?usp=drivesdk"
          target="_blank"
          style={{ color: "white" }}
        >
          <motion.button
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            title="CV"
          >
            <span className="download-cv">Download CV</span>
          </motion.button>
        </a>
      </div>
      <div className="stars-background">
        <TwinklingStars />
      </div>
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
