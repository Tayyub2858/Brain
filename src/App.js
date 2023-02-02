import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
