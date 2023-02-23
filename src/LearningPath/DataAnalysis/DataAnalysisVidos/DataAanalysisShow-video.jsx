import React, { useState } from "react";
import './DataAnalysisShowVideoStyle.css';
import ReactPlayer from "react-player";
import DataAnalysisVideo from "./DataAnalysis-Video";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";
import { Grid } from "@material-ui/core";

const DataAnalysisShowVideo = () => {

    const [videos, setVideos] = useState();

    return (
        <>
            <DrawerDasboard componentName={"Data Analysis Vides"} />
            <Grid container>
                <Grid item sx={12} sm={12} md={4}>
                    <div className="video-btn-box">
                        <div className="video-btn-list">
                            {DataAnalysisVideo.map((coursevideo, index) => (
                                <div key={index}>
                                    <button className="video-button" onClick={() => setVideos(coursevideo.video)}>{coursevideo.title}</button>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item sx={12} sm={12} md={8}>
                    <div className="show-video-box">
                        <ReactPlayer
                            playing={false}
                            muted={false}
                            controls={true}
                            width={'80%'}
                            height={'60%'}
                            url={videos}
                        />
                    </div>
                </Grid>
            </Grid>



        </>
    )
}
export default DataAnalysisShowVideo;