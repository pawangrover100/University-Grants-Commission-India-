import React from "react";
// Import the component with a different name to avoid the declaration error
import SlickSlider from "react-slick";

// Essential CSS for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import video_slider from "../../assets/video_slider.mp4";
import main_slider2 from "../../assets/main-slider2.png";
import main_slider3 from "../../assets/main-slider3.png";

// Vite/React 19 compatibility fix using the renamed import
const Slider = SlickSlider.default || SlickSlider;

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (<>
    <div className="slider-container" style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {/* Slide 1: Video */}
        <div className="outline-none">
          <div style={{ background: "#000", height: "500px", width: "100%" }}>
            <video 
              src={video_slider} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              autoPlay 
              muted 
              loop 
              playsInline
            />
          </div>
        </div>

        {/* Slide 2: Image */}
        <div className="outline-none">
          <div style={{ background: "#5f9ea0", height: "500px", width: "100%" }}>
            <img 
              src={main_slider2} 
              alt="Slide 2" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>

        {/* Slide 3: Image */}
        <div className="outline-none">
          <div style={{ background: "#5f9ea0", height: "500px", width: "100%" }}>
            <img 
              src={main_slider3} 
              alt="Slide 3" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </Slider>
    </div>
    <div>
      <marquee  >
     <h2 className="text-orange-500 font-bold text-xl">Alert: Students/Parents can verify the authenticity of Higher Educational Institutions (HEIs) before taking admission (Please check under Main Menu Tab (HEIs)) | Invitation of applications from eligible colleges for Deemed to be University status, may apply on the portal at https://deemed.ugc.ac.in/ | Invitation of applications from eligible colleges for conferment/extension of Autonomous status, colleges may apply on the portal at https://aucollege.ugc.ac.in
</h2> 
      </marquee>
    </div>
    </>
  );
}

export default CustomSlider;