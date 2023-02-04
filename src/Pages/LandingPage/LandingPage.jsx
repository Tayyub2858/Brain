import React from "react";
import Nav from "../../Modules/Nav/Nav";
import DataAnalysic from "../../Modules/Module1/DataAnalysic";
import Footer from "../../Modules/Footer/Footer";
import Companies from "../../Modules/Module15/Companies";
import Software from "../../Modules/Module 2/Software";
import DreamJob from "../../Modules/Module 3/DreamJob";
import TeamTraining from "../../Modules/Module14/TeamTraining";
import Connect from "../../Modules/Module13/Connect";
import Showcase from "../../Modules/Module11/Showcase";
import Career from "../../Modules/Module 4/Career";
import Build from "../../Modules/Module 6/Build";
import Skills from "../../Modules/Module 7/Skills";
const LandingPage = () => {
  return (
    <>
      <Nav />
      <DataAnalysic />
      <Software />
      <DreamJob />
      <Career />
      <Showcase />
      <Build />
      <Skills />
      <Connect />
      <TeamTraining />
      <Companies />
      <Footer />
    </>
  );
};

export default LandingPage;
