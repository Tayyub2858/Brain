import React from "react";
import Nav from "../../Modules/Nav/Nav";
import DataAnalysic from "../../Modules/Module 1/DataAnalysic";
import Footer from "../../Modules/Footer/Footer";
import Companies from "../../Modules/Module 10/Companies";
import Software from "../../Modules/Module 2/Software";
import DreamJob from "../../Modules/Module 3/DreamJob";
import TeamTraining from "../../Modules/Module 9/TeamTraining";
import Connect from "../../Modules/Module 8/Connect";
import Showcase from "../../Modules/Module 7/Showcase";
import Career from "../../Modules/Module 4/Career";
import Build from "../../Modules/Module 5/Build";
import Skills from "../../Modules/Module 6/Skills";
import ClientCounter from "../../Modules/Module 11/ClientCounter";
const LandingPage = () => {
  return (
    <>
      <Nav />
      <DataAnalysic />
      <Software />
      <DreamJob />
      <Career />
      <ClientCounter />
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
