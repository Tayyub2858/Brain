import React from "react";
import './AppDevelopmentStyle.css';
import AppInput from "./AppDevelopmentInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import ReactPlayer from "react-player";

const AppDevelopment = () =>{
    return(
        <>
            <DrawerDasboard componentName={"App Develoment"}/>
            <div className="app-container">
                {AppInput.map((course , index)=>(
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
export default AppDevelopment;