import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Learn/Courses';
import CorporateTraining from './Pages/CoporateTraining/CorporateFE/CorporateTraining';
import Gallery from './Pages/Gallery/Gallery';
import BlogMainPage from './Pages/Blog/BlogMainPage';
import DashBoard from './Components/Component1/Dashboard';
import Signup from './Pages/SignUp/Signup';
import LearningPath from './Components/Component2/LearningPath';
import DataPlayground from './Components/Component7/DataPlayground';
import DataAnalysis from './LearningPath/DataAnalysis/DataAnalysis';
import DigitalMarketing from './LearningPath/DigitalMarketing/DigitalMarketing';
import GraphicDesigning from './LearningPath/GraphicDesigning/GraphicDesigning';
import VirtualAssistant from './LearningPath/Virtula-Assistant/VirtualAssistant';
import WebDevelopment from './LearningPath/WebDevelopment/WebDevelopment';
import DataAnalysisShowVideo from './LearningPath/DataAnalysis/DataAnalysisVidos/DataAanalysisShow-video';
import AdvanceFinancialShowVideo from './LearningPath/DataAnalysis/AdvanceFinancialVideo/AdvanceFinancialShow-video';
import CoursePage from './LearningPath/DataAnalysis/DataAnalysisVidos/StartCoursePage/CoursePage';
import AOS from 'aos'
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true }
    );
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/learn' exact element={<Courses />} />
          <Route path='/corporate-training' exact element={<CorporateTraining />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/blog' exact element={<BlogMainPage />} />
          <Route path='/signup' exact element={<Signup />} />
          {/* add private Routes */}
          <Route path='/learning-path' exact element={<LearningPath />} />
          <Route path='/data-playground' exact element={<DataPlayground />} />
          <Route path='/dashboard' exact element={<DashBoard />} />
          <Route path='/learning-path/graphicdesigning' exact element={<GraphicDesigning />} />
          <Route path='/learning-path/digitalmarketing' exact element={<DigitalMarketing />} />
          <Route path='/learning-path/accounting&finance' exact element={<DataAnalysis />} />
          <Route path='/learning-path/accounting&finance/data-analysis&visualization-in-power-bi/videos' exact element={<DataAnalysisShowVideo />} />
          <Route path='/learning-path/accounting&finance/advanced-financial-reporting-in-power-bi/videos' exact element={<AdvanceFinancialShowVideo />} />
          <Route path='/learning-path/virtualassistant' exact element={<VirtualAssistant />} />
          <Route path='/learning-path/webdevelopment' exact element={<WebDevelopment />} />
          <Route path='/learning-path/accounting&finance/data-analysis&visualization-in-power-bi/' exact element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
