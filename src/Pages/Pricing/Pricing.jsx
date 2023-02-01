import { Grid } from '@material-ui/core'
import React from 'react'
import Footer from '../../Modules/Footer/Footer'
import Nav from '../../Modules/Nav/Nav'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <>
      <Nav />
      <div className="pricing-container">
        <div className="txt-container">
          <h1 className="pricing-heading">
            Full Access to All Courses & Paths
          </h1>
          <p className="pricing-txt">
            Select Your Plan
          </p>
        </div>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={12} md={4}>
            <div className="pricing-card">
              <div className="price-data-card">
                <h1 className="price-data-card-heading">
                  INDIVIDUAL
                </h1>
                <p className="pricing-data-card-txt">
                  Perfect for individual students looking to elevate their business intelligence skills
                </p>
                <p className="pricing-data-card-grad">
                  FREE 1-DAY TRIAL
                </p>

                <p className="price">
                  then <span className="price-txt"> $69</span>/month
                </p>
                <button className="signup price-btn">Signup</button>
                <div className="type">
                  <p className="title-type">Members <span className="title-type-txt"> 1</span></p>
                  <p className="title-type">Course & Path Access <span className="title-type-txt"> Unlimited</span></p>
                  <p className="title-type">Customer Support <span className="title-type-txt"> Live Chat</span></p>
                </div>
                <div className="features">
                  <h3 className="features-heading">
                    FEATURES
                  </h3>
                  <p className="features-txt">24/7 Course Access</p>
                  <p className="features-txt">Personal Dashboard</p>
                  <p className="features-txt">Expert Coaching</p>
                  <p className="features-txt">Skill Assesment</p>
                  <p className="features-txt">Portfolio </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="pricing-card">
              <div className="price-data-card">
                <h1 className="price-data-card-heading">
                  CORPORATE
                </h1>
                <p className="pricing-data-card-txt">
                  For large companies and business looking to build an industry-leading BI practice
                </p>
                <p className="pricing-data-card-grad">
                  Custom
                </p>
                <p className="price">
                  <span className="price-txt"> PRICING</span>
                </p>
                <button className="signup price-btn">CONTACT US</button>

                <div className="type">
                  <p className="title-type">Members <span className="title-type-txt"> 20+</span></p>
                  <p className="title-type">Course & Path Access <span className="title-type-txt"> Unlimited</span></p>
                  <p className="title-type">Customer Support <span className="title-type-txt"> Premium</span></p>
                </div>
                <div className="features">
                  <h3 className="features-heading">
                    FEATURES
                  </h3>
                  <p className="features-txt">24/7 Course Access</p>
                  <p className="features-txt">Personal Dashboard</p>
                  <p className="features-txt">Expert Coaching</p>
                  <p className="features-txt">Skill Assesment</p>
                  <p className="features-txt">Portfolio </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Pricing