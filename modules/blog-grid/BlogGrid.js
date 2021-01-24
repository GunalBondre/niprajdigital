import React, { Component } from "react";
import "./blogGrid.scss";
import blog1 from "../../images/blog1.jpg";
import blogbg from "../../images/register-on-amazon/register-on-amazon-background.png";
import { Link } from "react-router-dom";
export default class BlogGrid extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='blog-grid-container'>
                <div className='blog-grid-container__image'>
                  <img src={blogbg} alt='' />
                </div>
                <div className='blog-grid-container__avatar text-padding d-flex justify-content-around'>
                  <h6 className='title6'>Gunal Bondre</h6>
                  <h6 className='title6'>07 Jan 2021</h6>
                </div>
                <div className='blog-grid-container__heading'>
                  <h4 className='title4 text-center text-on-image'>
                    How to register your business on amazon in 2021
                  </h4>
                  <p className='para1 text-center'>
                    Hey congratulation on taking first step towards your dream.
                    You know 70% people never start working on their dream.
                  </p>
                </div>{" "}
                <div className='blog-grid-container__category text-padding'>
                  <p className='para1 text-center'>
                    {" "}
                    <i className='fas fa-tags'></i> Technology
                  </p>
                </div>{" "}
                <Link
                  to='/how-to-register-your-business-on-amazon-india-in-2021'
                  className='btn  read-btn theme-btn'
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='blog-grid-container'>
                <div className='blog-grid-container__image'>
                  <img src={blog1} alt='' />
                </div>
                <div className='blog-grid-container__avatar text-padding d-flex justify-content-around'>
                  <h6 className='title6'>Gunal Bondre</h6>
                  <h6 className='title6'>29 dec 2020</h6>
                </div>
                <div className='blog-grid-container__heading'>
                  <h4 className='title4 text-center text-on-image'>
                    4 steps to get your first sell on amazon India in 2021
                  </h4>
                  <p className='para1 text-center'>
                    “I don’t have to go to the customer, the customer comes to
                    me” This is a quote from amazon India's official website...
                  </p>
                </div>{" "}
                <div className='blog-grid-container__category text-padding'>
                  <p className='para1 text-center'>
                    {" "}
                    <i className='fas fa-tags'></i> Technology
                  </p>
                </div>{" "}
                <Link
                  to='/4-steps-to-get-your-first-sell-on-amazon-India-in-2021'
                  className='btn  read-btn theme-btn'
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='blog-grid-container'>
                <div className='blog-grid-container__image'>
                  <img src={blog1} alt='' />
                </div>
                <div className='blog-grid-container__avatar text-padding d-flex justify-content-around'>
                  <h6 className='title6'>Gunal Bondre</h6>
                  <h6 className='title6'>29 dec 2020</h6>
                </div>
                <div className='blog-grid-container__heading'>
                  <h4 className='title4 text-center text-on-image'>
                    first blog post
                  </h4>

                  <p className='para1 text-center'>
                    Hello guys this is gunal here. welcome to my blog...
                  </p>
                </div>
                <div className='blog-grid-container__category text-padding'>
                  <p className='para1 text-center'>
                    {" "}
                    <i className='fas fa-tags'></i> Technology
                  </p>
                </div>
                <Link to='/first-blogPost' className='btn  read-btn theme-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
