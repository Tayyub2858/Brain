import React from "react";
import './VirtualAssistantStyle.css';
import VirtualInput  from "./VirtualAssistantInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import ReactPlayer from "react-player";

const VirtualAssistant = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Virtual Assistant"}/>
            <div className="virtual-container">
                {VirtualInput.map((course , index)=>(
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
export default VirtualAssistant;