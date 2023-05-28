import React from 'react'
import './NavSocialIconsStyle.css';
import { MdEmail } from 'react-icons/md';
import { AiOutlineInstagram, AiTwotoneHome} from 'react-icons/ai';
import { TbBrandTwitter } from 'react-icons/tb';
import { FiFacebook } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';
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
                        <p className='icons-home'><AiTwotoneHome/></p>
                        <p className='address'>Khayaban Gardens Faisalabad</p>
                    </div>
                    <div className="navsocial-links">
                        <Link to=""><span className='navsocial-icons'><BsWhatsapp className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><FiFacebook className='icons-nav' /></span></Link>
                        <Link to="" ><span className='navsocial-icons'><SlSocialLinkedin className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><TbBrandTwitter className='icons-nav' /></span></Link>
                        <Link to=""><span className='navsocial-icons'><AiOutlineInstagram className='icons-nav' /></span></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NavSocialIcons