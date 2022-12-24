import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/hero-slider.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 3500,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover : false,
  };
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb3">For Rent ₹ 20,000 Per Day</h6>
            <h1 className="text-light mb4">Reserve now and get 25% off</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/equipments">Reserve now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb3" >For Rent ₹ 2,22,000</h6>
            <h1 className="text-light mb4">Excavator Cat 320D3 for rent out</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/equipments">Reserve now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb3">For Rent ₹ 25,000 Per Day</h6>
            <h1 className="text-light mb4">Reserve now and get 50% off</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/equipments">Reserve now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
