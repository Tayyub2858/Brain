import React from "react";
import './BuildStyle.css';
import BuildSkils from '../../Assets/Front-Page/Build-skills.png';
const Build = () => {
    return (
        <>
            <div className="build-container">
                <div className="build-Learning">
                    <p className="build-title">Learning</p>
                    <h1 className="build-heading">Build real-world, job ready skills</h1>
                    <p className="build-txt">Learn by doing with project-based courses, free practice datasets,
                        monthly data challenges and more
                    </p>
                </div>
                <div className="build-learning-img">
                    <img src={BuildSkils} alt="" className="buildskill-img" />
                </div>
            </div>
        </>
    )
}
export default Build;