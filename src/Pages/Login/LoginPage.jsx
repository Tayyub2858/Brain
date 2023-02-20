import React from 'react';
import UserLogin from './UserLogin';

import './LoginPageStyles.css'
const LoginPage = () => {

    const {
        setuserEmail,
        setuserPassword,
        userEmail,
        userPassword,
        loginUser
    } = UserLogin();

        return (
            <>
            <div className='login-page-container'>
                <div className="demo-details-container">
                    <h1 className='demo-title-txt'> Hi there, let's Login to have some Fun</h1>

                    <div className="demo-input-container">
                        <p className="input-title-txt">Email *</p>
                        <input type="text" onChange={(e)=>setuserEmail(e.target.value)} value={userEmail} className="demo-input" />
                        <p className="input-title-txt">Password *</p>
                        <input type="password" onChange={(e)=>setuserPassword(e.target.value)} value={userPassword}  className="demo-input" />
                       
                        <button onClick={loginUser} className="request-info">Login</button>
                    </div>
                </div>
          
        </div>
            
            </>
        )
    }

    export default LoginPage;