import React from "react";
import blog1 from "../images/blog1.jpg";
import "../stylesheet/blogDetail.scss";
import MetaTags from "react-meta-tags";

export default function wordpress_is_best_platform_for_blogging() {
  return (
    <div>
      <MetaTags>
        <title>Page 1</title>
        <meta name='description' content='Some description.' />
        <meta property='og:title' content='MyApp' />
        <meta property='og:image' content='path/to/image.jpg' />
      </MetaTags>
      <div className='blogDetail-container margin-top-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='blogDetail-container__image'>
                <img src={blog1} alt='' className='w-100' />
              </div>
              <h1 className='title1'>
                Welcome to my blog - this is my first post
              </h1>
              <p className='para'>
                I will mostly talk about tehnology, ecommerce, making money
                online, business etc.
              </p>
              <p className='para'>
                I am very excited to begin this jurney. hopefully i will get ull
                support from you people. i will post content that surely will
                help you some way. as i am new to writing there might be ew
                mistakes i hope you guys can understand
              </p>
              <p className='para'>
                Brief intro about me. i am an IT engineer having 3+ years of
                freelancing experience in web development, social media
                marketing etc and 7+ years of real estate experience
              </p>
              <p className='para'>
                Thank you for taking time and reading my first post
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
