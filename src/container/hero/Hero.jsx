import React from "react";
import './Hero.css';
import { Fade } from "react-reveal";
function Hero() {
    
    return (
        <div>
            <div className="section">
           
                <div className="parallax">
               
                  <div className="hero_text">
                     <Fade bottom distance="20%" duration={1700} >
                        <h5>Welcome To</h5>
                          <div className="hero_heading">
                             <h1>The Palm</h1>
                         </div>
                        <div className ="subheading">
                           <h3>Come Experience Incredible</h3> 
                   
                      </div>
                 </Fade>
                    </div>
                  
                      <div className="text_change">
                      <Fade bottom distance="20%" duration={1700} >
                         <span></span>
                         </Fade>
                     </div>
                      
                  </div>
                      
                
            </div>
        
           
        </div>
    );
}

export default Hero;
