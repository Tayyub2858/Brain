import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore/lite";
import { db, app } from "../../ConfigFile/Firebase-Config";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app);

const SignupInput = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [password, setpassword] = useState("");

    const signUpHandler = (e) => {
        e.preventDefault();

        if (firstName === "") {
            alert("Please Enter Your Name");
        }

        else if (lastName === "") {
            alert("please Enter Your Name");
        }
        else if (emailAddress === "") {
            alert(" Please Enter Your Email");
        }
        else if (password === "") {
            alert("please choose a valid password")
        }
        else if (password.length < 8) {
            alert("Your Password Must Contain Atleast 8 Characters")
        }
        else {
            userSignUp(emailAddress, password);
            addUser(firstName, lastName, emailAddress, password);
            // setfirstName("")
            // setlastName("")
            // setemailAddress("")
            // setpassword("")

        }




    }
    const userSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);

    }
    const addUser = async (firstName, lastName, email, password) => {

        await addDoc(collection(db, "Users"), {
            firstName: firstName,
            lastName: lastName,
            emailAddress: email,
            password: password
        }).then(function (res) {
            alert("Create Account Successfully")
            console.log(res.message)
        }).catch(function (res) {
            alert("Create Account Cannot Successfully")
            console.log(res.message)
        })
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