import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore/lite";
import { db, app } from "../../ConfigFile/Firebase-Config";
// import { Await } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// const auth = getAuth(app);

const SignupInput = () => {
    const [firstName, setfirstName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [course1, setCourse1] = useState(null);
    const [course2, setCourse2] = useState(null);
    const [course3, setCourse3] = useState(null);
    const [course4, setCourse4] = useState(null);
    const [course5, setCourse5] = useState(null);
    const [course6, setCourse6] = useState(null);
    const [course7, setCourse7] = useState(null);
    const [course8, setCourse8] = useState(null);
    const [course9, setCourse9] = useState(null);
    const [course10, setCourse10] = useState(null);
    const [course11, setCourse11] = useState(null);
    const [course12, setCourse12] = useState(null);
    const [course13, setCourse13] = useState(null);



    const registerUser = async() => {
        setfirstName("");
        setPhoneNumber("");
        setemailAddress("");
       await addDoc(collection (db, "User-Info"), {
        Name:firstName,
        Email:emailAddress,
        PhoneNbr:PhoneNumber,
        course1:course1,
        course2:course2,
        course3:course3,
        course4:course4,
        course5:course5,
        course6:course6,
        course7:course7,
        course8:course8,
        course9:course9,
        course10:course10,
        course11:course11,
        course12:course12,
        course13:course13
    })


        // console.log(
        //     firstName,
        //     emailAddress,
        //     PhoneNumber,
        //     course1,
        //     course2,
        //     course3,
        //     course4,
        //     course5,
        //     course6,
        //     course7,
        //     course8,
        //     course9,
        //     course10,
        //     course11,
        //     course12,
        //     course13,
        // );
    }
    // const [password, setpassword] = useState("");

    //Sign up Handler

    // const signUpHandler = (e) => {
    //     e.preventDefault();

    //     if (firstName === "") {
    //         alert("Please Enter Your Name");
    //     }

    //     else if (lastName === "") {
    //         alert("please Enter Your Name");
    //     }
    //     else if (emailAddress === "") {
    //         alert(" Please Enter Your Email");
    //     }
    //     else if (password === "") {
    //         alert("please choose a valid password")
    //     }
    //     else if (password.length < 8) {
    //         alert("Your Password Must Contain Atleast 8 Characters")
    //     }
    //     else {
    //         userSignUp(emailAddress, password);
    //         addUser(firstName, lastName, emailAddress, password);

    //     }




    // }
    // Sign Up Function
    // const userSignUp = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password);

    // }
    // Add User To Data Base
    // const addUser = async (firstName, lastName, email, password) => {

    //     await addDoc(collection(db, "Users"), {
    //         firstName: firstName,
    //         lastName: lastName,
    //         emailAddress: email,
    //         password: password
    //     }).then(function (res) {
    //         alert("Create Account Successfully")
    //         console.log(res.message)
    //     }).catch(function (res) {
    //         alert("Create Account Cannot Successfully")
    //         console.log(res.message)
    //     })
    // }

    return {
        setfirstName,
        setPhoneNumber,
        setemailAddress,
        firstName,
        PhoneNumber,
        emailAddress,

        registerUser,
        course1, setCourse1,
        course2, setCourse2,
        course3, setCourse3,
        course4, setCourse4,
        course5, setCourse5,
        course6, setCourse6,
        course7, setCourse7,
        course8, setCourse8,
        course9, setCourse9,
        course10, setCourse10,
        course11, setCourse11,
        course12, setCourse12,
        course13, setCourse13,
    }
}
export default SignupInput;