import React from 'react';
import './NavStyles.css';
import { Grid } from '@material-ui/core';
import Logo from '../../Assets/Front-Page/logo1.png'
const Nav = () => {
  return (
    <>
      <div className="navbar-containter">
      <Grid container>
          <Grid xs={3}>
            <div className='nav-logo-container'>
            <img src={Logo} alt="" className='navbar-image' />
            </div>
          </Grid>
          <Grid xs={6}>
            <nav className='navbar-nav'>
              <ul><li>LEARN</li></ul>
              <ul><li>RESOURCES</li></ul>
              <ul><li>TEAM TRANING</li></ul>
              <ul><li>PRICING</li></ul>
              <ul><li>TESTIMONIALS</li></ul>
            </nav>
          </Grid>
          <Grid xs={3}>
            <div className='navbar-signup'>
            <nav className='navbar-nav'>
              <ul><li>CONTECT</li></ul>
              <ul><li>LOGIN</li></ul>
            </nav>
            <button className='nav-signup-btn'>SIGN UP</button>
            </div>
          </Grid>
        </Grid>
       
      </div>
    </>
  )
}

export default Nav;