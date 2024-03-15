// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './Blog_deta'
import Newsletter from'../Newsletter-form/Newsletter';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Blog <span class="Cart-c">Single </span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>

    <div className='blog-com'>
    <div className='container'>
        <div className='row'>
        <div class="blog-list">
    <img src={post.imageUrl} alt={post.title}/>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      </div>
    </div>
    </div>
    </div>
    <Newsletter/>
    </>
  );
};

export default BlogPost;