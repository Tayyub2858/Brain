import React from 'react';
import Nav from '../../Modules/Nav/Nav';
import DataAnalysic from '../../Modules/Module1/DataAnalysic';
import Footer from '../../Modules/Footer/Footer';
import LearningModule from '../../Modules/Module16/LearningModule';
import Companies from '../../Modules/Module15/Companies';
import Software from '../../Modules/Module 2/Software';
import DreamJob from '../../Modules/Module 3/DreamJob';
const LandingPage = () => {
    return (
        <>
            <Nav />
            <DataAnalysic />
            <Software />
            <DreamJob />
            <Companies />
            <LearningModule />
            <Footer />

        </>
    )
}

export default LandingPage