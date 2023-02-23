import { useState } from "react";


const ShowTitleInput = () => {

    const[ShowTitle , setShowTitle] = useState("");
    return{
        setShowTitle,
        ShowTitle,
    }
}
export default ShowTitleInput;