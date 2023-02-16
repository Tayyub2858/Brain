import React from 'react'
import { Modal } from '@material-ui/core';
import GetClientData from '../GetClientData/GetClientData';


const RequestDemo = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {
        setfirstName,
        setlastName,
        setemailAddress,
        setcompanyName,
        setcompanySize,
        sethearBrain,
        settraningGoal,
        requestHandler,
        firstName,
        lastName,
        emailAddress,
        compnyName,
        compnySize,
        hearBain,
        traningGoal
    } = GetClientData();
    return (
        <div>
            <button className="demo-info-btn" onClick={handleOpen}>
                Request a Plan
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="demo-details-container">
                    <h1 className='demo-title-txt'> Schedule a Free Consultation For Your Company</h1>

                    <div className="demo-input-container">
                        <p className="input-title-txt">First Name *</p>
                        <input type="text" onChange={(e)=>setfirstName(e.target.value)} value={firstName} className="demo-input" />
                        <p className="input-title-txt">Last Name *</p>
                        <input type="text" onChange={(e)=>setlastName(e.target.value)} value={lastName}  className="demo-input" />
                        <p className="input-title-txt">Business Email Address *</p>
                        <input type="text" onChange={(e)=>setemailAddress(e.target.value)} value={emailAddress}  className="demo-input" />
                        <p className="input-title-txt">Company Name *</p>
                        <input type="text" onChange={(e)=>setcompanyName(e.target.value)} value={compnyName}  className="demo-input" />
                        <p className="input-title-txt">Company Size *</p>
                        <div onChange={(e)=>setcompanySize(e.target.value)} value={compnySize}  className="radio-container">
                            <input type="radio" name='companysize'  value="50-99" /><span className="radio-title">50-99</span>
                            <input type="radio" name='companysize' value="100-199" /><span className="radio-title">100-199</span>
                            <input type="radio" name='companysize' value="200-299" /><span className="radio-title">200-299</span>
                            <input type="radio" name='companysize' value="300" /><span className="radio-title">300+</span>
                        </div>

                        <p className="input-title-txt">How did your hear about Brain Analytics?</p>
                        <input type="text" onChange={(e)=>sethearBrain(e.target.value)} value={hearBain}  className="demo-input" />
                        <p className="input-title-txt">Tell Us About Your Training Goals</p>
                        <input type="text" onChange={(e)=>settraningGoal(e.target.value)} value={traningGoal}  className="demo-input" />
                        <button onClick={requestHandler} className="request-info">Request Information</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default RequestDemo