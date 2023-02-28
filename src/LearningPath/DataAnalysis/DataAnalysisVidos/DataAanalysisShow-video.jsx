import React from "react";
import './DataAnalysisShowVideoStyle.css';
import ReactPlayer from "react-player";
import DataAnalysisVideo from "./DataAnalysis-Video";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";
import { Grid } from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import ShowTitleInput from "./ShowTitleInput";

const DataAnalysisShowVideo = () => {

    const{
        progress,
        setVideos,
        videos,
        handleclick,
    }=ShowTitleInput()
    return (
        <>
            <DrawerDasboard className="top-nav-bar" componentName={"Data Analysis Vides"} />
            <div className="showvdieo-container">
                <Grid container>
                    <Grid item sx={12} sm={12} md={3}>
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
                    <Grid item sx={12} sm={12} md={9}>
                        <div className="display-video-box">
                            <div className="show-video-box">

                                <ReactPlayer
                                className="video-player"
                                    playing={false}
                                    muted={false}
                                    controls={true}
                                    width={'70%'}
                                    height={'50%'}
                                    url={videos}
                                    config={{ 
                                        file: { 
                                          attributes: {
                                            onContextMenu: e => e.preventDefault()
                                          } 
                                        } 
                                      }}
                                   
                                />
                                <div className="complete-btn-box">
                                    <button className="completed-video" onClick={handleclick}>Mark As Done</button>
                                   
                                </div>
                                <LinearProgress variant="determinate" value={progress} max='100'/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </>
    )
}
export default DataAnalysisShowVideo;