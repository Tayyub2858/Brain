import React from "react";
import "./DataAnalysic.css";
import { Grid } from "@material-ui/core";
import Brain from "../../Assets/Front-Page/B.gif";
import Gif from '../../Assets/Animation/ezgif.com-gif-maker-29.gif'
import { Link } from 'react-router-dom'

const DataAnalysic = () => {

  return (
    <>
      <div className="dataanalysic-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <div className="Data-container">
              <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
              <h1 className="Data-heading-1">Joy of Learning &</h1>
              <h1 className="Data-heading-2">teaching...</h1>
              <p className="Data-para-2">
                Brain LMS is a fully-featured education platform that helps instructors to create
                and publish video courses, live classes, and text courses and earn money, and 
                helps students to learn in the easiest way..
              </p>
              <div className="Data-btn">
                <Link to='/signup'><button className="Data-btn-1">Start Learning</button></Link>
                <Link to='/corporate-training'><button className="Data-btn-2">Corporate Training</button></Link>
              </div>
              <p className="Data-para-3">
                No credit card required, start learning now.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="video-container">
              <img src={Gif} alt="" className="video-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default DataAnalysic;
