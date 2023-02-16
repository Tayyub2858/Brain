import { collection, addDoc } from "@firebase/firestore/lite";
import { db } from "../../../ConfigFile/Firebase-Config";
import { useState } from "react";
const GetClientData = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [compnyName, setcompanyName] = useState("");
    const [compnySize, setcompanySize] = useState("");
    const [hearBain, sethearBrain] = useState("");
    const [traningGoal, settraningGoal] = useState("");

    const requestHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "ClintRequests"), {
            FirstName: firstName,
            LastName: lastName,
            Email: emailAddress,
            CompanyName: compnyName,
            CompanySize: compnySize,
            HearaboutBrainanalyic: hearBain,
            TrainingGoals: traningGoal,
        }).then(function (res) {
            alert("Request Send Succussfully")
            console.log(res)
        }).catch(function (res) {
            alert("Request cannot Send Successfully")
            console.log(res)
        })
        console.log(firstName, lastName, emailAddress, compnyName, compnySize, hearBain, traningGoal);

        setfirstName("")
        setlastName("")
        setemailAddress("")
        setcompanyName("")
        setcompanySize("")
        sethearBrain("")
        settraningGoal("")
    }

    return {
        setfirstName,
        setlastName,
        setemailAddress,
        setcompanyName,
        setcompanySize,
        sethearBrain,
        settraningGoal,
        firstName,
        lastName,
        emailAddress,
        compnyName,
        compnySize,
        hearBain,
        traningGoal,
        requestHandler,
    }
}
export default GetClientData;