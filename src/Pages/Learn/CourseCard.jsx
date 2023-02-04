import React from "react";
import "./CoursesStyles.css";
import { Grid, Card } from "@material-ui/core";
import Data from "./CourseData";
import CourseDetails from "./CourseDetails";

const CourseCard = () => {
  return (
    <>
      <div className="course-card-container">
        <Grid container>
          {Data.map((course, i) => (
            <Grid key={i} item xs={12} sm={12} md={4}>
              <Card className="course-card">
                <img
                  src={course.img}
                  alt="course-img"
                  className="course-card-img"
                />
                <h1 className="course-card-title">{course.title}</h1>
                <p className="course-desc">{course.dec}</p>
                <CourseDetails />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CourseCard;
