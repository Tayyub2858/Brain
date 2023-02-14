import React from "react";
import './CoursesStyle.css'
import CourseCard from "../../Pages/Learn/CourseCard";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
const Cources = () => {
    return (
        <>
            <DrawerDasboard />
            <CourseCard />
        </>
    )
}
export default Cources;