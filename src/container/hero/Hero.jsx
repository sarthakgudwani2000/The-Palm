import React from "react";
import './Hero.css';

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <div>
            <div className="section">
                <div className="parallax">
                  <div className="hero_text">
                    <h5>Welcome To</h5>
                    <div className="hero_heading">
                    <h1>The Palm</h1>
                    </div>
                    </div>
                      <div className="text_change">
                        
                        <h3>Come Experience Incredible<span></span></h3> 
                     </div>
                  </div>
                  
                
            </div>

           
        </div>
    );
}

export default Hero;