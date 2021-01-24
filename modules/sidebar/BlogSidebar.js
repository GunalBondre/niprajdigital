import React, { Component } from "react";
import blog1 from "../../images/blog1.jpg";
import "./blogSidebar.scss";
export default class BlogSidebar extends Component {
  render() {
    return (
      <div>
        <h3 className='text-center title3'>Popular post</h3>
        <div className='blog-sidebar-container'>
          <div className='blog-sidebar-container__image'>
            <img src={blog1} alt='' />
          </div>
          <div className='blog-sidebar__title'></div>
        </div>
        <div className='blog-sidebar-container'>
          <div className='blog-sidebar-container__image'>
            <img src={blog1} alt='' />
          </div>
        </div>
        <div className='blog-sidebar-container'>
          <div className='blog-sidebar-container__image'>
            <img src={blog1} alt='' />
          </div>
        </div>
      </div>
    );
  }
}
