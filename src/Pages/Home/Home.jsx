import React from "react";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import baluPic from "../../assets/balu-photo.jpg";
import { IoBookSharp } from "react-icons/io5";
import './Home.css';

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
      <div className="titleSection" >
        <div className="titleSectionLeft">
        <h1>Balu</h1>
        <h3>Software Developer | Problem Solver | Tech Enthusiast</h3>
        <p>Passionate about building scalable and efficient software solutions that enhance user experiences. I thrive on solving complex problems through clean, maintainable code and innovative thinking. Constantly exploring new technologies to stay ahead in the ever-evolving world of software development.</p>
        </div>
        <div>
            <img src={baluPic} alt="Balu" className="profilePic" />
        </div>
      </div>
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
