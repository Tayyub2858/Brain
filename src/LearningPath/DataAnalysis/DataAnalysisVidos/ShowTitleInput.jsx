import { useState } from "react";
import { useDispatch } from "react-redux";
import updateFormTitle from '../../../Redux/Action/Action';
const ShowTitleInput = () => {

  const [ShowTitle, setShowTitle] = useState("");
  const [progress, setprogress] = useState(0);
  const [videos, setVideos] = useState(" ");
  const dispatch = useDispatch();
  const handleclick = () => {
   dispatch(updateFormTitle("Data Analysis & Visualization in PBI"))
   alert("Congratulations You've Started Your Course")
  }


  return {
    setShowTitle,
    setprogress,
    setVideos,
    ShowTitle,
    progress,
    videos,
    handleclick,
  }

}
export default ShowTitleInput;