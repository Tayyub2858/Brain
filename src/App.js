import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Learn/Courses';
import CorporateTraining from './Pages/CoporateTraining/CorporateFE/CorporateTraining';
import Gallery from './Pages/Gallery/Gallery';
import BlogMainPage from './Pages/Blog/BlogMainPage';
import LoginPage from './Pages/Dashboard/LoginPage';

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
          <Route path='/login' exact element={<LoginPage />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
