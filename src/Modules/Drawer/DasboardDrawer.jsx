import React from 'react';
import './DashboardDrawerStyles.css'
import { Drawer } from '@material-ui/core'
import Logo from '../../Assets/Front-Page/Logo4.png'
import { MdDashboard, MdLocalLibrary, MdOutlineSlowMotionVideo } from 'react-icons/md';
import { FaClipboardCheck, FaProjectDiagram } from 'react-icons/fa';
import { GrStorage } from 'react-icons/gr';
import {GiHamburgerMenu} from 'react-icons/gi'
import { BiHelpCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const DrawerDasboard = () => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <>
            <GiHamburgerMenu onClick={handleDrawerOpen}/>
            <Drawer
                className='drawer'
                anchor="left"
                onClose={handleDrawerClose}
                open={open}>

                <div className="Dashboard-container">
                    <div className="dashbord-left-side">
                        <div className="sidebar">
                            <ul className='sidebar-list'>
                                <Link to='/'> <img src={Logo} alt="Display Logo" className='sidebar-logo' /> </Link>
                                <div className="menu-container">
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><MdDashboard /></div>
                                        <div className='sidebar-title'>Dashboard</div>
                                    </li>
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><MdLocalLibrary /></div>
                                        <div className='sidebar-title'>My Learning Plan</div>
                                    </li>
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><MdOutlineSlowMotionVideo /></div>
                                        <div className='sidebar-title'>Courses</div>
                                    </li>
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><FaClipboardCheck /></div>
                                        <div className='sidebar-title'>Assesments</div>
                                    </li>
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><FaProjectDiagram /></div>
                                        <div className='sidebar-title'>Portfolio</div>
                                    </li>
                                    <li className="sidebar-row">
                                        <div className='sidebar-icons'><GrStorage /></div>
                                        <div className='sidebar-title'>Data Playground</div>
                                    </li>
                                    <div className="lower-buttons">
                                        <li className="sidebar-row">
                                            <div className='sidebar-icons'><BiHelpCircle /></div>
                                            <div className='sidebar-title'>Help Center</div>
                                        </li>
                                        <li className="sidebar-row">
                                            <div className='sidebar-icons'><FiLogOut /></div>
                                            <div className='sidebar-title'>Logout</div>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="dashoard-right-side"></div>
                </div>

            </Drawer>

        </>


    );
}
export default DrawerDasboard;