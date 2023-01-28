import React from "react";
import './LearningStyle.css';
import img1 from '../../Assets/Front-Page/Personalized-learning-plans.png';
import img2 from '../../Assets/Front-Page/Live-expert-support.png';
import img3 from '../../Assets/Front-Page/Real-time-progress-tracking.png';
import { Grid } from "@material-ui/core";
import { useState } from "react";

const Learning = () => {
    const [showimg, setShowimg] = useState(img1);

    return (
        <>
            <div className="learning-container">
                <div className="Guided-Learning">
                    <p className="learn-title">Learn</p>
                    <h1 className="learn-heading">This is Guided Learning™</h1>
                    <p className="learn-txt">At Maven Analytics, we're building a better online learning experience.
                        Our guided learning model gives you the flexibility to create your perfect path,
                        with live expert coaching and real-time
                        progress tracking to keep you on pace every step of the way
                    </p>
                </div>
                {/* Adding the buttons */}
                <div className="learning-buttons">
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid item xs={4} sm={4} md={2}>
                            <button className="learning-buttons-btn" onClick={() => setShowimg(img1)}>Personalized Learning Plans</button>

                        </Grid>
                        <Grid item xs={4} sm={4} md={2}>
                            <button className="learning-buttons-btn" onClick={() => setShowimg(img2)}>Live Expert Support</button>

                        </Grid>
                        <Grid item xs={4} sm={4} md={2}>
                            <button className="learning-buttons-btn" onClick={() => setShowimg(img3)}>Real-Time Progress Tracking</button>

                        </Grid>
                    </Grid>
                </div>

                {/* show this images */}
                <div className="learning-btn-img">
                    <img src={showimg} alt="learning" className="learning-img" />
                </div>
            </div>
        </>
    )
}
export default Learning;