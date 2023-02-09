import React from "react";
import {MdDashboard, MdLocalLibrary, MdOutlineSlowMotionVideo} from 'react-icons/md';
import {FaClipboardCheck, FaProjectDiagram} from 'react-icons/fa';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {GrStorage} from 'react-icons/gr';
import {BiHelpCircle} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi'
const DashboardData = [
    {
        title:'Dashboard',
        icon :<MdDashboard/>,
        link : '/Dashboard'
    },
    {
        title:'My Learning Plan',
        icon :<MdLocalLibrary/>,
        link : '/Dashboard'
    },
    {
        title:'Courses & Paths',
        icon :<MdOutlineSlowMotionVideo/>,
        link : '/Dashboard'
    },
    {
        title:'Skills Assessments',
        icon :<FaClipboardCheck/>,
        link : '/Dashboard'
    },
    {
        title:'Project Portfolio',
        icon :< FaProjectDiagram/>,
        link : '/Dashboard'
    },
    {
        title:'Credentials',
        icon :<AiOutlineCheckCircle/>,
        link : '/Dashboard'
    },
    {
        title:'Data Playground',
        icon :<GrStorage/>,
        link : '/Dashboard'
    },
    {
        title:'Help Center',
        icon :<BiHelpCircle/>,
        link : '/Dashboard'
    },
    {
        title:'Logout',
        icon :<FiLogOut/>,
        link : '/Dashboard'
    },
    
]
export default DashboardData;