import React, { Component } from "react";
import "./blogDetail.scss";
import blog1 from "../../images/blog1.jpg";

export default class BlogDetail extends Component {
  render() {
    return (
      <div>
        <div className='blogDetail-container'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='blogDetail-container__image'>
                  <img src={blog1} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
