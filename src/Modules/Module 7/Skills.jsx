import React from "react";
import './SkillsStyle.css';
import { Grid } from "@material-ui/core";
import SkillsAsses from '../../Assets/Front-Page/Skills-assessments.png';


const Skills = () => {
    return (
        <>

            <div className="skills-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className="skills-container-asse">
                            <p className="skills-title">Learn</p>
                            <h1 className="skills-heading">Focus on the skills you need most</h1>
                            <p className="skills-txt">Assess your skills with popular skills like Excel,
                                SQL, Power BI, Python, React / React-Native, NodeJS , Adobe to identify
                                gaps and customize your learning plan
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <div className="skills-container-img">
                            <img src={SkillsAsses} altclas="Skills-assesment" className="skills-asse-img" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Skills;