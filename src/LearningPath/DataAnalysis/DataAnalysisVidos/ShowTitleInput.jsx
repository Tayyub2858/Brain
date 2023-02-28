import { useState , useEffect } from "react";


const ShowTitleInput = () => {

    const[ShowTitle , setShowTitle] = useState("");  
    const[progress , setprogress] = useState(0);
    const[videos , setVideos] = useState(" ");
    const handleclick= () =>{
        setprogress(progress + 10);
    }
    
  useEffect(() => {
    // Retrieve progress from local storage when component mounts
    const storedProgress = localStorage.getItem("progress");
    if (storedProgress) {
        setprogress(parseInt(storedProgress));
    }
  }, []);

  useEffect(() => {
    // Store progress in local storage whenever it changes
    localStorage.setItem("progress", progress);
  }, [progress]);

    return{
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