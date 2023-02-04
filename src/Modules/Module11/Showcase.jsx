import React, { useState, useRef } from "react";
import "./ShowcaseStyles.css";
import Projects from "../../Assets/Front-Page/Projects.png";
import Portfolio from "../../Assets/Front-Page/Portfolio.png";
import Connect from "../../Assets/Front-Page/Connect-with-professionals.png";
import { Grid } from "@material-ui/core";
const Showcase = () => {
  const [toggle, setToggle] = useState(Projects);
  return (
    <>
      <div className="showcase-container">
        <div className="showcase-txt-container">
          <p className="showcase-title">Create</p>
          <h1 className="showcase-heading">
            Accelerate your career with Brain Analytics' hands-on learning,
            project portfolio building, expert connections and career jumpstart.
          </h1>
          <p className="showcase-txt">
            Brain Analytics offers a comprehensive approach to career
            acceleration, designed to equip professionals with the skills,
            experience, and connections needed to reach their full potential.
            Our program features hands-on learning experiences that allow
            participants to apply what they've learned and build a valuable
            portfolio of projects. Brain Analytics provides expert
            connections, connecting participants with experienced professionals
            in their field to provide valuable insights, mentorship, and
            opportunities. With a focus on jumpstarting careers, Brain Analytics
            provides an effective way to build skills, gain
            experience, and advance in one's chosen field.
          </p>
        </div>
        <div className="btn-container">
          <Grid container justifyContent="center">
            <Grid item xs={4} sm={4} md={2}>
              <button
                onClick={() => setToggle(Projects)}
                className="showcase-btn"
              >
                Showcase Projects
              </button>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <button
                onClick={() => setToggle(Portfolio)}
                className="showcase-btn"
              >
                Build Your Portfolio
              </button>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <button
                onClick={() => setToggle(Connect)}
                className="showcase-btn"
              >
                Connect With Professionals
              </button>
            </Grid>
            <div className="img-showcase-img-container">
              <img src={toggle} alt="showcaseImage" className="showcase-img" />
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Showcase;
