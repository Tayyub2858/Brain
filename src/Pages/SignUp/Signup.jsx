import React from 'react';
import Nav from '../../Modules/Nav/Nav';
import Footer from '../../Modules/Footer/Footer';
import { Grid } from '@material-ui/core';
import ShowPwd from '../../Assets/Front-Page/showpwd.svg'
import HidePwd from '../../Assets/Front-Page/hidepwd.svg'
import './SignupStyles.css';
import SignupInput from './SignupInput';
const Signup = () => {
  const [isRevealPwd, setIsRevealPwd] = React.useState(false);
  const {
    setfirstName,
    setlastName,
    setemailAddress,
    setpassword,
    signUpHandler,
    firstName,
    lastName,
    emailAddress,
    password
  } = SignupInput()
  return (
    <>
      <Nav />
      <div className="signup-container">
        <p className="signup-title">Sign Up</p>
        <h1 className="signup-heading">Sign up with Brain Analytics to Transform your Career</h1>
      </div>
      <div className="signup-input-container">
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={12} md={12}>
            <h2 className="create-account">Create Your Free Account</h2>
            <p className="create-account-txt">Start Learning Now!</p>
          </Grid>
          <Grid container justifyContent='center'>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">First Name</p>
              <input onChange={(e) => setfirstName(e.target.value)} type="text" value={firstName} className="signup-input" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">Last Name</p>
              <input onChange={(e) => setlastName(e.target.value)} type="text" value={lastName} className="signup-input" />
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">Email Address</p>
              <input onChange={(e) => setemailAddress(e.target.value)} type="text" value={emailAddress} className="signup-input" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">Create a Password</p>
              <input name="pwd"
                onChange={(e) => setpassword(e.target.value)} type={isRevealPwd ? "text" : "password"} value={password} className="signup-input" />
              <img className='password-toggle' title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? ShowPwd : HidePwd}
                onClick={() => setIsRevealPwd(prevState => !prevState)} />
            </Grid>
          </Grid>
          <p className="signup-txt">By continuing I agree to Brain Analytics's  Terms of Service and Customer Privacy Policy</p>

        </Grid>
        <button onClick={signUpHandler} className="signup-btn">
          Create Account
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Signup