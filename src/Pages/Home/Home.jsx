import React from "react";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import baluPic from "../../assets/balu-photo.jpg";
import { IoBookSharp } from "react-icons/io5";
import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Skills from "../Skills/Skills";
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
          <h1>Venkata Balaji Boppudi</h1>
          <h3>Software Developer | Problem Solver | Tech Enthusiast</h3>
          <p>
            Passionate about building scalable and efficient software solutions
            that enhance user experiences. I thrive on solving complex problems
            through clean, maintainable code and innovative thinking. Constantly
            exploring new technologies to stay ahead in the ever-evolving world
            of software development.
          </p>
        </div>
        <div>
          <img src={baluPic} alt="Balu" className="profilePic" />
        </div>
      </div>
      <div className="headSectionButtons">
        <button>
          <a
            href="https://github.com/VenkataBalaji07"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub />
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLinkedin />
          </a>
        </button>
        <button>
          <a
            href="https://x.com/Balaji4207?t=NGov0PEfCcGWFL_1G1WlEg&s=09"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaTwitter />
          </a>
        </button>
        <a
          href="https://drive.google.com/file/d/1MZJtYqPF-bA2YvT2RTpC93y83AIGNSCS/view?usp=drivesdk"
          target="_blank"
          style={{ color: "white" }}
        >
          <button>Resume</button>
        </a>
      </div>
      <div className="stars-background">
      <TwinklingStars/>
      </div>
      <Skills/>
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
