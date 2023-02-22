import React from "react";
import './DataAnalysisShowVideoStyle.css';
import ReactPlayer from "react-player";
import DataAnalysisVideo from "./DataAnalysis-Video";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";

const DataAnalysisShowVideo = () =>{
    return(
        <>
        <DrawerDasboard componentName={"Data Analysis Vides"}/>
        <div className="dataanalysisshowvideo-container">
            {DataAnalysisVideo.map((course,index)=>(
                <div key={index} className="dataAnalysis-showvideo">
                    <h1>{course.title}</h1>
                    <ReactPlayer
                    playing={false}
                    muted={false}
                    controls={true}
                    width={'50%'}
                    height='50%'
                    url={course.video}
                    />
                </div>
                ))

            }
            </div>
        </>
    )
}
export default DataAnalysisShowVideo;