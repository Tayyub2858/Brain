import { useState } from "react";
import {app} from "../../ConfigFile/Firebase-Config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
const auth = getAuth(app)

const UserLogin = () =>{
const [userEmail, setuserEmail] = useState("")
const [userPassword, setuserPassword] = useState("")
const navigate = useNavigate();

const loginUser = () =>{

   if (userEmail === "") {
    alert("Email Cannot be Empty")
   }
   else if (userPassword === "") {
    alert("Password cannot be Empty")
   }
   else
   signIn(userEmail, userPassword)
}

const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
      .then(((userCredential) => {
        const user = userCredential.user;
        navigate("/dashboard")
        console.log(user);
        alert("User login Successfully");
      }))
      .catch(() => console.log(alert("User Not Exist")))
}
return{
    setuserEmail,
    setuserPassword,
    userEmail,
    userPassword,
    loginUser
}
}
export default UserLogin;