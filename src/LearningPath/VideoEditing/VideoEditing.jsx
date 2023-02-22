import React from "react";
import ReactPlayer from "react-player";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import './VideoEditingStyle.css';
import VideoEditingInput from "./VideoEditingInput";

const VideEditing = () =>{
    return(
        <>
        <DrawerDasboard componentName={"Video Editing"}/>
            <div className="video-container">
                {VideoEditingInput.map((course , index)=>(
                    <div>
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
export default VideEditing;