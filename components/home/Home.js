import React, { Component } from "react";
import BlogSlider from "../../modules/blog-slider/BlogSlider";
import BlogGrid from "../../modules/blog-grid/BlogGrid";
import BlogSidebar from "../../modules/sidebar/BlogSidebar";
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <BlogSlider></BlogSlider> */}
        <section className='grid margin-top-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 m-auto'>
                <BlogGrid></BlogGrid>
              </div>
              {/* <div className='col-md-3'>
                <BlogSidebar></BlogSidebar>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
