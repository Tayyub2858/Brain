import React from 'react';
import './DashboardDrawerStyles.css'
import { Drawer } from '@material-ui/core'
import DashboardData from './DashboardData';
import Logo from '../../Assets/Front-Page/Logo4.png'

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
            <button onClick={handleDrawerOpen}>
                open
            </button>
            <Drawer
                anchor="left"
                onClose={handleDrawerClose}
                open={open}
            >




                <div className="Dashboard-container">
                    <div className="dashbord-left-side">
                        <div className="sidebar">
                            <ul className='sidebar-list'>
                                <img src={Logo} alt="Display Logo" className='sidebar-logo' />
                                {DashboardData.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="sidebar-row"
                                            onClick={() => {
                                                window.location.pathname = item.link;
                                            }}
                                        >
                                            <div className='sidebar-icons'>{item.icon}</div>
                                            <div className='sidebar-title'>{item.title}</div>
                                        </li>
                                    )
                                })}
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