import python from "../../assets/python.png";
import numpy from "../../assets/numpy.png";
import pandas from "../../assets/pandas.png";
import matplot from "../../assets/matplotlib.png";
import ai from "../../assets/ai.jpg";
import deeplearning from "../../assets/deeplearning.png";
import genai from "../../assets/genai.png";
import keras from "../../assets/keras.png";
import ml from "../../assets/ml.jpg";
import scikit from "../../assets/scikit.png";
import spacy from "../../assets/spacy.png";
import tensorflow from "../../assets/tensorflow.jpeg";
import React, { useState } from "react";
import "./Skills.css";
import { motion } from "motion/react";

const Skills = () => {
  const [displaySkill, setDisplaySkill] = useState("");

  return (
    <div className="skills-block">
      <div>
        <center>
          <h1>Skills</h1>
        </center>
      </div>
      <div className="skills-container">
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "python"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={python}
            alt="python"
            title="Python"
            onMouseEnter={() => setDisplaySkill("python")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "python" ? (
            <p className="skill-title">Python</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "pandas"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={pandas}
            alt="pandas"
            title="Pandas"
            onMouseEnter={() => setDisplaySkill("pandas")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "pandas" ? (
            <p className="skill-title">Pandas</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "numpy"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={numpy}
            alt="numpy"
            title="Numpy"
            onMouseEnter={() => setDisplaySkill("numpy")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "numpy" ? (
            <p className="skill-title">Numpy</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "matplot"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={matplot}
            alt="matplot"
            title="MatplotLib"
            onMouseEnter={() => setDisplaySkill("matplot")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "matplot" ? (
            <p className="skill-title">MatplotLib</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "scikit"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={scikit}
            alt="scikit"
            title="Scikit Learn"
            onMouseEnter={() => setDisplaySkill("scikit")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "scikit" ? (
            <p className="skill-title">Scikit</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "tensorflow"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={tensorflow}
            alt="tensorflow"
            title="TensorFlow"
            onMouseEnter={() => setDisplaySkill("tensorflow")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "tensorflow" ? (
            <p className="skill-title">TensorFlow</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "keras"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={keras}
            alt="keras"
            title="Keras"
            onMouseEnter={() => setDisplaySkill("keras")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "keras" ? (
            <p className="skill-title">Keras</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "spacy"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={spacy}
            alt="spacy"
            title="Spacy"
            onMouseEnter={() => setDisplaySkill("spacy")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "spacy" ? (
            <p className="skill-title">Spacy</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "ai"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={ai}
            alt="ai"
            title="Artificial Intelligence"
            onMouseEnter={() => setDisplaySkill("ai")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "ai" ? (
            <p className="skill-title">Artificial Intelligence</p>
          ) : (
            <></>
          )}
        </motion.div>

        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "ml"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={ml}
            alt="ml"
            title="Machine Learning"
            onMouseEnter={() => setDisplaySkill("ml")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "ml" ? (
            <p className="skill-title">Machine Learning</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "deeplearning"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={deeplearning}
            alt="deeplearning"
            title="Deep Learning"
            onMouseEnter={() => setDisplaySkill("deeplearning")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "deeplearning" ? (
            <p className="skill-title">Deep Learning</p>
          ) : (
            <></>
          )}
        </motion.div>
        <motion.div
        whileHover={{scale:1.05}}
          className={
            displaySkill === "genai"
              ? "skill-img-container"
              : "skill-img-container"
          }
        >
          <img
            src={genai}
            alt="genai"
            title="Gen AI"
            onMouseEnter={() => setDisplaySkill("genai")}
            onMouseLeave={() => setDisplaySkill("")}
            className="skill-img"
          />
          {displaySkill === "genai" ? (
            <p className="skill-title">Generative AI</p>
          ) : (
            <></>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
