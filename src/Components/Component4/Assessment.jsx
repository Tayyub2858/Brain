import React from "react";
import './AssessmentStyle.css'
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { ReactVideoPlayer } from 'video-player-for-react';
import 'video-player-for-react/dist/index.css'

const Assessment = () => {
    return (
        <>
            <DrawerDasboard />
            <div className="video-container">
                <ReactVideoPlayer
                    width="928px"
                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                    poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                />
            </div>
        </>
    )
}
export default Assessment;