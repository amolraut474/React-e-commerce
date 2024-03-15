// BlogPage.js
import React from 'react';
import Blog_list from '../components/Blog_Com/Blog_list';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
const BlogPage = () => {
  return (
    <>
    <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Blog <span class="Cart-c"> List</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>

    <Blog_list/>
 
    </>
    
  );
  
};

export default BlogPage;