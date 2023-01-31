import React from "react";
import './MarketingStyles.css'
import { Grid } from "@material-ui/core";
import Tumwine from '../../Assets/Front-Page/tumwine-clement.jpg';

const Marketing = () =>{
    return (
        <>
            <div className="marketing-container">
                <div className="marketing-box">
                <Grid container>
                  <Grid item xs={12} sm={12} md={9}>
                    <p className="marketing-text">
                    “I was looking to transition my career from marketing to data analytics,
                    but had no clue where to start. Brain Analytics broke down the thought 
                    process and course roadmap needed to launch my career.”
                        </p>
                   </Grid>
                   <Grid item xs={12} sm={12} md={3}>
                        <img src={Tumwine} alt=""  className="marketing-img" />
                        <h3 className="marketing-img-name">Tumwine Clement</h3>
                   </Grid>
                  </Grid>
                </div>
            </div>
        </>
    )
}
export default Marketing;