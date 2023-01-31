import React from 'react';
import { Grid } from '@material-ui/core';
import './ConnectStyles.css';
import Chat from '../../Assets/Front-Page/Chat.png';
import Instructors from '../../Assets/Front-Page/Instructors.png'

const Connect = () => {
    return (
        <>
            <div className="connect-top-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="connect-txt-container">
                            <p className="connect-title">
                                Connect
                            </p>
                            <h1 className="connect-top-heading">
                                Learn from world-class instructors
                            </h1>
                            <p className="connect-top-txt">
                                Connect with our team of certified experts and award-winning instructors, here to help you build the exact skills you need to launch your career.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="connect-top-img-container">
                            <img src={Instructors} alt="Connect" className="connect-img" />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="connect-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="connect-img-container">
                            <img src={Chat} alt="Connect" className="connect-img" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="connect-txt-container">
                            <p className="connect-title">
                                Connect
                            </p>
                            <h1 className="connect-heading">
                                Chat with experts and career coaches
                            </h1>
                            <p className="connect-txt">
                                Talk to our team of resident experts and learning guides to get the help you need, when you need it.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Connect