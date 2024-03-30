// AboutUs.js
import React, { useState } from 'react';
// import Bhimtal from '../../assets/1.jpg';
// import Kainchi_Dham_Banner from '../../assets/1.jpg';
// import Nainital_Lake from '../../assets/1.jpg';
// import ghorakhal_mandir from '../../assets/1.jpg';
// import Tea_Garden from '../../assets/1.jpg';
// import kyaking from '../../assets/1.jpg';
// import zip_line from '../../assets/1.jpg';

// import kainchi_dham from '../../assets/1.jpg';
// import Pantnagar_airport from '../../assets/1.jpg';
// import naina_peak from '../../assets/1.jpg';


import "./Attraction.css"

const Attraction = () => {
  const [expanded, setExpanded] = useState(true);

  const handleMouseEnter = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  const handleSlideMouseEnter = (slideClass) => {
    if (slideClass !== "first_slide_container" && expanded) {
      setExpanded(false);
    }
  };

  const handleImageRightMouseLeave = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  return (
    <div className="attraction-container">
      <div className="header-container">
        {/* <img src={Kainchi_Dham_Banner} alt="Abttraction" className="header-image" /> */}
      </div>
      <div className="header-text">
        <h1>Attractions</h1>
      </div>

      <div className="attraction-heading">
        <h1>Uttarakhand Unveiled: Where Nature's Symphony Plays</h1>
        <h2>"Dive into the mystical tapestry of Uttarakhand, where every valley tells a story, and each mountain peak whispers a secret."</h2>
      </div>

      {/* First Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="first_slide_container" onMouseEnter={() => handleSlideMouseEnter('first_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="first_slide_container slide_2" onMouseEnter={() => handleSlideMouseEnter('slide_2')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="first_slide_container slide_3" onMouseEnter={() => handleSlideMouseEnter('slide_3')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>

      {/* Second Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="second_slide_container" onMouseEnter={() => handleSlideMouseEnter('second_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="second_slide_container slide_4" onMouseEnter={() => handleSlideMouseEnter('slide_4')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="second_slide_container slide_5" onMouseEnter={() => handleSlideMouseEnter('slide_5')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe by The Lake Hill
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>

      {/* Third Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="third_slide_container" onMouseEnter={() => handleSlideMouseEnter('third_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="third_slide_container slide_6" onMouseEnter={() => handleSlideMouseEnter('slide_4')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="third_slide_container slide_7" onMouseEnter={() => handleSlideMouseEnter('slide_5')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe by The Lake Hill
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>

      {/* Fourth Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="fourth_slide_container" onMouseEnter={() => handleSlideMouseEnter('fourth_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="fourth_slide_container slide_8" onMouseEnter={() => handleSlideMouseEnter('slide_8')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="fourth_slide_container slide_9" onMouseEnter={() => handleSlideMouseEnter('slide_9')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe by The Lake Hill
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>

      {/* Fifth Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="fifth_slide_container" onMouseEnter={() => handleSlideMouseEnter('fifth_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="fifth_slide_container slide_10" onMouseEnter={() => handleSlideMouseEnter('slide_10')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="fifth_slide_container slide_11" onMouseEnter={() => handleSlideMouseEnter('slide_11')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe by The Lake Hill
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>

      {/* Sixth Slide Container */}
      <div class="image-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="sixth_slide_container" onMouseEnter={() => handleSlideMouseEnter('sixth_slide_container')}>
              <div className="slide_info">
                {/* <p>Outer Islands</p> */}
              </div>
            </div>
            <div className="sixth_slide_container slide_12" onMouseEnter={() => handleSlideMouseEnter('slide_12')}>
              <div className="slide_info">
                {/* <p>Pacific Harbour and Beqa</p> */}
              </div>
            </div>
            <div className="sixth_slide_container slide_13" onMouseEnter={() => handleSlideMouseEnter('slide_13')}>
              <div className="slide_info">
                {/* <p>Savusavu & Surrounds</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe by The Lake Hill
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. The cafe offers a variety of dishes, including local specialties, and some say the food is delicious. The cafe is open every day from 9:30 AM–7 PM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attraction;