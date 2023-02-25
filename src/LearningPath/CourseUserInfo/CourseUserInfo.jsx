import { useState } from "react";

const CourseUserInfo = (coursetitle) => {
    const [RecentCourse, setRecentCourse] = useState("")
    setRecentCourse(coursetitle)
    console.log(RecentCourse);
    return {
        RecentCourse,
        setRecentCourse,
    }
}
export default CourseUserInfo;