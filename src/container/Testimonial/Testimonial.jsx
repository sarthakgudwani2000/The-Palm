import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Fade } from "react-reveal";
import './Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000 
  };

  return (
    <div className='new-container'>
       <Fade bottom distance="20%" duration={1700} >
         <h1 className='head'>Explore real stories from our guests, sharing their feedback and unforgettable experiences</h1>
      </Fade>
    <Slider {...settings}>

    <div className='testimonial-container'>
   
        <div className="testimonial">    
 <p className="content">'My stay at Hotel bliss was delightful. The combo of a prime location, comfortable accommodation, excellent service, and top-notch facilities made for a memorable experience. highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
          <p className="name">'Aditi Sharma'</p>
          </div>
        
          </div>
        
    <div className='testimonial-container'>
          

      <div className="testimonial">
         
          <p className="content">'My time at Hotel bliss was delightful. Its prime location, comfortable accommodation, excellent service, and top-notch facilities made for a memorable experience. Highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Jane'</p>
          </div>
      </div>
      <div className='testimonial-container'>
      

      <div className="testimonial">
          
          <p className="content">'My enjoyable time at Hotel bliss was enhanced by its prime location, cozy accommodation, exceptional service, and top-tier facilities. I highly recommend this hotel for a memorable experience'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'John doe'</p>
          </div>
    </div>

    <div className='testimonial-container'>
      <div className="testimonial">
          
          <p className="content">'A delightful stay at Hotel bliss, with its prime location, cozy accommodation, exceptional service, and top-notch facilities, creates an unforgettable experience. Highly recommend this hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'abc'</p>
          </div>
      </div>

      <div className='testimonial-container'>

      <div className="testimonial">
          
          <p className="content">'A stay at Hotel bliss proved delightful, blending prime location, comfortable accommodation, excellent service, and top-notch facilities for a memorable experience. Highly recommend the hotel.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'xyz'</p>
          </div>
      </div>
    </Slider>
    </div>

     );
    };
export default Testimonial;
