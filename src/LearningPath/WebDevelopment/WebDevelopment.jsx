import React from "react";
import './WebDevelopmentStyle.css';
import WebInput from "./WebDevelopmentInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import ReactPlayer from "react-player";

const WebDevelopment = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Web Development"}/>
            <div className="web-container">
                {WebInput.map((course , index)=>(

                        <div key={index}>
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
export default WebDevelopment;