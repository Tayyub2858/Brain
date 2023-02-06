import React from "react";
import "./DataAnalysic.css";
import { Grid } from "@material-ui/core";
import Brain from "../../Assets/Front-Page/B.gif";

const DataAnalysic = () => {
 
  return (
    <>
      <div className="dataanalysic-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <div className="Data-container">
              <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
              <h1 className="Data-heading-1">INNOVATIVE SOLUTIONS</h1>
              <h1 className="Data-heading-2">Career Launchpad</h1>
              <p className="Data-para-2">
                Accelerate your career with Brain Analytics' hands-on learning
                of soft skills, project portfolio building, expert connections
                and career jumpstart.
              </p>
              <div className="Data-btn">
                <button className="Data-btn-1">Sign Up For Free</button>
                <button className="Data-btn-2">Corporate Training</button>
              </div>
              <p className="Data-para-3">
                No credit card required, start learning now.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="video-container">
              <img src={Brain} alt="" className="video-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default DataAnalysic;
