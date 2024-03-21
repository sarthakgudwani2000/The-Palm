import ScrollToTop from "./scrollToTop";

import Home from "../src/pages/home/Home.jsx"
import AboutUs from "../src/pages/aboutUs/AboutUs.jsx"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
   
   
    <Router>
      
      <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<AboutUs/>} />
          
        </Routes>
        
       
  </Router>
  );
}

export default App;
