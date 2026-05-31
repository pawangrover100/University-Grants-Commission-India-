import React from "react";
import SliderComponent from "react-slick";

// Vite/React 19 की समस्या को ठीक करने के लिए
const Slider = SliderComponent.default || SliderComponent;

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container" style={{ width: "100%", margin: "0 auto", padding: "40px" }}>
      <Slider {...settings}>
        <div>
          <div style={{ background: "#5f9ea0", padding: "50px", textAlign: "center", color: "#fff" }}>
            <h3>1</h3>
          </div>
        </div>
        <div>
          <div style={{ background: "#5f9ea0", padding: "50px", textAlign: "center", color: "#fff" }}>
            <h3>2</h3>
          </div>
        </div>
        <div>
          <div style={{ background: "#5f9ea0", padding: "50px", textAlign: "center", color: "#fff" }}>
            <h3>3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomSlider;