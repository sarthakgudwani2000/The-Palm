
import React, { useState } from 'react';
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
      </div>
      <div className="header-text">
        <h1>Attractions</h1>
      </div>

      <div className="attraction-heading">
        <h1>Uttarakhand Unveiled: Where Nature's Symphony Plays</h1>
        <h2>"Dive into the mystical tapestry of Uttarakhand, where every valley tells a story, and each mountain peak whispers a secret."</h2>
      </div>

      {/* First Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="first_slide_container" onMouseEnter={() => handleSlideMouseEnter('first_slide_container')}>
            </div>
            <div className="first_slide_container slide_2" onMouseEnter={() => handleSlideMouseEnter('slide_2')}>
            </div>
            <div className="first_slide_container slide_3" onMouseEnter={() => handleSlideMouseEnter('slide_3')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Aquarium Island Cafe
          </h3>
          <span>4.6 Km | 13 mins</span>

          <p>
            Aquarium Island Cafe by the Lake Hill is a unique cafe in Bhimtal, Uttarakhand with a public aquarium and views of the lake. The cafe is located on a small island in the middle of Bhimtal Lake, and its aquarium is home to 40 different species of fish from countries like Mexico, South Africa, and China. 
          </p>
        </div>
      </div>

      {/* Second Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="second_slide_container" onMouseEnter={() => handleSlideMouseEnter('second_slide_container')}>
            </div>
            <div className="second_slide_container slide_4" onMouseEnter={() => handleSlideMouseEnter('slide_4')}>
            </div>
            <div className="second_slide_container slide_5" onMouseEnter={() => handleSlideMouseEnter('slide_5')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
            Sattal Lake
          </h3>
          <span>7.7 Km | 18 mins</span>

          <p>
          Sattal is a cluster of mysteriously inter-connected seven freshwater lakes located in the Nainital district of Kumaon region. Sat Tal is perched at an altitude of 1370 mts above sea level offering splendors of nature. The group of lakes is set amidst dense forests of oak and pine trees.
          </p>
        </div>
      </div>

      {/* Third Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="third_slide_container" onMouseEnter={() => handleSlideMouseEnter('third_slide_container')}>
            </div>
            <div className="third_slide_container slide_6" onMouseEnter={() => handleSlideMouseEnter('slide_4')}>
            </div>
            <div className="third_slide_container slide_7" onMouseEnter={() => handleSlideMouseEnter('slide_5')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
          Khurpatal
          </h3>
          <span>31.9 Km | 1 hr 13 mins</span>

          <p>
          Khurpatal is a village in the Nainital region of Uttarakhand, India. It's located 12 kilometers from Nainital, at an altitude of 1,635 meters above sea level, and is known for its emerald blue-green lake, pine and cedar trees, and scenic views of the mountains.
          </p>
        </div>
      </div>

      {/* Fourth Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="fourth_slide_container" onMouseEnter={() => handleSlideMouseEnter('fourth_slide_container')}>
            </div>
            <div className="fourth_slide_container slide_8" onMouseEnter={() => handleSlideMouseEnter('slide_8')}>
            </div>
            <div className="fourth_slide_container slide_9" onMouseEnter={() => handleSlideMouseEnter('slide_9')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
          Almora
          </h3>
          <span>58.1 Km | 1 hr 53 mins</span>

          <p>
          Almora is a picturesque district in the Kumaon region of Uttarakhand, India, known for its natural beauty, cuisine, and cultural heritage. It's located on a horse-saddle-shaped hillock at an elevation of 1,651 meters (5,417 feet), with views of the snow-capped Himalayas. The town is surrounded by forests of pine and fir trees, and the Koshi and Suyal rivers flow alongside it.
          </p>
        </div>
      </div>

      {/* Fifth Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="fifth_slide_container" onMouseEnter={() => handleSlideMouseEnter('fifth_slide_container')}>
            </div>
            <div className="fifth_slide_container slide_10" onMouseEnter={() => handleSlideMouseEnter('slide_10')}>
            </div>
            <div className="fifth_slide_container slide_11" onMouseEnter={() => handleSlideMouseEnter('slide_11')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
          Nainital
          </h3>
          <span>17.9 Km | 48 mins</span>

          <p>
          Nainital is a hill station in the Kumaon region of Uttarakhand, India, that's known as the "City of Lakes". It's located at an altitude of 1,938 meters (6,358 ft) above sea level, surrounded by seven hills, and centered around the emerald mountain lake Naini. The town is also known for its scenic views of the Himalayas.
          </p>
        </div>
      </div>

      {/* Sixth Slide Container */}
      <div class="attarction-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`container ${expanded ? 'expanded' : ''}`} onMouseLeave={handleImageRightMouseLeave}>
          <div className="slides">
            <div className="sixth_slide_container" onMouseEnter={() => handleSlideMouseEnter('sixth_slide_container')}>
            </div>
            <div className="sixth_slide_container slide_12" onMouseEnter={() => handleSlideMouseEnter('slide_12')}>
            </div>
            <div className="sixth_slide_container slide_13" onMouseEnter={() => handleSlideMouseEnter('slide_13')}>
            </div>
          </div>
        </div>
        <div>
          <h3>
          Corbett National Park
          </h3>
          <span>81.2 Km | 2 hr 14 mins</span>

          <p>
          Jim Corbett National Park is a wildlife sanctuary in India's Uttarakhand state, located at the foothills of the Himalayas near the popular hill-station of Nainital. Established in 1936, it is India's oldest national park and is famous for its Bengal tigers, the highest number of any Indian national park. The park is divided into six tourism zones, including Bijrani Safari Zone, Jhirna Safari Zone, and Dhikala Zone. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attraction;