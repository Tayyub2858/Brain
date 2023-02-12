import { Grid } from "@material-ui/core";
import React from "react";
import './DashboardDrawerStyles.css'
import img from '../../Assets/Dashboard/Pro_Tips_Analytics.png'
import icon from '../../Assets/Dashboard/icon-meetings.png'
import icons from '../../Assets/Dashboard/icon-portfolio-projects.png'
// import LinearProgressWithLabel from '@mui/material/LinearProgress';
// import CircularProgressWithLabel from '@mui/material/CircularProgress';
import icon1 from '../../Assets/Dashboard/10_Courses_Completed.png'
import icon2 from '../../Assets/Dashboard/14_Day_Streak.png';
import icon3 from '../../Assets/Dashboard/180_Day_Streak.png';
import icon4 from '../../Assets/Dashboard/Excel_Dashboard_Design.png';
import icon5 from '../../Assets/Dashboard/Advanced_Tableau.png';
import DrawerDasboard from "./DasboardDrawer";

const DashBoard = () => {

    return (
        <>
            <div className="dashbord-container">
                <div className="dashboard-header">
                    <Grid container>
                        <Grid sx={12} sm={12} md={2}>
                            <div className="header-sidbar">
                            <DrawerDasboard/>
                            </div>
                        </Grid>
                        <Grid sx={12} sm={12} md={10}>
                           <h3 className="dashbord-header-title">Welcome to Dashboard.......</h3>
                            
                        </Grid>
                    </Grid>
                </div>
                <Grid container>
                    <Grid item sx={12} sm={12} md={7}>
                        <div className="dashbord-left-container">
                            {/* Start Recent Course box html  */}
                            <div className="Course-box">
                                <div className="course-box-inner">
                                    <h4 className="course-box-title">YOUR MOST RECENT COURSE</h4>
                                    <Grid container>
                                        <Grid item sx={12} sm={12} md={3}>
                                            <img src={img} alt="Display Recent Course" className="recent-course-img" />
                                        </Grid>
                                        <Grid item sx={12} sm={12} md={9}>
                                            <div className="recent-course-text">
                                                <h2 className="recent-course-title">Excel Pro Tips : Analytics</h2>
                                                <div className="progress-recent-course">
                                                    {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={35} /> */}
                                                    <p className="progress-value">35%</p>
                                                </div>
                                                <div className="recent-course-btn">
                                                    <button className="course-detail-btn">View Course Detials</button>
                                                    <button className="resume-course-btn">RESUME COURSE</button>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            {/* End Recent course box  */}

                            {/* Start React Activites box  */}
                            <div className="recent-activity-box">
                                <div className="activity-box-text">
                                    <h3>Recent Activity</h3>
                                    <div className="React-activity-details">
                                        <Grid container>
                                            <Grid xs={12} sm={12} md={3}>
                                                <h2>0</h2>
                                                <p>Active Days</p>
                                            </Grid>
                                            <Grid xs={12} sm={12} md={5}>
                                                <h2>0</h2>
                                                <p>Lessons Complete</p>
                                            </Grid>
                                            <Grid xs={12} sm={12} md={4}>
                                                <div className="recet-days-course">
                                                    <div >
                                                        <img src={icon} alt="Display icons" className="recent-course-icon" />
                                                    </div>
                                                    <div className="activi-location">
                                                        <h3>0 Days</h3>
                                                        <p>Current Location</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className="recent-time-box">
                                        <img src={icons} alt="Display Icons Recent Activity" className="icons-recent-active" />
                                        <p className="recent-time-text">
                                            Hmm, looks like you did't complete any Lessons
                                            during this time . Try selecting another date range.
                                        </p>
                                    </div>
                                    <p className="Recent-active-last-note">Note: Lesson completions are tracked in Coordinate Universal Time(UTC)</p>
                                </div>
                            </div>
                            {/* Start React Activites box  */}

                            {/* Course Progress bar Start */}
                            <div className="course-progress-box">
                                <div className="course-progress-box-inner">
                                    <h3 className="progress-heading">COURSE & PATH PROGRESS</h3>
                                    <p className="progress-title">Course</p>
                                    <div className="progess-section">
                                        <h3>Microsoft Power BI Desktop</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={100} /> */}
                                            <p className="progress-value">100%</p>
                                        </div>
                                        <h3>Microsoft Power BI Service</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={80} /> */}
                                            <p className="progress-value">80%</p>
                                        </div>
                                        <h3>Thinking Like an Analyst</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={75} /> */}
                                            <p className="progress-value">75%</p>
                                        </div>
                                        <h3>Advanced DAX for Power BI</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={60} /> */}
                                            <p className="progress-value">60%</p>
                                        </div>
                                        <h3>Microsoft PL-3000 Exam Prep</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={45} /> */}
                                            <p className="progress-value">45%</p>
                                        </div>
                                        <h3>Excel Pro Tips: Analytics</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={80} /> */}
                                            <p className="progress-value">80%</p>
                                        </div>
                                        <h3>Microsoft Power BI Desktop</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={70} /> */}
                                            <p className="progress-value">70%</p>
                                        </div>
                                        <h3>Microsoft Power BI Desktop</h3>
                                        <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={20} /> */}
                                            <p className="progress-value">20%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={5}>
                        <div className="dashbord-right-side">
                                <div className="learning-plan-box">
                                <h3>YOUR LEARNING PLAN PROGRESS</h3>
                                    <Grid container>
                                        <Grid sx={12} sm={12} md={5}>
                                        <div className="Circle-progress">
                                        {/* <CircularProgressWithLabel variant="determinate" className="circularprogress" value={30} /> */}
                                        <p>70% progress</p>
                                        </div>
                                        </Grid>
                                        <Grid sx={12} sm={12} md={7}>
                                            <p className="Tool-progress">Tool Progress</p>
                                            <div className="progress-barsection">
                                            {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={86} /> */}
                                            <p className="progress-value">86%</p>
                                        </div>
                                        </Grid>
                                    </Grid>
                                    {/* Courese progress Grid  */}
                                    <h5 className="course-progress-heding">Course Progress</h5>
                                    <Grid container>
                                            <Grid item sx={12} sm={12} md={4}>
                                                <div className="course-progress-detail">
                                                    <h2>1</h2>
                                                <p className="course-progress-text">Not Started</p>
                                                </div>
                                            </Grid>
                                            <Grid item sx={12} sm={12} md={4}>
                                                <div className="course-progress-detail">
                                                    <h2>1</h2>
                                                <p className="course-progress-text">In Progress</p>
                                                </div>
                                            </Grid>
                                            <Grid item sx={12} sm={12} md={4}>
                                                <div className="course-progress-detail">
                                                    <h2>4</h2>
                                                <p className="course-progress-text">Completed</p>
                                                </div>
                                            </Grid>
                                    </Grid>
                                    {/* Up comming Course  */}
                                    <h4 className="upcoming-course-heading">Upcoming Course</h4>
                                    <div className="upcoming-course-box">
                                        <Grid container>
                                            <Grid item sx={12} sm={12} md={3}>
                                            <div className="upcoming-course-img">
                                        <img src={img} alt="Dispaly Upcomming Course" className="upcoming-img" />
                                        </div>
                                            </Grid>
                                            <Grid item sx={12} sm={12} md={6}>
                                            <div className="upcoming-course-detail">
                                                <h4 className="lunch-data-heading">Lunching Your Data Career</h4>
                                                <div className="progress-barsection">
                                                {/* <LinearProgressWithLabel variant="determinate" className="progressbarwithlabel" value={0} /> */}
                                                <p className="progress-value">0%</p>
                                                </div>
                                                <p className="upcoming-course-dedline">Deadline : 12/12/2023</p>
                                            </div>
                                            </Grid>
                                            <Grid item sx={12} sm={12} md={3}>
                                            <div className="upcoming-course-btn">
                                                <button className="course-btn">Start Course</button>
                                            </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>       
                        </div>
                         {/* start Brand Bandage Crides  */}
                                <div className="Brand-bndages">
                                        <div className="brand-bandage-box">
                                        <h5>BRAND BANDAGE & CREDIENTALS</h5>
                                        <div className="brand-bandage-cridents">
                                            <img src={icon1} alt="Disply the Brand-Bandage Cridetals" className="brand-bandage-img" />
                                            <img src={icon2} alt="Disply the Brand-Bandage Cridetals" className="brand-bandage-img" />
                                            <img src={icon3} alt="Disply the Brand-Bandage Cridetals" className="brand-bandage-img" />
                                            <img src={icon4} alt="Disply the Brand-Bandage Cridetals" className="brand-bandage-img" />
                                            <img src={icon5} alt="Disply the Brand-Bandage Cridetals" className="brand-bandage-img" />
                                        </div>
                                        </div>
                                </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}
export default DashBoard;
