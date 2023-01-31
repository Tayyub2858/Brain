import React from "react";
import './dreamjob.css';
import Learnimg from '../../Assets/Front-Page/Learn.png';
import Createimg from '../../Assets/Front-Page/Create.png';
import Connectimg from '../../Assets/Front-Page/Connect.png'
import { Grid } from "@material-ui/core";


const DreamJob = () =>{
    return(
        <>
           <div className="dreem-container">
                <div className="maven-job">
                    <span>WHY BRAIN ANALYTICS?</span>
                    <h1>The fastest path to get expertise in your skills</h1>
                    <p>At Brain Analytics, we empower everyday people to land their dream jobs in data analytics and 
                        business intelligence. We've helped more than 1,000,000 Persons launch or accelerate their
                        careers, and we're just getting started. 
                    </p>
                </div>
                {/* job create */}

                <div className="create-job-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}> 
                            <div className="job-learn">
                                <img src={Createimg} alt="Create Jobs" className="imgjob" />
                                <h1 className="job-card-heading">Create</h1>
                                <p className="job-card-txt">Apply your skills to real projects. and <br />
                                    create a portfolio to showcase your <br />
                                    work to peers and employers</p>
                                <button className="job-btn">Learn More</button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={4}>
                            <div className="job-learn">
                                <img src={Learnimg} alt="Learn Jobs" className="imgjob" />
                                <h1 className="job-card-heading">Learn</h1>
                                <p className="job-card-txt">Build job-ready skills with award-  <br />
                                    winning courses and personalized, goal-  <br />
                                    oriented learning plans</p>
                                <button className="job-btn">Learn More</button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}> 
                            <div className="job-learn">
                                <img src={Connectimg} alt="Connect Jobs" className="imgjob" />
                                <h1 className="job-card-heading">Connect</h1>
                                <p className="job-card-txt">Join a diverse, global community of data <br />
                                    professionals, and connect with top <br />
                                    analysts from around the world</p>
                                <button className="job-btn">Learn More</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
           </div>
        </>
    )
}
export default DreamJob;