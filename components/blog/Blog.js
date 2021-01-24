import React, { Component } from "react";
import BlogSlider from "../../modules/blog-slider/BlogSlider";
import BlogGrid from "../../modules/blog-grid/BlogGrid";
import BlogSidebar from "../../modules/sidebar/BlogSidebar";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <BlogSlider></BlogSlider>
        <section className='grid margin-top-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9'>
                <BlogGrid></BlogGrid>
              </div>
              <div className='col-md-3'>
                <BlogSidebar></BlogSidebar>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
