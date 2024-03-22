import React from "react";
import './index.css';
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import ContactUs from './routes/ContactUs'
import Attraction from './routes/Attraction'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';



export const App = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/aboutus" element={<AboutUs />} />
      <Route path= "/contactus" element={<ContactUs />} />
      <Route path= "/attractions" element={<Attraction />} />
    </Routes>
      
    </>
  )
}

export default App;