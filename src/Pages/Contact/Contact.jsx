import React from 'react';
import Nav from '../../Modules/Nav/Nav';
import Footer from '../../Modules/Footer/Footer';
import { Grid } from '@material-ui/core';
import './ContactStyles.css';
import { AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import ContactInput from './ContactInput';
const Contact = () => {
    const {
        fullName,
        setfullName,
        emailAddress,
        setemailAddress,
        trainingType,
        settrainingType,
        message,
        setmessage,
        contactHandler
    } = ContactInput();
    return (
        <>
            <Nav />
            <div className="contact-container">
                <div className="contact-txt-container">
                    <div className="contact-txt">

                        <h3 className="contact-title">
                            Contact Us
                        </h3>
                        <h1 className="contact-heading">
                            HOW CAN WE HELP YOU?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form-txt">
                            <p className="contact-form-desc">
                                Not sure which path is right for you? Question about Corporate training or consulting?
                                Just want to talk? <span className='contact-form-b'>Drop us a line, we’re here to help.</span>
                            </p>
                            <div className="info-container">
                                <p className="contact-info">
                                    <AiOutlineMail /> brainanalytics.pk@gmail.com
                                </p>
                                <p className="contact-info">
                                    <FaMapMarkerAlt /> Office 18, Brain Analytics Khayaban Gardens Sargodah Road, Faisalabad
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form-input">
                            <p className='input-title'>Full Name</p>
                            <input onChange={(e) => setfullName(e.target.value)} value={fullName} type='text' className='contact-input' />
                            <p className='input-title'>Email</p>
                            <input onChange={(e) => setemailAddress(e.target.value)} value={emailAddress} type='text' className='contact-input' />
                            <p className='input-title'>I'm looking for</p>
                            <input onChange={(e) => settrainingType(e.target.value)} name='typeoftraining' type='radio' value='IndividualTraining' /> <span className="radio-txt">Individual Training</span>
                            <input onChange={(e) => settrainingType(e.target.value)} name='typeoftraining' type='radio' value='CorporateTraining' /> <span className="radio-txt">Corporate Training</span>
                            <input onChange={(e) => settrainingType(e.target.value)} name='typeoftraining' type='radio' value='Other' /> <span className="radio-txt">Other</span>
                            <p className='input-title'>Message</p>
                            <textarea onChange={(e)=>setmessage(e.target.value)}  value={message} name="message" className='form-msg' cols="55" rows="15" />
                            <button onClick={contactHandler} className="query-submit">SUBMIT</button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default Contact