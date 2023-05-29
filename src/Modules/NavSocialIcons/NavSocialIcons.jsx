import React from 'react'
import './NavSocialIconsStyle.css';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn} from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import {BsFacebook } from 'react-icons/bs';
import { FaLinkedin ,FaInstagramSquare, FaSearch} from 'react-icons/fa';
import { RiWhatsappFill} from 'react-icons/ri';
import { IoCall } from 'react-icons/io5'
import { Link } from 'react-router-dom';
const NavSocialIcons = () => {
    return (
        <>
            <div className="navSocialicons-container">
                <div className="socialicons-text-container">
                    <div className="socialicons-leftside">
                        <p className='icons-div'><MdEmail /></p>
                        <p className='social-email'>brainanalytics.pk@gmail.com</p>
                        <div style={{ borderLeft: "1px solid silver", height: "4vh", marginTop: "10px" }}></div>
                        <p className='icons-call'><IoCall /></p>
                        <p className='contact-nbr'>041-8787246</p>
                        <div style={{ borderLeft: "1px solid silver", height: "4vh", marginTop: "10px" }}></div>
                        <p className='icons-home'><MdLocationOn/></p>
                        <p className='address'>Khayaban Gardens Faisalabad</p>
                    </div>
                    <div className="navsocial-links">
                        <Link to=""><span className='navsocial-icons'><RiWhatsappFill className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><BsFacebook className='icons-nav' /></span></Link>
                        <Link to="" ><span className='navsocial-icons'><FaLinkedin className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><AiFillTwitterCircle className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><FaInstagramSquare className='icons-nav' /></span></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NavSocialIcons