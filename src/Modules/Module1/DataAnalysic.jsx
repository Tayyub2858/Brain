import React from "react";
import './DataAnalysic.css'
import { Grid } from "@material-ui/core";
import video from '../../Assets/Front-Page/video.png';

const DataAnalysic = () => {
    return (
        <>

            <div className="dataanalysic-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="Data-container">
                            <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
                            <h1 className="Data-heading-1">The Data Analytics</h1>
                            <h1 className="Data-heading-2">Career Launchpad</h1>
                            <p className="Data-para-2">Learn new skills, create project portfolios, connect with experts, and <br />
                                jumpstart your data career
                            </p>
                            <div className="Data-btn">
                                <button className="Data-btn-1">Sign Up For Free</button>
                                <button className="Data-btn-2">Train My Team</button>
                            </div>
                            <p className="Data-para-3">No credit card required, start learning for free.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="video-container">
                            <img src={video} alt=""  className="video-img"/>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </>
    )
}
export default DataAnalysic;