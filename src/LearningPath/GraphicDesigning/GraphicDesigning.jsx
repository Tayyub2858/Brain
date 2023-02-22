import React from "react";
import './GraphicDesigningStyle.css'
import GraphicDesigningInput from "./GraphicDesigningInput";
import ReactPlayer from "react-player";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
const GraphicDesigning = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Graphic Designing"}/>
            <div className="graphic-container">
                {GraphicDesigningInput.map((course , index)=>(
                    <div kay={index}>
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
export default GraphicDesigning;