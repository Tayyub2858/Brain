import React, { useState } from 'react';
import Logo from '../../Assets/Front-Page/logo1.png'
import './NavStyles.css';
const Nav = () => {
  const [isMenuClosed, setMenuClosed] = useState(true);
  return (
     <div className="nav-container" >
            <nav>
                <div className="nav-brand">
                  <img src={Logo} alt="companylogo" className='company-logo' />
                </div>
                <div className="nav-links">
                <button className="nav-btn">LEARN</button>
                    <button className="nav-btn">RESOURCES</button>
                    <button className="nav-btn">TEAM TRAINING</button>
                    <button className="nav-btn">PRICING</button>
                    <button className="nav-btn">TESTIMONIALS</button>
                </div>
                
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
                <div className="nav-links">
                    <button className="nav-btn">CONTACT</button>
                    <button className="nav-btn">LOGIN</button>
                    <button className="signup">SIGN UP</button>
                </div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                    <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                        <button className="nav-btn">LEARN</button>
                    <button className="nav-btn">RESOURCES</button>
                    <button className="nav-btn">TEAM TRAINING</button>
                    <button className="nav-btn">PRICING</button>
                    <button className="nav-btn">TESTIMONIALS</button>
                    <button className="nav-btn">CONTACT</button>
                    <button className="nav-btn">LOGIN</button>
                    <button className="signup">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Nav;





  //     <div className="navbar-containter">
  //     <Grid container>
  //         <Grid xs={3}>
  //           <div className='nav-logo-container'>
  //           <img src={Logo} alt="" className='navbar-image' />
  //           </div>
  //         </Grid>
  //         <Grid xs={6}>
  //           <nav className='navbar-nav'>
  //             <ul><li>LEARN</li></ul>
  //             <ul><li>RESOURCES</li></ul>
  //             <ul><li>TEAM TRANING</li></ul>
  //             <ul><li>PRICING</li></ul>
  //             <ul><li>TESTIMONIALS</li></ul>
  //           </nav>
  //         </Grid>
  //         <Grid xs={3}>
  //           <div className='navbar-signup'>
  //           <nav className='navbar-nav'>
  //             <ul><li>CONTACT</li></ul>
  //             <ul><li>LOGIN</li></ul>
  //           </nav>
  //           <button className='nav-signup-btn'>SIGN UP</button>
  //           </div>
  //         </Grid>
  //       </Grid>
       
  //     </div>
  //   </>
  // )