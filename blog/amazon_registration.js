import React, { Component } from "react";
import bgImg from "../images/register-on-amazon/register-on-amazon-background.png";
import "../stylesheet/blogDetail.scss";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

export default class amazon_registration extends Component {
  render() {
    return (
      <div>
        {" "}
        <MetaTags>
          <title>How to register business on amazon india in 2021</title>
          <meta
            name='description'
            content='A guide to register your business on amazon india in 2021.'
          />
          <meta
            property='og:title'
            content='How to register business on amazon india in 2021'
          />
          <meta
            property='og:image'
            content='../images/register-on-amazon/register-on-amazon-background.png'
          />
        </MetaTags>
        <div className='blogDetail-container margin-top-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='blogDetail-container__image'>
                  <img src={bgImg} alt='' className='w-100' />
                </div>
                <h1 className='title1'>
                  How to register account on amazon india in 2021
                </h1>
                <p className='para'>
                  Hey congratulation on taking first step towards your dream.
                  You know 70% people never start working on their dream. They
                  have many excuses like “No time”(Time kaha milta hai yar) or
                  no money etc
                </p>
                <p className='para'>
                  You are among 30% who actually take first step. So first of
                  all congratulations.
                </p>
                <p className='para'>
                  Today we will go in detail about how you can register your
                  account on amazon
                </p>
                <p className='para'>This is what we’ll cover:</p>
                <ul>
                  <li> How to start an Amazon business</li>
                  <li>How to create a seller account on Amazon</li>
                  <li>How much does it cost to sell on Amazon?</li>
                  <li>What else should you know before selling on Amazon?</li>
                  <li> Mistakes to avoid</li>
                  <li>FAQ</li>
                </ul>
                <h2>How to start amazon business</h2>
                <p className='para'>
                  This is very common question you will face. Actually the
                  answer is very simple just dive into it.
                </p>
                <p className='para'>
                  There is no one way to start and that’s the beauty. Means You
                  can start with whatever you have with as little as 5000 rupees
                  investment. Isn’t it great?
                </p>
                <p className='para'>
                  However, the steps required getting up and running on Amazon
                  remain the same, regardless of the type of business model and
                  product you choose.
                </p>
                <p className='para'>
                  First thing first – you have to decide the path. Path depends
                  on what is your motive and what you want to achieve.
                </p>
                <ol>
                  <li>
                    <h4 className='title4'>Private Label </h4>
                    <p className='para'>
                      Private label means creating your own brand with your own
                      unique identity. It simply is the process of putting your
                      brand name on product manufactured by others. This path is
                      for those who want to create their own brand.
                    </p>
                  </li>
                  <li>
                    <h4 className='title4'>Wholesale </h4>
                    <p className='para'>
                      Wholesale means buying existing products in bulk and
                      reselling it on amazon. Provided you have the permission
                      from particular brand.
                    </p>
                  </li>
                  <li>
                    <h4 className='title4'>Handmade </h4>
                    <p className='para'>
                      this is for those who already have manufacturing setup and
                      want to explore online sales channel
                    </p>
                  </li>
                </ol>
                <p className='para'>
                  Great now you know what is your path right? Confused click
                  <Link to=''>
                    {" "}
                    <b>here</b>
                  </Link>{" "}
                  to know in detail about how individual paths works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
