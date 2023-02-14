import React, { useState } from "react";

const SignupInput = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [password, setpassword] = useState("");

    const signUpHandler = (e) => {
        e.preventDefault();

        console.log(firstName, lastName, emailAddress, password);

        setfirstName("")
        setlastName("")
        setemailAddress("")
        setpassword("")
    }

    return {
        setfirstName,
        setlastName,
        setemailAddress,
        setpassword,
        firstName,
        lastName,
        emailAddress,
        password,
        signUpHandler,
    }
}
export default SignupInput;