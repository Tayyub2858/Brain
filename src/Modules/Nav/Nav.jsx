import React, { useState } from 'react';
import Logo from '../../Assets/Front-Page/Logo4.png'
import './NavStyles.css';
import { Link } from 'react-router-dom';
import {BiCategory} from 'react-icons/bi'
const Nav = () => {
    
  const [isMenuClosed, setMenuClosed] = useState(true);
  return (
     <div className="nav-container" >
        <div className="nav-container-text">
            <nav>
                <div className="nav-brand">
                <Link to='/'> <img src={Logo} alt="companylogo" className='company-logo' /></Link> 
                    <span className='category-btn'><BiCategory className='cateicons'/></span>
                <div class="dropdown">
                    <button class="dropbtn">CATEGORIES</button>
                    <div class="dropdown-content">
                        <Link to=""><span className='drop-btn'>Categories 1</span></Link>
                        <Link to=""><span className='drop-btn'>Categories 1</span></Link>
                        <Link to=""><span className='drop-btn'>Categories 1</span></Link>
                        <Link to=""><span className='drop-btn'>Categories 1</span></Link>
                        {/* <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                        <a href="#">Category 3</a> */}
                </div>
  </div>
                </div>
                
                <div className="nav-links">
                    <Link to='/'><span className="nav-btn">HOME</span> </Link>   
                    <Link to='/learn'><span className="nav-btn">COURSES</span> </Link>   
                    {/* <Link to='/corporate-training'><span className="nav-btn"> CORPORATE TRAINING</span> </Link>      */}
                    <Link to='/Pricing'><span className="nav-btn">PRICING</span> </Link>  
                    <Link to='/gallery'><span  className="nav-btn">GALLERY</span> </Link>
                    <Link className='nav-btn' to='/contact'> <span className="nav-btn">CONTACT</span> </Link> 
                {/* <Link className='nav-btn' to='/login'> <span className="nav-btn">LOGIN</span> </Link>  */}
                <Link  to='/signup'> <button className="signup">Start Learning</button> </Link>  
                </div>
                
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            <Link to='/'><button className="nav-btn-mb">HOME</button></Link>   
                            <Link to='/learn'><button className="nav-btn-mb">LEARN</button></Link>
                            <Link to='/corporate-training'><button className="nav-btn-mb">CORPORATE TRAINING</button></Link>
                            <Link to='/pricing'><button className="nav-btn-mb">PRICING</button></Link>
                            <Link to='/Testimonials'> <button className="nav-btn-mb">GALLERY</button></Link>
                            <Link to='/contact'> <button className="nav-btn-mb">CONTACT</button></Link>
                            <Link to='/Login'><button className="nav-btn-mb">LOGIN</button></Link>
                            <Link to='/Signup'><button className="signup-mb">SIGN UP</button></Link>

                        </div>
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