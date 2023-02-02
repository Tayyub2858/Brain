import React, { useState, useRef } from 'react';
import './ShowcaseStyles.css';
import Projects from '../../Assets/Front-Page/Projects.png';
import Portfolio from '../../Assets/Front-Page/Portfolio.png';
import Connect from '../../Assets/Front-Page/Connect-with-professionals.png';
import { Grid } from '@material-ui/core';
const Showcase = () => {
    const [toggle, setToggle] = useState(Projects);
    return (
        <>
            <div className="showcase-container">
                <div className="showcase-txt-container">
                    <p className="showcase-title">Create</p>
                    <h1 className="showcase-heading">
                        Showcase your work. Connect with Professionals. Get discovered.
                    </h1>
                    <p className="showcase-txt">
                    When it comes to landing your dream job, skills alone won't cut it. 
                    That's why we built a platform where you can showcase your work, share projects with peers and employers, and connect with top professionals around the world.
                    </p>
                </div>
                <div className="btn-container">
                    <Grid container justifyContent='center'>
                        <Grid item xs={4} sm={4} md={2}>
                            <button onClick={() => setToggle(Projects)} className='showcase-btn'>Showcase Projects</button>

                        </Grid>
                        <Grid item xs={4} sm={4} md={2}>
                            <button onClick={() => setToggle(Portfolio)} className='showcase-btn'>Build Your Portfolio</button>

                        </Grid>
                        <Grid item xs={4} sm={4} md={2}>
                            <button onClick={() => setToggle(Connect)} className='showcase-btn'>Connect With Professionals</button>

                        </Grid>
                        <div className="img-showcase-img-container">
                            <img src={toggle} alt="showcaseImage"  className='showcase-img'/>
                        </div>
                    </Grid>
                </div>

            </div>
        </>
    )
}
export default Showcase