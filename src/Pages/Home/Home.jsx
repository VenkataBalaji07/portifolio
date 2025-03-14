import React from "react";
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

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="navbarHome">
        <IoBookSharp className="bookIcon" />
        <p>Home</p>
        <p>Education</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>
      <div className="titleSection">
        <div className="titleSectionLeft">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1.2 }}
          >
            Venkata Balaji Boppudi
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Software Developer | Problem Solver | Tech Enthusiast
          </motion.h3>
          <p>
            Passionate about building scalable and efficient software solutions
            that enhance user experiences. I thrive on solving complex problems
            through clean, maintainable code and innovative thinking. Constantly
            exploring new technologies to stay ahead in the ever-evolving world
            of software development.
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
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <a
            href="https://github.com/VenkataBalaji07"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub />
          </a>
        </motion.button>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <a
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLinkedin />
          </a>
        </motion.button>
        <motion.button
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <a
            href="https://x.com/Balaji4207?t=NGov0PEfCcGWFL_1G1WlEg&s=09"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaTwitter />
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
          >
            Resume
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
