import React, {useState} from "react";

const ContactInput = () => {
const [fullName, setfullName] = useState("");
const [emailAddress, setemailAddress] = useState("");
const [trainingType, settrainingType] = useState("");
const [message, setmessage] = useState("");

const contactHandler = () => {
    console.log(fullName, emailAddress, trainingType, message);
    setfullName("")
    setemailAddress("")
    setmessage("")
}
return{
    fullName,
    setfullName,
    emailAddress,
    setemailAddress,
    trainingType,
    settrainingType,
    message,
    setmessage,
    contactHandler
}
}
export default ContactInput;