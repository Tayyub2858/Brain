import React from 'react';
import { Grid } from '@material-ui/core';
import './LearningModuleStyles.css';
import team from '../../Assets/Front-Page/team.png';
import individual from '../../Assets/Front-Page/individual.png';
const LearningModule = () => {
    return (
        <>
            <div className="learning-module-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="left-module">
                            <img src={individual} alt="" className="training-ind" />
                            <h4 className="left-module-heading">
                                FOR INDIVIDUALS
                            </h4>
                            <h1 className="left-module-heading">
                                Launch Your Data Career
                            </h1>
                            <p className="left-module-txt">
                                Start learning for free, no credit card required
                            </p>
                            <button className="learning-btn">
                                Sign Up For Free
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="right-module">
                            <img src={team} alt="" className="training-team" />
                            <h4 className="right-module-heading">
                                FOR TEAMS
                            </h4>
                            <h1 className="right-module-heading">
                                Request A Free Demo
                            </h1>
                            <p className="right-module-txt">
                            Request a demo and access a free trial for your team
                            </p>
                            <button className="demo-btn">
                                Sign Up For Free
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default LearningModule