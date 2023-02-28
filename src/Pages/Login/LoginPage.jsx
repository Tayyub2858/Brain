import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../ConfigFile/Firebase-Config';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import './LoginPageStyles.css'

const auth = getAuth(app)

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(((userCredential) => {
        const user = userCredential.user;
        navigate("/dashboard")
        console.log(user);
        alert("User login Successfully");
      }))
      .catch(() => console.log(alert("User Not Exist")));

  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <>
      <div>
        <button className='nav-btn' id='popup' onClick={handleOpen}>LOGIN</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='login-modal'
        >
          <div className="login-container">
            <div className='login-box'>
            <h1 className='login-title'>Log In to your Account</h1>
            <br />
            <input
            className='input-text'
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <br />
            <input
            className='input-text'
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            {/* <p className='forgot-password'>forgot password</p> */}
            <br />
            <button className='login-btn' onClick={signIn}>Log In</button>
            </div>
          </div>
        </Modal>
      </div>


    </>

  )
}

export default LoginPage;