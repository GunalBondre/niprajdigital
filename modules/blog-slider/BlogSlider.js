import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import "./blogSlider.scss";
export default class Blog extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <Carousel
          responsive={responsive}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
        >
          <div className='blog-slider-container'>
            <div className='blog-slider-container__image'>
              <img src={blog1} alt='blog1' />
            </div>
          </div>
          <div className='blog-slider-container'>
            <div className='blog-slider-container__image'>
              <img src={blog3} alt='blog3' />
            </div>
          </div>
          <div className='blog-slider-container'>
            <div className='blog-slider-container__image'>
              <img src={blog2} alt='blog3' />
            </div>
          </div>
          <div className='blog-slider-container'>
            <div className='blog-slider-container__image'>
              <img src={blog1} alt='blog2' />
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
