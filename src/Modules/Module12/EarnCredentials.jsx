import React from 'react';
import { Grid } from '@material-ui/core';
import './EarnCredentialsStyles.css';
import Credentials from '../../Assets/Front-Page/Credentials.png';

const EarnCredentials = () => {
    return (
        <>
            <div className="earn-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="credential-img-container">
                            <img src={Credentials} alt="" className="credential-img" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="credential-txt-container">
                            <p className="credential-title">
                                Connect
                            </p>
                            <h1 className="credential-heading">Earn credentials worth sharing</h1>
                            <p className="credential-txt">
                                Validate your skills and earn unique digital badges for completing courses or reaching learning milestones.
                            </p>
                            <button className="get-credential">
                                View all credentials
                            </button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default EarnCredentials