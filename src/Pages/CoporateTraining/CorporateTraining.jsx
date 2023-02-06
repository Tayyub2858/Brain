import React from 'react';
import { Grid } from '@material-ui/core';
import Nav from '../../Modules/Nav/Nav';
import Footer from '../../Modules/Footer/Footer';
import teamTraining from '../../Assets/TeamTraning/TeamTrainingHero.png'
import corporate from '../../Assets/TeamTraning/corporate.png'
import './CorporateTrainingStyles.css'

const CorporateTraining = () => {

    return (
        <>
            <Nav />

            <div className="ct-container">
                <div className="ct-desc-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <p className="ct-title">Corporate Training</p>
                            <h1 className="ct-heading">
                                THE FASTEST WAY TO UPSKILL YOUR COMPANY
                            </h1>
                            <p className="ct-txt">
                                When it comes to data and analytics, keeping your team ahead of the skills curve can feel like an uphill battle. We can help.
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={teamTraining} alt="corporatetraining" className="ct-img" />
                        </Grid>
                    </Grid>
                </div>
                <div className="ct-info-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <h1 className="ct-info-heading">
                                Tired of Training Programs That Overpromise & Underdeliver?
                            </h1>
                            <p className="ct-info-txt">
                                We are too. And we think you deserve better.

                                Our platform is built for teams who demand a modern and flexible approach to online training. Invite and manage users from your private team portal, create assignments and deadlines to keep your team accountable, and track outcomes to actually prove your team is getting smarter.

                                <span className="ct-bold">Let us focus on keeping your team sharp, so you can focus on being a leader.</span>
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={corporate} alt="corporate" className="ct-info-img" />
                        </Grid>
                    </Grid>
                </div>
                <div className="ct-info-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={corporate} alt="corporate" className="ct-info-img" />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <h1 className="ct-info-heading-1">
                            Invite Your Team Members
                            </h1>
                            <p className="ct-info-txt-1">
                                We’ll spin up a secure, private portal where you can track and manage your entire team at a glance. Invite your members, assign roles and permissions, and add or remove users with the click of a button (no need to call Gary from IT).

                                <span className="ct-bold">
                                    <ul>
                                        <li>
                                            Invite team members
                                        </li>
                                        <li>
                                            Assign roles & permissions

                                        </li>
                                        <li>
                                            Add or remove team members

                                        </li>
                                    </ul>
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                </div>
                <div className="get-info-container">
                    <h1 className="ct-info-heading-2">
                        Tired of Training Programs That Overpromise & Underdeliver?
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CorporateTraining