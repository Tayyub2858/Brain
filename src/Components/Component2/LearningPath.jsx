import React from "react";
import './LearningpathStyle.css'
import LearningData from "./LearningData";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Grid ,Card } from "@material-ui/core";
import { Link } from "react-router-dom";
const LearningPath = () => {
    return (
        <>
            <DrawerDasboard componentName={"Learning Path"} />
            <div className="learningpath-container">
                <Grid container spacing={2}>
                    {LearningData.map((course, index) => (
                        <Grid key={index} item xs={12} sm={12} md={3}>
                            <Card className="learning-card">
                                <img src={course.img} alt="Display img" className="learning-img" />
                                <h2 className="learning-course-title">{course.title}</h2>
                                <div className="learning-video-weeks">
                                    <div className="learning-videos">
                                        <p className="learning-durtion-weeks">{course.duration}</p>
                                        <p className="learning-duration"> Weeks Duration</p>

                                    </div>
                                    <div className="learning-videos">
                                        <p className="learning-course-videos">{course.videos}</p>
                                        <p className="learning-video">Videos</p>
                                    </div>
                                </div>
                                {/* <button className="course-stat-btn">{course.btn}</button> */}
                                <Link className="course-stat-btn" to={course.link}>{course.btn}</Link>
                            </Card>
                        </Grid>
                    ))

                    }
                </Grid>
            </div>

        </>
    )
}
export default LearningPath;