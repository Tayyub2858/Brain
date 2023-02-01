import React, { useState } from 'react';
import Logo from '../../Assets/Front-Page/Logo2.png'
import './NavStyles.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  const [isMenuClosed, setMenuClosed] = useState(true);
  return (
     <div className="nav-container" >
            <nav>
                <div className="nav-brand">
             <Link to='/'> <img src={Logo} alt="companylogo" className='company-logo' /></Link>    
                </div>
                <div className="nav-links">
                    <Link to='/Learn'><button className="nav-btn">LEARN</button></Link>   
                    <Link to='/TeamTraining'><button className="nav-btn">CORPORATE TRAINING</button></Link>     
                    <Link to='/Pricing'><button className="nav-btn">PRICING</button></Link>  
                    <Link to='/Testimonials'><button className="nav-btn">GALLERY</button></Link>   
                </div>
                
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
                <div className="nav-links">
                <Link to='/Contact'><button className="nav-btn">CONTACT</button></Link> 
                <Link to='/Login'>  <button className="nav-btn">LOGIN</button></Link> 
                <Link to='/Signup'> <button className="signup">SIGN UP</button></Link> 
                </div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            <Link to='/Learn'>        <button className="nav-btn-mb">LEARN</button></Link>

                            <Link to='/Teamtraining'><button className="nav-btn-mb">CORPORATE TRAINING</button></Link>
                            <Link to='/Pricing'>      <button className="nav-btn-mb">PRICING</button></Link>
                            <Link to='/Testimonials'> <button className="nav-btn-mb">GALLERY</button></Link>
                            <Link to='/Contact'>      <button className="nav-btn-mb">CONTACT</button></Link>
                            <Link to='/Login'>        <button className="nav-btn-mb">LOGIN</button></Link>
                            <Link to='/Signup'>       <button className="signup-mb">SIGN UP</button></Link>
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