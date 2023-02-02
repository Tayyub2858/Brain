import React from 'react'
import Footer from '../../Modules/Footer/Footer'
import Nav from '../../Modules/Nav/Nav'
import './CoursesStyles.css';
import CourseCard from './CourseCard';
import { Grid } from '@material-ui/core';
import CourseImg from '../../Assets/Learn/Self-course/Course-hero_2x.png'

const Courses = () => {
    return (
        <>
            <Nav />
            <div className="courses-container">
                <div className="course-title-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="course-title-txt">
                                <p className="course-title">
                                    Learn
                                </p>
                                <h1 className="course-heading">
                                    SELF-PACED INFORMATION TECHNOLOGY COURSES
                                </h1>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="course-img-container">
                                <img src={CourseImg} alt="courseimg" className="course-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <CourseCard />
            <Footer />
        </>
    )
}

export default Courses