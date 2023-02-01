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
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={12} md={6}>
          <div className="pricing-card">
            Hello World
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="pricing-card">
            Hello World
          </div>
        </Grid>
      </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Pricing