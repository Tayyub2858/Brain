import React from 'react'
import './FooterStyles.css';
import { Grid } from '@material-ui/core';
import Logo from '../../Assets/Front-Page/footerLogo.png';
import { Link } from 'react-router-dom'
import barcode from '../../Assets/Front-Page/BARCODE.png';
import fb from '../../Assets/Front-Page/FB.png';
import insta from '../../Assets/Front-Page/INSTA.png';
import li from '../../Assets/Front-Page/LIN.png';
import tw from '../../Assets/Front-Page/TW.png';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={1}>
            <div className="footer-logo-container">
              <Link to='/'><img src={Logo} alt="Footer Logo" className='footer-logo' /></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <div className="address-container">
              <h4 className="footer-heading">
                HEAD OFFICE
              </h4>
              <p className="footer-txt">
                Brain Analytics, Office 18, Khayaban Gardens Sargodah Road, Faisalabad
                <span className="ph-num">phone: 041-8787246</span>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                LEARN
              </h4>
              <p className="footer-link-txt">
                Courses
              </p>
              <p className="footer-link-txt">
                Blog
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                RESOURCES
              </h4>
              <p className="footer-link-txt">
                Gallery
              </p>
              <p className="footer-link-txt">
                Help Center
              </p>
              <p className="footer-link-txt">
                Site Map
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                SERVICES
              </h4>
              <Link to='/corporate-training'>
                <p className="footer-link-txt">
                  Corporate Training
                </p></Link>
              <p className="footer-link-txt">
                Consulting
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                CONNECT
              </h4>
              <p className="footer-link-txt">
                Meet The Team
              </p>
              <p className="footer-link-txt">
                Connect
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <div className="newsletter-container">
              <h4 className="footer-heading">
                NEWS LETTER
              </h4>
              <p className="footer-txt">
                Subscribe our News Letter for updates
              </p>
              <input type="text" placeholder='info@brainanalytics.pk' className="sub" />
              <button className="sub-btn"> Subscribe</button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="barcode">
              <img src={barcode} alt="barcode" className="barcode-img" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="socialmedia-links">
            <img src={fb} alt="facebook" className="social-media-img" />
            <img src={insta} alt="instagram" className="social-media-img" />
            <img src={li} alt='linked in' className="social-media-img" />
            <img src={tw} alt="twitter" className="social-media-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Footer