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
                    <span>WHY MAVEN?</span>
                    <h1>The fastest path to your data dream job</h1>
                    <p>At Maven Analytics, we empower everyday people to land their dream jobs in data analytics and <br />
                        business intelligence. We've helped more than 1,000,000 students launch or accelerate their data <br />
                        careers, and we're just getting started. <br />
                    </p>
                </div>
                {/* job create */}

                <div className="create-job-container">
                    <Grid container>
                        <Grid xs={12} sm={12}  md={4}>
                            <div className="job-learn">
                                <img src={Learnimg} alt="Learn Jobs" className="imgjob" />
                                <h1>Learn</h1>
                                <p>Build job-ready skills with award-  <br />
                                    winning courses and personalized, goal-  <br />
                                    oriented learning plans</p>
                                <span className="job-btn">Learn More</span>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4}> 
                            <div className="job-create">
                                <img src={Createimg} alt="Create Jobs" className="imgjob" />
                                <h1>Create</h1>
                                <p>Apply your skills to real projects. and <br />
                                    create a portfolio to showcase your <br />
                                    work to peers and employers</p>
                                <span className="job-btn">Learn More</span>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={4}> 
                            <div className="job-connect">
                                <img src={Connectimg} alt="Connect Jobs" className="imgjob" />
                                <h1>Connect</h1>
                                <p>Join a diverse, global community of data <br />
                                    professionals, and connect with top <br />
                                    analysts from around the world</p>
                                <span className="job-btn">Learn More</span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
           </div>
        </>
    )
}
export default DreamJob;