import React from 'react'
import './LearningStyle.css';
import { Grid } from '@material-ui/core';

const Learning = () => {
  return (
    <>
      <div className="learning-container">
        <div className="learning-heading-box">
          <h1 className='learning-title'>Get Everything for Learning</h1>
          <p className='learning-para-text'>Why Chosse us</p>
        </div>
        <div className="cards-learning-box">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <h1>hellow Word</h1>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Learning