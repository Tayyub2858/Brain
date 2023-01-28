import React from 'react';
import Nav from '../../Modules/Nav/Nav';
import DataAnalysic from '../../Modules/Module1/DataAnalysic';
import Footer from '../../Modules/Footer/Footer';
import LearningModule from '../../Modules/Module16/LearningModule';
import Companies from '../../Modules/Module15/Companies';
import Software from '../../Modules/Module 2/Software';
import DreamJob from '../../Modules/Module 3/DreamJob';
import TeamTraining from '../../Modules/Module14/TeamTraining';
import Connect from '../../Modules/Module13/Connect';
import EarnCredentials from '../../Modules/Module12/EarnCredentials';
import Showcase from '../../Modules/Module11/Showcase';
import Career from '../../Modules/Module 4/Career';
import Learning from '../../Modules/Module5/Learning';
import Build from '../../Modules/Module 6/Build';
import Skills from '../../Modules/Module 7/Skills';
import Marketing from '../../Modules/Module 8/Marketing';
const LandingPage = () => {
    return (
        <>
            <Nav />
            <DataAnalysic />
            <Software />
            <DreamJob />
            <Career />
            <Learning />
            <Build />
            <Skills />
            <Marketing />
            <Showcase />
            <EarnCredentials />
            <Connect />
            <TeamTraining />
            <Companies />
            <LearningModule />
            <Footer />

        </>
    )
}

export default LandingPage