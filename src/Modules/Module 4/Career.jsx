import React from "react";
import './CareerStyle.css';
import SamSheng from '../../Assets/Front-Page/Sam-sheng.jpg'
import { Grid } from "@material-ui/core";

const Career = () =>{
    return (
        <>
            <div className="career-container">
                <div className="career-box">
                  <Grid container>
                  <Grid item xs={12} sm={12} md={9}>
                    <p className="career-text">“I feel lucky and grateful to have found Maven Analytics in the early stage of my career. 
                         These courses gave me mind-blowing articulation of how to become a great analyst. Thank you!”</p>
                   </Grid>
                   <Grid item xs={12} sm={12} md={3}>
                        <img src={SamSheng} alt=""  className="caree-img" />
                        <h3 className="career-img-name">Sam Sheng</h3>
                   </Grid>
                  </Grid>
                   
                </div>
            </div>
        </>
    )
}
export default Career;