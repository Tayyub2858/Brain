import React from 'react'
import { Modal } from '@material-ui/core';



const RequestDemo = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const { setFirstName, setLastName, setCompanyName, setCompanyEmail, setCompanySize, setHearAbout, setTrainingGoals, requestHandler } = FetchDemoData();
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
                        <input type="text" className="demo-input" />
                        <p className="input-title-txt">Last Name *</p>
                        <input type="text" className="demo-input" />
                        <p className="input-title-txt">Business Email Address *</p>
                        <input type="text" className="demo-input" />
                        <p className="input-title-txt">Company Name *</p>
                        <input type="text" className="demo-input" />
                        <p className="input-title-txt">Company Size *</p>
                        <div className="radio-container">
                            <input type="radio" name='companysize' value="50-99" /><span className="radio-title">50-99</span>
                            <input type="radio" name='companysize' value="100-199" /><span className="radio-title">100-199</span>
                            <input type="radio" name='companysize' value="200-299" /><span className="radio-title">200-299</span>
                            <input type="radio" name='companysize' value="300" /><span className="radio-title">300+</span>
                        </div>

                        <p className="input-title-txt">How did your hear about Brain Analytics?</p>
                        <input type="text" className="demo-input" />
                        <p className="input-title-txt">Tell Us About Your Training Goals</p>
                        <input type="text" className="demo-input" />
                        <button className="request-info">Request Information</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default RequestDemo