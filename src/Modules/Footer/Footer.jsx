import React from 'react'
import './FooterStyles.css';
import { Grid } from '@material-ui/core';
import Logo from '../../Assets/Front-Page/footerLogo.png';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <div className="footer-objects">
              <img src={Logo} alt="" className="footer-logo" />
              <p className="footer-txt">
                Empowering everyday people with life-changing data skills.
              </p>
              <p className="footer-txt-newsletter">
                Subscribe to the newsletter
              </p>
              <input type="text" placeholder='barry@hbo.com' className="sub" />
              <button className="subs-btn">SUBSCRIBE</button>
              <p className="footer-txt">
                <i>No spam, just helpful tips & tricks delivered directly to your inbox.</i>
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                LEARN
              </h3>
              <p className="footer-links">
                Courses
              </p>
              <p className="footer-links">
                Blog
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                RESOURCES
              </h3>

              <p className="footer-links">
                Gallery
              </p>
              <p className="footer-links">
                Help Center
              </p>
              <p className="footer-links">
                Site map
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                SERVICES
              </h3>
              <p className="footer-links">
                Corporate Training

              </p>
              <p className="footer-links">
                Consulting
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                CONNECT
              </h3>
              <p className="footer-links">
                Meet The Team

              </p>
              <p className="footer-links">
                Contact
              </p>
              <p className="footer-links">
                Join Us on Social Media
              </p>
              <span>
                <svg width="0" height="0">
                  <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#25257c" offset="0%" />
                    <stop stopColor="#FACA28" offset="100%" />
                  </linearGradient>
                </svg>
                <Link
                  to="https://www.facebook.com/BrainAnalytics.pk"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillFacebook
                    style={{ fill: "url(#blue-gradient)" }}
                    className='social-media-links' />
                </Link>
                <Link
                  to="https://www.facebook.com/BrainAnalytics.pk"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillInstagram
                    style={{ fill: "url(#blue-gradient)" }}
                    className='social-media-links' />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/brainanalytics/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillLinkedin
                    style={{ fill: "url(#blue-gradient)" }}
                    className='social-media-links' />
                </Link>
                <Link
                  to="https://www.facebook.com/BrainAnalytics.pk"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillTwitterSquare
                    style={{ fill: "url(#blue-gradient)" }}
                    className='social-media-links' />
                </Link>
              </span>
            </div>
          </Grid>
          <Grid container justifyContent='center'>

          </Grid>
        </Grid>
      </div>
      <div className="end-footer-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <p className="endfooter-txt">
              &copy; Brain Analytics, LLC | All Rights Reserved
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className="endfooter-links">

              <span className="endfooter-link">Terms&Conditions</span>
              <span className="endfooter-link">Privacy</span>
              <span className="endfooter-link">Contact</span>
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Footer;