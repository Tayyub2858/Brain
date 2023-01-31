import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './Pages/Pricing/Pricing';
import Career from './Modules/Module 4/Career';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<LandingPage/>}/>
      <Route path='/pricing' exact element={<Pricing/>}/>
      <Route path='/career' exact element={<Career/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
