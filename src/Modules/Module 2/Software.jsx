import React from "react";
import './software.css'
import { Grid } from "@material-ui/core";
import Excel from '../../Assets/Front-Page/Excel.png';
import PowerBi from '../../Assets/Front-Page/Power-bi.png';
import Tableau from '../../Assets/Front-Page/Tableau.png';
import MySql from '../../Assets/Front-Page/Mysql.png';
import Python from '../../Assets/Front-Page/Python.png'

const Software = () => {
    return( 
        <>
        <div className="software-container">
            <Grid container justifyContent="center">
                <Grid item xs={2} sm={2} md={2}>
                    <img src={Excel} alt="software images" className="software-image" />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <img src={PowerBi} alt="software images" className="software-image" />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <img src={Tableau} alt="software images" className="software-image" />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <img src={MySql} alt="software images" className="software-image" />
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <img src={Python} alt="software images" className="software-image" />
                </Grid>
            </Grid>
        </div>
        </>
    )
}
export default Software;