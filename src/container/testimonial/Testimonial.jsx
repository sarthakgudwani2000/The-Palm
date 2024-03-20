import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";


import './Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000 
  };

  return (
    <div className='new-container'>
<h1 className='head'>What Our Guests Say?</h1>
    <Slider {...settings}>

    <div className='testimonial-container'>
        <div className="testimonial">    
 <p className="content"> My stay at Traveller Inn was delightful. The combination of a prime location, comfortable accommodation, excellent service, and top-notch facilities made for a memorable experience. I would highly recommend this hotel.</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
          <p className="name">'Aditi Sharma'</p>
          </div>
          </div>
        
          <div className='testimonial-container'>
          

      <div className="testimonial">
         
          <p className="content">'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          ''Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Jane Smith'</p>
          </div>
      </div>
      <div className='testimonial-container'>
      

      <div className="testimonial">
          
          <p className="content">'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Jane Smith'</p>
          </div>
    </div>

    <div className='testimonial-container'>
      <div className="testimonial">
          
          <p className="content">'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Jane Smith'</p>
          </div>
      </div>

      <div className='testimonial-container'>

      <div className="testimonial">
          
          <p className="content">'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo '</p>
          <div className="background-icon">
          <RiDoubleQuotesL className="quote-icon" />
        </div>
            <p className="name">'Jane Smith'</p>
          </div>
      </div>
    </Slider>
    </div>

     );
    };
export default Testimonial;
