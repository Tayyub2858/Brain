import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Learn/Courses';
import CorporateTraining from './Pages/CoporateTraining/CorporateFE/CorporateTraining';
import Gallery from './Pages/Gallery/Gallery';
import BlogMainPage from './Pages/Blog/BlogMainPage';
import Dashboard from './Modules/Drawer/Dashboard';
import Signup from './Pages/SignUp/Signup';
import LearningPath from './Components/Component2/LearningPath'
import Cources from './Components/Component3/Cources';
import Assessment from './Components/Component4/Assessment';

function App() {
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
          <Route path='/login' exact element={<Dashboard />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/learning-path' exact element={<LearningPath />} />
          <Route path='/dashboard-courses' exact element={<Cources />} />
          <Route path='/assessments' exact element={<Assessment />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
